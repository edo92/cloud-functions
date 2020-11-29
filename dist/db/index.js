"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./models/index"));
class Mongo {
    static connectDb(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/testA';
            try {
                const mdb = yield mongoose_1.default.connect(MONGODB_URI, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    useFindAndModify: false,
                });
                let data = yield callback();
                mdb.connection.close();
                return data;
            }
            catch (err) {
                return err;
            }
            ;
        });
    }
}
class Controller {
    static getConfigs(_cb) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Mongo.connectDb(() => __awaiter(this, void 0, void 0, function* () {
                return yield index_1.default.configs.find();
            }));
        });
    }
    static saveClimateData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Mongo.connectDb(() => __awaiter(this, void 0, void 0, function* () {
                console.log('data', data);
                return yield index_1.default.climate.create({ climate: data });
            }));
        });
    }
}
module.exports = Controller;
