const express = require("express");
const cors = require('cors');

const app = express()
app.use(cors());

const middleware1 = (req, res, next)=>{
    console.log("Hello this is middleware1");
    next();
}

const middleware2 = (req, res, next)=>{
    console.log(req + "Hello this is middleware2");
    next();
}
app.get("/", (req, res)=>{
    console.log("Home Page");
    res.send("Home Page")
})
app.get("/first", middleware1, (req, res, next)=>{
    res.send("This is Middleware1")
})

app.get("/second", middleware2, (req, res, next)=>{
    res.send("This is Middleware2")
})

app.get("/cors", (req, res)=>{
    res.json({
        "student":[
            {
                "name":"Durgam Rakesh",
                "place":"Hyd"
            }
        ]        
    })
})
app.listen(9000,()=>{
    console.log("port is running on 9000");
})