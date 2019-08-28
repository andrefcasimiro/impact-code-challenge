"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const index_1 = __importDefault(require("../api/graphql/index"));
const config_1 = __importDefault(require("./config"));
class App {
    constructor() {
        this.express = express_1.default();
        this.corsOptions = config_1.default.corsOptions;
        this.initGraphQL();
    }
    initGraphQL() {
        this.expressGraphQL = express_graphql_1.default(() => ({
            schema: index_1.default,
            graphiql: true,
        }));
        this.express.use(this.expressGraphQL);
    }
}
exports.default = new App().express;
