const functions = require('firebase-functions');
const handlers = require('./src/handlers');

exports.getConfig = functions.https.onRequest(async (_req, res) => {
    let tes = await handlers.testAction();
    console.log('test', tes)
    res.send(tes);
})
