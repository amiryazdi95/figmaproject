/*
var t = 1
const selections = figma.currentPage.selection[0];
async (selections) =>{
//await figma.loadFontAsync({ family: "IR_Kelma", style: "Regular" });
await figma.loadFontAsync(selections.fontName);
//selections.textAlignHorizontal="RIGHT";
selections.characters = selections.characters.replaceAll("3","33344");
console.log(selections.textAlignHorizontal);
}

*/
/*
(async () => {
    const text = figma.currentPage.selection[0]
 
    await figma.loadFontAsync(text.fontName)
    if( text.textAlignHorizontal==="LEFT")
    text.textAlignHorizontal="RIGHT";
    else if( text.textAlignHorizontal==="RIGHT")
    text.textAlignHorizontal="LEFT";
  })()
  */
    /*
        const nodes = figma.currentPage.findAll();
        nodes.forEach(async (node) => {
            
                await figma.loadFontAsync(node.fontName);
                
                node.characters = node.characters.replaceAll("33344", "msg.replaceText");
            }
        );
      
    

//selections.textAlignHorizontal="RIGHT";
//for (var i=0;i<selections.length;i++){
 //   console.log(selections[i])
   // if(selections[i].type==="TEXT")
   // {
       
     //   s.textAlignHorizontal="LEFT";
    //    figma.currentPage.selection[i]=s;
   //     console.log("yes is text");
 //   }
   // if(selections[i].textAlignHorizontal==="RIGHT")
  //  {
    //    selections[i].textAlignHorizontal="LEFT";
   //     console.log("yes is right");  
   // }
    //selections[i].paddingLeft +=150;
//}

  



function reverseChildren(node){
    const children = node.children;
    for (const child of children) {
     
      if(child.type==="TEXT")
      {
        
        (async () => {
          const text = child
       //فونت باید بارگزاری شود
       console.log(child.textAlignHorizontal)
          await figma.loadFontAsync(text.fontName)
          if( text.textAlignHorizontal==="LEFT")
          {
            text.textAlignHorizontal="RIGHT"
          }
          if( text.textAlignHorizontal==="RIGHT")
          {
            text.textAlignHorizontal="LEFT"
          }
        })()
        
        console.log(child.textAlignHorizontal)

       // figma.notify(child.type);
      }
      
     
      if(child.layoutMode==="HORIZONTAL")
       { 
        if(child.type === "GROUP"     ||
           child.type === "FRAME"     ||
           child.type === "COMPONENT" ||
           child.type === "INSTANCE"    ) 
            {
              reverseChildren(child); 
            }
       }
      const insertIndex = children.length - 1 - children.indexOf(child); 
      node.insertChild(insertIndex, child); 
    }
    
  }
  
  const selection = figma.currentPage.selection;
  if(selection.length == 0) {
    figma.closePlugin('یک node انتخاب کنید.');
  } else {
    for(const selections of selection)
    {
      const node = selections;
      reverseChildren(node);
    }
   figma.closePlugin('برعکس شد.');
  }
   */
  
/*
  function reverseChildren(node){
    const children = node.children;
    for (const child of children) {
      if(child.type==="TEXT")
      {
        
        (async () => {
          const text = child
       
          await figma.loadFontAsync(text.fontName)
          if( text.textAlignHorizontal==="LEFT")
          text.textAlignHorizontal="RIGHT";
          else if( text.textAlignHorizontal==="RIGHT")
          text.textAlignHorizontal="LEFT";
        })()
        
        figma.notify(child.type);
      }
      if(child.layoutMode==="VERTICAL") { 
      if(child.type === "GROUP" || child.type === "FRAME" || child.type === "COMPONENT" || child.type === "INSTANCE") {
        reverseChildren(child); 
      }
     
    }
      const insertIndex = children.length - 1 - children.indexOf(child); 
      node.insertChild(insertIndex, child); 
    }
    
  }
  
  const selection = figma.currentPage.selection;
  if(selection.length == 0) {
    figma.closePlugin('یک node انتخاب کنید.');
  } else {
    for(const selections of selection)
    {
      const node = selections;
      reverseChildren(node);
    }
   // figma.closePlugin('برعکس شد.');
  }
  

function reverseChildren(node){
  const children = node.children;
  for (const child of children) {
    if(child.type==="TEXT")
    {
      
      (async () => {
        const text = child
     
        await figma.loadFontAsync(text.fontName)
        if( text.textAlignHorizontal==="LEFT")
        text.textAlignHorizontal="RIGHT";
        else if( text.textAlignHorizontal==="RIGHT")
        text.textAlignHorizontal="LEFT";
      })()
      
      figma.notify(child.type);
    }
    if(child.layoutMode==="HORIZONTAL") { 
    if(child.type === "GROUP" || child.type === "FRAME" || child.type === "COMPONENT" || child.type === "INSTANCE") {
      reverseChildren(child); 
    }
   
  }
    const insertIndex = children.length - 1 - children.indexOf(child); 
    node.insertChild(insertIndex, child); 
  }
  
}
//
const selection = figma.currentPage.selection;
if(selection.length == 0) {
  figma.closePlugin('یک node انتخاب کنید.');
} else {
  for(const selections of selection)
  {
    const node = selections;
    reverseChildren(node);
  }
 // figma.closePlugin('برعکس شد.');
}
*/