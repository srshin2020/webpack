# Webpack
여러개의 js를 하나로 **묶어**줌. 

### youtube
- https://www.youtube.com/playlist?list=PLuHgQVnccGMChcT9IKopFDoAIoTA-03DA
    - 생활코딩
- https://www.youtube.com/watch?v=zal9HVgrMaQ
    - 코딩앙마
    - 소스코드: https://github.com/coding-angma/webpack

### get started
- npm 설치
    - npm init -y
- webpack 설치
    - -D = --save-dev와 동일
    - i = install
    - npm install -D webpack webpack-cli
- css loader 설치
    - npm install --save-dev css-loader
- style loader 설치
    - npm install --save-dev style-loader
- web html 만드는 plugin 설치
    - npm i html-webpack-plugin
- 실시간 반영 서버 설치 
    - npm i webpack-dev-server -D
- 외부 CSS로 연결시 설치 (default는 internal로 style tag로 들어감)
    - npm i mini-css-extract-plugin -D 
- 이미지 로더
    - npm i -D file-loader
- 이전 빌드된 것들 삭제
    - npm i -D clean-webpack-plugin 
### 실행
- webpack.config.js
    - webpack 실행시 참조하는 설정 파일 
- webpack 실행 (webpack config를 읽어서)
    - npx webpack --config webpack.config.js
- webpack 실행 (webpack config 생략 가능 webpack.config.js인 경우)
    - npx webpack 
- 수정시 실시간 바로 반영
    - npx webpack --watch 
- npm script를 이용해서 실행
    - npm run start 또는 npm start (mode=development)
    - npm run build (mode=production)
        - output에 설정된 폴더에 묶여진 파일이 올라감. js, css, image file들.. 
    - npm run test 또는 npm test     
