import express from "express";

const app = express();

const bubbles = [
    {msg_id: 1, msg: "Hello!!", loc: {lat:100, lon: 200}},
    {msg_id: 2, msg: "Hiiii!!", loc: {lat:300, lon: 500}},
    {msg_id: 3, msg: "YAAYY!!", loc: {lat:800, lon: 100}},
]

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    next();
})

app.use((req, res, next) => {
    res.json(bubbles);
})


export default app;