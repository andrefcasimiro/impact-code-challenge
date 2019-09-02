"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const index_1 = __importDefault(require("../api/graphql/index"));
const config_1 = __importDefault(require("./config"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.express = express_1.default();
        this.corsOptions = config_1.default.corsOptions;
        // Order is important since graphql will need corsOptions
        this.initCorsOptions();
        this.initGraphQL();
    }
    initCorsOptions() {
        this.express.use(cors_1.default(this.corsOptions));
    }
    initGraphQL() {
        this.expressGraphQL = express_graphql_1.default(() => ({
            schema: index_1.default,
            cors: cors_1.default,
            graphiql: true,
        }));
        this.express.use(this.expressGraphQL);
    }
}
exports.default = new App().express;
