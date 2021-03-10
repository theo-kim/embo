import express, { Application, NextFunction, Request, Router } from 'express';
import { createServer, Server } from 'http';

import * as ioserver from 'socket.io';

import socketHandler from './socket';

import site from './routes/site';

const app : Application = express();
const server : Server = createServer(app);

const io : ioserver.Server = new ioserver.Server(server, {serveClient: false});

app.use('/', site);

io.on('connection', socketHandler);

server.listen(process.env.PORT, () => {
	console.log("server listening on port: " + process.env.PORT);
});
