import { ConnectionServer } from "@oomol/connection";
import { WebSocketServerAdapter } from "@oomol/connection-websocket-adapter/server";
import { SigninServiceImpl } from "../../ovm-service/src/node";
import { WebSocketServer } from "ws";

import { port } from "./constants";

// 后端配置 connection server
const wss = new WebSocketServer({ port });
const adapter = new WebSocketServerAdapter(wss);
const server = new ConnectionServer(adapter);

server.start();

// 注册服务
server.registerService(new SigninServiceImpl());
