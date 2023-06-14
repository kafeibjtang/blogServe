const mongoose = require('mongoose')
mongoose.connect('mongodb://db_blog:xiao770542081@111.230.17.116:27017/db_blog', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
let db = mongoose.connection
db.on('error', function (err) {
  console.log(err)
})
db.on('open', function (err) {
  console.dir('mongodb://111.230.17.116:27017/db_blog is open')
})
module.exports = {
  mongoose
}