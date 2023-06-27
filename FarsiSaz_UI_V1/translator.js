
const axios = require('axios');
var resultdata="";
const sendRequestToGoogle = async (word, sourceLang, targetLang) => {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&dt=bd&dj=1&q=${encodeURIComponent(
    word
  )}`;
  const result = await axios.get(url).catch(error => error.response);
 
     resultdata =result.data.sentences[0]['trans']
   console.log(resultdata);

  if (!result || result?.status !== 200) 
  {
    resultData.isError = true;

    if (!result || result.status === 0) resultData.errorMessage = browser.i18n.getMessage("networkError");
    else if (result.status === 429 || result.status === 503) resultData.errorMessage = browser.i18n.getMessage("unavailableError");
    else resultData.errorMessage = `${browser.i18n.getMessage("unknownError")} [${result?.status} ${result?.statusText}]`;

    log.error(logDir, "sendRequest()", result);
  }
  return resultdata;
};


sendRequestToGoogle("in the name of god","en","fa")





//const axios = require('axios');
/*
async function sendRequestToGoogle  (word, sourceLang, targetLang)  
{
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&dt=bd&dj=1&q=${encodeURIComponent(
    word
  )}`;
  const result = await fetch(file);
 
     resultdata =result.sentences[0]['trans']
   console.log(resultdata);

  if (!result || result?.status !== 200) 
  {
    resultData.isError = true;

    if (!result || result.status === 0) resultData.errorMessage = browser.i18n.getMessage("networkError");
    else if (result.status === 429 || result.status === 503) resultData.errorMessage = browser.i18n.getMessage("unavailableError");
    else resultData.errorMessage = `${browser.i18n.getMessage("unknownError")} [${result?.status} ${result?.statusText}]`;

    log.error(logDir, "sendRequest()", result);
  }
  
  return resultdata;
}
*/
/*
getText("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=fa&dt=t&dt=bd&dj=1&q=hello");


async function getText(file) {
  let x = await fetch(file);

  let y = await x.json();
  let z=y.sentences[0]['trans']
  console.log(z)
  
}
*/