

//نمایش صفحه رابط کاربری
figma.showUI(__html__);

//وضعیت فعال بودن حالات مورد نظر
var reversenode=false;
var textAlignHorizontal=false;
var targetlanguage="";
var translate=false;

var resultdata="";
////
figma.ui.onmessage=pluginMessage=>
{
  textAlignHorizontal=pluginMessage.textAlignHorizontal;
  reversenode=pluginMessage.reversenode;
  translate=pluginMessage.translatetext;
  targetlanguage=pluginMessage.targetlanguage;
  main()
}

function main()
{
  //شی هایی که انتخاب شده را در این متغییر ذخیره میکنیم
  const selection = figma.currentPage.selection;
  //بررسی میکنیم که آیا شی ای انتخاب شده است یا خیر
  if(selection.length == 0) 
  {
    figma.closePlugin('یک node انتخاب کنید.');
  } 
  else 
  {
    //حلقه ی تکرار شونده ای به تعداد شی های انتخاب شده
    for(const selections of selection)
    {
      //شی ها به ترتیب در هر چرخش ذخیره میشوند
      const node = selections;
      //تابع جا به جا کننده لایه ها فراخوانی میشود
      if(reversenode==true)
      reverseChildren(node);
      //تابع جا به جا کننده تراز متن فراخوانی میشود
      if(textAlignHorizontal==true)
      reverseTextAlignHorizontal(node);

      if(translate==true)
      translatetext(node)
    }
  }
}
function clone(val) {
  const type = typeof val
  if (val === null) {
    return null
  } else if (type === 'undefined' || type === 'number' ||
             type === 'string' || type === 'boolean') {
    return val
  } else if (type === 'object') {
    if (val instanceof Array) {
      return val.map(x => clone(x))
    } else if (val instanceof Uint8Array) {
      return new Uint8Array(val)
    } else {
      let o = {}
      for (const key in val) {
        o[key] = clone(val[key])
      }
      return o
    }
  }
  throw 'unknown'
}
//تابع جا به جا کننده ترتیب لایه ها 
//این تابع ترتیب فرزندان و فرزندان لایه ی فرزند را بر عکس میکند
function reverseChildren(node) {
  // گرفتن فرزندان نود
  const children = node.children;
  
  // پیمایش تمامی فرزندان نود
  for (const child of children) 
  {
    //نود در متغیر constraints ذخیره میشود
    const constraints=  child;
    //بخاطر خاصیت فقط خواندنی برخی از ویژگی ها،باید آنهارا نمونه برداری کرد
    //تابع CLONE
    //یک نمونه از شی میسازد
  
    const clone_constraints = clone(constraints.constraints);
    //ویژگی محدودیت افقی شی کپی میشود
    var constraints_horizontal=clone_constraints.horizontal;
    //اگر به سمت راست بود،به سمت چپ میشود و بالعکس
    if (constraints_horizontal=="MAX") 
    {
      constraints_horizontal="MIN";
    } 
    else if (constraints_horizontal=="MIN") 
    {
      constraints_horizontal="MAX";
    } 
    //مقدار جدید در ویژگی شی اعمال میشود
    clone_constraints.horizontal=constraints_horizontal;
    //شی ویرایش شده جای خود را به شی اصلی میدهد
    child.constraints=clone_constraints;

    // بررسی اینکه آیا حالت layoutMode این فرزند HORIZONTAL است یا نه
    if(child.layoutMode==="HORIZONTAL") 
    { 
      // بررسی اینکه آیا نوع این فرزند GROUP یا FRAME یا COMPONENT یا INSTANCE است یا نه
      if(haschild(child)) 
      {
        // اگر شرایط بالا برقرار بود، فراخوانی تابع reverseChildren برای برعکس کردن فرزندان این فرزند
        reverseChildren(child); 
      }
    }
    
    // محاسبه ایندکس مناسب برای قرار دادن فرزند در نود
    const insertIndex = children.length - 1 - children.indexOf(child); 


    // قرار دادن فرزند در نود
    node.insertChild(insertIndex, child); 
  }
}

//  تابع  که مسئول برعکس کردن تراز افقی متن‌ها در یک نود است.
function reverseTextAlignHorizontal(node)
{ 
  // گرفتن فرزندان نود
  const children = node.children;
  
  // پیمایش تمامی فرزندان نود
  for (const child of children) 
  {
   
    // بررسی اینکه آیا نوع این فرزند TEXT است یا نه
    if(child.type==="TEXT")
    {
      // یک تابع async برای بارگذاری فونت متن اجرا می‌کنیم.
      (async () => {
        // دریافت متن
        const text = child
        // بارگذاری فونت متن با استفاده از تابع loadFontAsync
        await figma.loadFontAsync(text.fontName)
        // بررسی تراز افقی متن و تغییر آن به شکل معکوس
        if( text.textAlignHorizontal==="LEFT")
        text.textAlignHorizontal="RIGHT";
        else if( text.textAlignHorizontal==="RIGHT")
        text.textAlignHorizontal="LEFT";

      
        
      })()
    }
    // بررسی اینکه آیا حالت layoutMode این فرزند HORIZONTAL است یا نه
    if(child.layoutMode==="HORIZONTAL") 
    { 
      // بررسی اینکه آیا نوع این فرزند GROUP یا FRAME یا COMPONENT یا INSTANCE است یا نه
      if(haschild(child)) 
      {
        // اگر شرایط بالا برقرار بود، فراخوانی تابع reverseTextAlignHorizontal برای برعکس کردن تراز افقی متن‌های فرزندان این فرزند
        reverseTextAlignHorizontal(child); 
      }
    }
  } 
}

function translatetext(node)
{
  const children = node.children;
for (const child of children) 
{
 
  // بررسی اینکه آیا نوع این فرزند TEXT است یا نه
  if(child.type==="TEXT")
  {
    // یک تابع async برای بارگذاری فونت متن اجرا می‌کنیم.
    (async () => {
      // دریافت متن
      const text = child
      // بارگذاری فونت متن با استفاده از تابع loadFontAsync
      await figma.loadFontAsync(text.fontName)

     // text.characters=result_of_translate(text.characters,"auto",targetlanguage);
     var text_for_translate=text.characters
     var langAbbreviation=targetlanguage_to_Abbreviation(targetlanguage)
     var s= sendRequestToGoogle(text_for_translate,"auto",langAbbreviation)
      text.characters=(await s)
      
    })()

  }
  // بررسی اینکه آیا نوع این فرزند GROUP یا FRAME یا COMPONENT یا INSTANCE است یا نه
  if(haschild(child)) 
    {
      // اگر شرایط بالا برقرار بود، فراخوانی تابع reverseTextAlignHorizontal برای برعکس کردن تراز افقی متن‌های فرزندان این فرزند
      translatetext(child); 
    }
}
}

function haschild(child)
{
    if(child.type === "GROUP" ||
    child.type === "FRAME" ||
    child.type === "COMPONENT" ||
    child.type === "INSTANCE") 
    {
      return true;
    }
}


async function sendRequestToGoogle(word,sourceLang,targetLang)
  {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&dt=bd&dj=1&q=${encodeURIComponent(
    word
  )}`;

    let result = await fetch(url);
  
    let resultdata = await result.json();
    let textsum="";
   resultdata.sentences.forEach(element => {
    textsum+=element['trans']
   });
  
    return textsum;
  }

 function targetlanguage_to_Abbreviation(lang)
 {
  let Abbreviation;
  switch(lang) {
    case "فارسی":
      Abbreviation="fa"
      break;
    case "العربیه":
      Abbreviation="ar"
      break;
      case "English":
        Abbreviation="en"
        break;
    default:
      Abbreviation="fa"
  }
  return Abbreviation;
 }