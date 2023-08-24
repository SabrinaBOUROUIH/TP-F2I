const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category:String,
  createdAt: Date,

});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
