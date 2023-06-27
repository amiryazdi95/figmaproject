
  import axios from 'axios';

function translateText() {
  const inputText = document.getElementById('inputText').value;
  const apiKey = 'AIzaSyASgnRhVFUdVuae_xX1zx62G9BxMVCbU2Y'; // جایگزین کنید با کلید API خود

  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  const params = {
    q: inputText,
    target: 'fa', // کد زبان فارسی
    source: 'en', // کد زبان انگلیسی
  };

  axios.post(url, null, { params })
    .then(response => {
      const translation = response.data.data.translations[0].translatedText;
      document.getElementById('translationResult').innerText = translation;
    })
    .catch(error => {
      console.error(error);
    });
}

translateText();
