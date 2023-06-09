main()
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
    }
  }
}
//تابع جا به جا کننده ترتیب لایه ها 
//این تابع ترتیب فرزندان و فرزندان لایه ی فرزند را بر عکس میکند
function reverseChildren(node) {
  // گرفتن فرزندان نود
  const children = node.children;
  
  // پیمایش تمامی فرزندان نود
  for (const child of children) 
  {
    // بررسی اینکه آیا حالت layoutMode این فرزند HORIZONTAL است یا نه
    if(child.layoutMode==="HORIZONTAL") 
    { 
      // بررسی اینکه آیا نوع این فرزند GROUP یا FRAME یا COMPONENT یا INSTANCE است یا نه
      if(child.type === "GROUP" ||
         child.type === "FRAME" ||
         child.type === "COMPONENT" ||
         child.type === "INSTANCE") 
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
      if(child.type === "GROUP" ||
         child.type === "FRAME" ||
         child.type === "COMPONENT" ||
         child.type === "INSTANCE") 
      {
        // اگر شرایط بالا برقرار بود، فراخوانی تابع reverseTextAlignHorizontal برای برعکس کردن تراز افقی متن‌های فرزندان این فرزند
        reverseTextAlignHorizontal(child); 
      }
    }
  } 
}
