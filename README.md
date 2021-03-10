# 文字おこしさん 〜Speech-to-Text san〜

[Web Speech API(のSpeechRecognitionインターフェイス)](https://developer.mozilla.org/ja/docs/Web/API/SpeechRecognition) を使って、ブラウザにつながったマイクに入力された音声を認識して文字おこしするアプリです。  
ブラウザ上で動作するため、入力された音声や文字起こし結果が保存されることはありませんが、裏ではGoogle Cloud Speech API に接続されているっぽいのでGoogleのサーバー上には保存されている可能性があります。

## 使い方

- デモサイトで試す

**Chromeで** https://kmiyabbm.github.io/speech2text3/ にアクセス！

- 手元のマシンで試す

Node.js や npm がインストール済みなら、http-server をローカルインストールして起動するのが簡単です。

```bash
$ cd /PATH/TO/HERE
$ npm install http-server
$ npx http-server
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

Available on: で示されたURLに**Chromeで**アクセス！