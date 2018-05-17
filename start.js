const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' })

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`Mongodb died → ${err.message}`);
});
console.log('Connected to DB');

require('./models/Record');

const app = require('./app');
app.set('port', process.env.PORT || 8003);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});