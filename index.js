const Koa = require('koa');
const koaBody = require('koa-body');
const error = require('koa-json-error');
const mongoose = require('mongoose');
const parameter = require('koa-parameter');
const path = require('path');
const app = new Koa();
const routing = require('./routers');
const cors = require('koa2-cors');
const {connectionStr} = require('./config')

mongoose.connect(connectionStr, { useNewUrlParser: true , useFindAndModify: false, useUnifiedTopology:true}, ()=>console.log('MongoDB连接成功了'));
mongoose.connection.on('error',console.error);


// Handling error messages
app.use(error({
   
    postFormat:(e, {stack, ...rest})=>process.env.NODE_ENV === "production" ? rest : {stack, ...rest}
}));

app.use(koaBody({
    multipart: true,
    formidable:{
        uploadDir: path.join(__dirname,'/public/uploads'),
        keepExtensions: true,
    }
}));

app.use(parameter(app));
app.use(cors());
routing(app);

app.listen(3000,()=>console.log('Server started at localhost:3000'));