import express from "express";
import bodyParser from "body-parser";


const app = express();

const bubbles = [
    {msg_id: 1, msg: "Hello!!", loc: {lat:100, lng: 200}},
    {msg_id: 2, msg: "Hiiii!!", loc: {lat:300, lng: 500}},
    {msg_id: 3, msg: "YAAYY!!", loc: {lat:800, lng: 100}},
];

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    next();
})

app.get("",(req, res, next) => {
    res.json(bubbles);
})

app.post("/post", (req, res) => {
    bubbles.push({msg_id: req.body.msg_id, msg: req.body.msg, loc: req.body.loc})
    console.log("Message # recieved " + req.body)
    res.status(200).json({message:"Successfully posted"})
})


export default app;