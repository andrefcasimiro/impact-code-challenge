"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../../actions/common");
const constants_1 = __importDefault(require("../../../constants"));
exports.default = {
    Query: {
        beer: (root, args) => new Promise((resolve, reject) => {
            const { id } = args;
            if (!id) {
                reject('No id provided.');
            }
            const result = common_1.get(constants_1.default.BEER, id);
            if (!result) {
                reject(result);
            }
            resolve(result);
        }),
        beers: (root, args) => new Promise((resolve, reject) => {
            const { filter } = args;
            const result = common_1.list(constants_1.default.BEER, filter);
            if (!result) {
                reject(result);
            }
            resolve(result);
        }),
    },
    Mutation: {
        addBeer: (root, args) => new Promise((resolve, reject) => {
            const { input } = args;
            const result = common_1.add(constants_1.default.BEER, input);
            if (!result) {
                reject(result);
            }
            resolve(result);
        })
    }
};
