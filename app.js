const express = require('express');
const session = require('express-session');

const app = express();


app.use(express.json());
app.use(express.urlencoded());

app.use(session({
    store: new (require('connect-pg-simple')(session))(),
    secret: 'ChangeMeWhenWeGoLive',
    resave: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days 
  }));


app.listen(3000, () => { 
    console.log("Listening! 3000");
})