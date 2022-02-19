# Webpack
여러개의 js를 하나로 **묶어**줌. 

### youtube
- https://www.youtube.com/playlist?list=PLuHgQVnccGMChcT9IKopFDoAIoTA-03DA
    - 생활코딩
- https://www.youtube.com/watch?v=zal9HVgrMaQ
    - 코딩앙마

### get starte
- npm 설치
    - npm init -y
- webpack 설치
    - -D = --save-dev와 동일
    - i = install
    - npm install -D webpack webpack-cli
- css loader 설치
    - npm install --save-dev css-loader ts-loader 
- style loader 설치
    - npm install --save-dev style-loader
- web html 만드는 plugin 설치
    - npm i html-webpack-plugin
- 실시간 반영 서버 설치 
    - npm i webpack-dev-server -D
- webpack config를 읽어서 webpack 실행
    - npx webpack --config webpack.config.js (--config 생략 가능)
- 다시 실행하지 않고도 바로 반영
    - npx webpack --watch 
- 실행
    - npm run start 또는 npm start
    - npm run build 
    - npm run test 또는 npm test     
