import http from "http";
import express from "./rest.js"

const server = http.createServer(express);

server.listen(3000)