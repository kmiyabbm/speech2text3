const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
const resultDiv = document.querySelector('#result-div');
const interimDiv = document.querySelector('#interim-div');
const statusDiv = document.querySelector('#status-div');

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
let recognition = new SpeechRecognition();

recognition.lang = 'ja-JP';
recognition.interimResults = true;
recognition.continuous = true;

let finalTranscript = '';  // 確定した認識結果(黒文字)を入れる

recognition.onresult = (event) => {
  let interimTranscript = ''; // 暫定の認識結果(グレー文字)を入れる
  for (let i = event.resultIndex; i < event.results.length; i++) {
    let transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      finalTranscript += `<p>${transcript}</p>`;
    } else {
      interimTranscript = transcript;
    }
  }
  // 画面に出力する認識結果
  resultDiv.innerHTML = finalTranscript;
  interimDiv.innerHTML = interimTranscript;
}

startBtn.onclick = () => {
  recognition.start();
  statusDiv.innerHTML = `入力受付中... (通信が発生しています)`;
}

stopBtn.onclick = () => {
  recognition.stop();
  statusDiv.innerHTML = '';
}
