/*
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
 /*
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
    child.constraints=clone_constraints;*/
    // کلید API ترجمه گوگل
    /*
const apiKey = 'AIzaSyASgnRhVFUdVuae_xX1zx62G9BxMVCbU2Y';

// تابع برای ترجمه متن
async function translateText(text) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  
  const data = {
    q: text,
    source: 'en',
    target: 'fa',
    format: 'text'
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const translationData = await response.json();
  const translatedText = translationData.data.translations[0].translatedText;

  return translatedText;
}

// مثال استفاده
const originalText = 'Hello, how are you?';
translateText(originalText)
  .then(translatedText => {
    console.log(`Original Text: ${originalText}`);
    console.log(`Translated Text: ${translatedText}`);
  })
  .catch(error => {
    console.error('Translation error:', error);
  });
*/
/*
const textToTranslate = 'Hello, world.';
const sourceLang = 'en';
const targetLang = 'es';
const apiKey = 'AIzaSyASgnRhVFUdVuae_xX1zx62G9BxMVCbU2Y'; // Replace with your Google API key

translateText(textToTranslate, sourceLang, targetLang, apiKey, function (error, translatedText) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Translated text:', translatedText);
  }
});

function translateText(text, sourceLang, targetLang, apiKey, callback) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  const data = {
    q: text,
    source: sourceLang,
    target: targetLang,
    format: 'text',
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const jsonResponse = JSON.parse(xhr.responseText);
      const translatedText = jsonResponse.data.translations.translatedText;
      callback(null, translatedText);
    } else if (xhr.readyState === 4) {
      callback(`Error ${xhr.status}: ${xhr.statusText}`);
    }
  };

  xhr.send(JSON.stringify(data));
}
*/
/*
// کلید API ترجمه گوگل
const apiKey = 'AIzaSyASgnRhVFUdVuae_xX1zx62G9BxMVCbU2Y';

// تابع برای ترجمه متن
function translateText(text) {
  return new Promise((resolve, reject) => {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const translatedText = response.data.translations[0].translatedText;
        resolve(translatedText);
      } else {
        reject(new Error('درخواست ترجمه ناموفق بود. وضعیت: ' + xhr.status));
      }
    };

    xhr.onerror = function () {
      reject(new Error('درخواست ترجمه ناموفق بود. خطای شبکه.'));
    };

    const data = {
      q: text,
      source: 'en',
      target: 'fa',
      format: 'text'
    };

    xhr.send(JSON.stringify(data));
  });
}

// مثال استفاده
const originalText = 'سلام، حالتون چطوره؟';
translateText(originalText)
  .then(translatedText => {
    console.log(`متن اصلی: ${originalText}`);
    console.log(`متن ترجمه شده: ${translatedText}`);
  })
  .catch(error => {
    console.error('خطا در ترجمه:', error);
  });*/
  // کلید API ترجمه گوگل
const apiKey = 'AIzaSyASgnRhVFUdVuae_xX1zx62G9BxMVCbU2Y';

// تابع برای ترجمه متن
function translateText(text) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  const data = {
    q: text,
    source: 'en',
    target: 'fa',
    format: 'text'
  };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('درخواست ترجمه ناموفق بود. وضعیت: ' + response.status);
      }
      return response.json();
    })
    .then(translationData => {
      const translatedText = translationData.data.translations[0].translatedText;
      return translatedText;
    })
    .catch(error => {
      throw new Error('خطا در ترجمه: ' + error.message);
    });
}

// مثال استفاده
const originalText = 'سلام، حالتون چطوره؟';
translateText(originalText)
  .then(translatedText => {
    console.log(`متن اصلی: ${originalText}`);
    console.log(`متن ترجمه شده: ${translatedText}`);
  })
  .catch(error => {
    console.error(error);
  });

