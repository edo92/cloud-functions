"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const configs_1 = __importDefault(require("./configs"));
const climate_1 = __importDefault(require("./climate"));
module.exports = {
    configs: configs_1.default,
    climate: climate_1.default
};
