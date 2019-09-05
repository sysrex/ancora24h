const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' })

const app = require('./app');
app.set('port', process.env.PORT || 8003);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
