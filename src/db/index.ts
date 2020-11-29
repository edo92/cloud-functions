import models from './models';
import Mongo from './mongo';

class Controller {
    public static async getConfigs(_cb: any) {
        return await Mongo.connectDb(async () => {
            return await models.configs.find();
        })
    }

    public static async saveClimateData(data: any) {
        return await Mongo.connectDb(async () => {
            return await models.climate.create({ climate: data });
        })
    }
}

export = Controller;