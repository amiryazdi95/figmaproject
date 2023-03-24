

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