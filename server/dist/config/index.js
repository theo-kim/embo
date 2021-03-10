"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.ClientResourceType = exports.client = void 0;
const path_1 = require("path");
const client_loader_1 = require("./client-loader");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return client_loader_1.Client; } });
Object.defineProperty(exports, "ClientResourceType", { enumerable: true, get: function () { return client_loader_1.ClientResourceType; } });
const client = new client_loader_1.Client(path_1.resolve(__dirname + "../../../../client"));
exports.client = client;
//# sourceMappingURL=index.js.map