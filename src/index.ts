import db from './db';

class Handlers {
    static async handleGetConfigs() {
        db.getConfigs((data: any) => {
            console.log('data', data)
        });
    }

    static async handleSaveClimate(data: any) {
        db.saveClimateData(data);
    }
}
export = Handlers;




async function test() {
    db.saveClimateData({
        "temperature": [89.22],
        "humidity": [14.71],
        "pressure": [997.76]
    });
}

test();