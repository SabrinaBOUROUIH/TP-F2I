const Article = require('../models/article');

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: 'Error' });
  }
};


exports.deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.deleteOne({ _id: req.params.id });
    
    if (deletedArticle.deletedCount === 0) {
      return res.status(404).json({ message: 'Not found' });
    }
    
    res.json({ message: 'deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error' });
  }
};

exports.updateArticle = async (req, res) => {
    try {
      const updatedArticle = await Article.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      if (updatedArticle.nModified === 0) {
        return res.status(404).json({ message: 'Not found' });
      }
      res.json({ message: 'updated' });
    } catch (err) {
      res.status(500).json({ message: 'Error' });
    }
  };
