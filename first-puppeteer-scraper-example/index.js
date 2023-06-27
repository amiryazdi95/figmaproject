
/*
import puppeteer from "puppeteer";

const getQuotes = async () => {

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

 
  const page = await browser.newPage();


  await page.goto("https://translate.google.com/?hl=fa&sl=auto&tl=fa&text=hello&op=translate", {
    waitUntil: "domcontentloaded",
  });


  const quotes = await page.evaluate(() => {

    const quote = document.querySelector(".ryNqvb");
    return { quote };
  });

  console.log(quotes);


  await browser.close();
};

getQuotes();
*/
import "axios";
const sendRequestToGoogle = async (word, sourceLang, targetLang) => {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&dt=bd&dj=1&q=${encodeURIComponent(
    word
  )}`;
  const result = await axios.get(url).catch(error => error.response);

  const resultData = {
    resultText: "",
    candidateText: "",
    sourceLanguage: "",
    percentage: 0,
    isError: false,
    errorMessage: ""
  };

  if (!result || result?.status !== 200) {
    resultData.isError = true;

    if (!result || result.status === 0) resultData.errorMessage = browser.i18n.getMessage("networkError");
    else if (result.status === 429 || result.status === 503) resultData.errorMessage = browser.i18n.getMessage("unavailableError");
    else resultData.errorMessage = `${browser.i18n.getMessage("unknownError")} [${result?.status} ${result?.statusText}]`;

    log.error(logDir, "sendRequest()", result);
    return resultData;
  }

  resultData.sourceLanguage = result.data.src;
  resultData.percentage = result.data.ld_result.srclangs_confidences[0];
  resultData.resultText = result.data.sentences.map(sentence => sentence.trans).join("");
  if (result.data.dict) {
    resultData.candidateText = result.data.dict
      .map(dict => `${dict.pos}${dict.pos != "" ? ": " : ""}${dict.terms.join(", ")}\n`)
      .join("");
  }

  log.log(logDir, "sendRequest()", resultData);
  return resultData;
};
sendRequestToGoogle("hello","en","fa")