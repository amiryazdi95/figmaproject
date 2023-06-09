//console.log(  figma.currentPage.selection[0]);
//console.log(  figma.currentPage.selection[0].textdirection);
//console.log(  figma.currentPage.selection[0].constraints.horizontal);
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

var child= figma.currentPage.selection[0];

    // دریافت متن
    const t=  child;
  
   // child.setSharedPluginData("pluginId", "readOnly", "false");
   // if(t.constraints.horizontal==="MAX")
   // t.constraints.horizontal("MIN");
  //  else if(t.constraints.horizontal==="MIN")
  //  t.constraints.horizontal("MAX");
  // Example: Changing the red channel of the first fill
  
  const cons = clone(t.constraints)
  var myconst=cons.horizontal;
  if (myconst=="MAX") {
    myconst="MIN";
  } else if (myconst=="MIN") {
    myconst="MAX";
  } 
  cons.horizontal=myconst;
  child.constraints=cons;
//child=cons.horizontal;
//console.log(child.constraints.horizontal)
/*
if(cons.horizontal=="MIN")
cons.horizontal= "MAX"
else if(cons.horizontal=="MAX")
cons.horizontal="MIN"
*/
//console.log(cons)
//rect.fills = fills
/*
    (async () => {
        // 
        const constraints = child
        // 
       // await figma.(constraints.name)
        // 
        console.log(constraints)
        console.log(constraints.constraints.horizontal)
        if(constraints.constraints.horizontal==="MAX")
        constraints.constraints.horizontal="MIN";
        else if(constraints.constraints.horizontal==="MIN")
        constraints.constraints.horizontal="MAX";
      })()
  

      var child= figma.currentPage.selection[0];

      // دریافت متن
      const t=  child;
    
     // child.setSharedPluginData("pluginId", "readOnly", "false");
     // if(t.constraints.horizontal==="MAX")
     // t.constraints.horizontal("MIN");
    //  else if(t.constraints.horizontal==="MIN")
    //  t.constraints.horizontal("MAX");
    // Example: Changing the red channel of the first fill
  const constraints = clone(t.constraints)
  
  constraints.horizontal= "MIN"
  if(constraints.horizontal==="MAX")
  {
    constraints.horizontal="MIN";
  }
  else if(constraints.horizontal==="MIN")
  {
    constraints.horizontal="MAX";
  }
  
  
  child=constraints
  console.log(constraints)
  //console.log(child.constraints)
  //console.log(cons)
  //rect.fills = fills
  */
  const constraints=  child;
    const clone_constraints = clone(constraints.constraints);
    var constraints_horizontal=cons.horizontal;
    console.log(clone_constraints)
    console.log(constraints_horizontal)
    if (constraints_horizontal=="MAX") 
    {
      constraints_horizontal="MIN";
    } 
    else if (constraints_horizontal=="MIN") 
    {
      constraints_horizontal="MAX";
    } 

    clone_constraints.horizontal=constraints_horizontal;
    child.constraints=clone_constraints;