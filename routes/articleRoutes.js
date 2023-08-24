const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.getArticles);
router.delete('/:id', articleController.deleteArticle);
router.put('/:id', articleController.updateArticle);


module.exports = router;
