// 환경 변수 process.env.NODE_ENV
if (process.env.NODE_ENV === 'production') {
  console.log('production mode');
  module.exports = require('./prod');
} else {
  console.log('development mode');
  module.exports = require('./dev');
}
