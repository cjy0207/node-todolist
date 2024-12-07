const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index")
const cors = require('cors')
require('dotenv').config()

const app = express();
const MONGODB_URL_PROD = process.env.MONGODB_URL_PROD
console.log("mongoURL", MONGODB_URL_PROD)
app.use(cors());
app.use(bodyParser.json());
app.use('/api', indexRouter)

const mongoURL = MONGODB_URL_PROD;

mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoose connect");
  })
  .catch((error) => {
    console.log("DB connect fail");
  });

  app.listen(5000, ()=>{
    console.log("server on 5000")
  })

  //1. 회원가입
  //2. 유저가 이메일, 패스워드, 유저이름 입력해서 보냄
  //3. 받은 정보를 암호화해서 저장(db모델 필요)
  
  //1. 라우터 지정(주소값 만들기
  //2. 모델
  //3. 데이터를 저장(패스워드 암호화, 이미 가입된 회원 유무)
  //4. 응답