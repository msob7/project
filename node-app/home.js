const express = require ('express');
const redis = require ('redis');
const app = express();
const client = redis.createClient({
 host: 'redis',
 port: 6379

});
client.set('visitsCounter', 0);
app.get('/', (req,res) => {
    client.get('visitsCounter', (err,visitsCounter) =>
    {
        res.send('visits Counter :' + visitsCounter);
        client.set('visitsCounter', parseInt(visitsCounter) +1);
    })
} )
app.listen(3000, () => {
    console.log('listening on port 3000');
})