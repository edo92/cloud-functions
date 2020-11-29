const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ConfigsSchema = new Schema({
    temperature: {
        data: Number,
        unit: String
    },
    humidity: {
        data: Number,
        unit: String
    },
    pressure: {
        data: Number,
        unit: String
    }
});

const Configs = mongoose.model("Configs", ConfigsSchema)
export = Configs;