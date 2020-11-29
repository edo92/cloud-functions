const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const climateSchema = new Schema({
    climate: {
        temperature: [{
            type: Number
        }],

        humidity: [{
            type: Number
        }],

        pressure: [{
            type: Number
        }],
    }
});

const climate = mongoose.model("climate", climateSchema)
export = climate;