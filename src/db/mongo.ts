import mongoose from 'mongoose';

class Mongo {
    static async connectDb(exec: any) {
        const uri = process.env.MONGODB_URI || 'mongodb://localhost/testA';
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }

        try {
            const connect = mongoose.connect;
            const mdb = await connect(uri, options);
            // execute actions in callback get data
            const data = await exec();
            // close connection after getting data
            mdb.connection.close();
            // return data
            return data;

        } catch (err) { return err };
    }
}

export = Mongo;