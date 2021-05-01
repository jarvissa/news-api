const News = require('../models/News');

module.exports = {
  get: async (req, res) => {
    try {
      const news = await News.find();

      res.status(200).json(news);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },
  post: async (req, res) => {
    const { title, description, imgSrc, created, readTime, comments, tags, hasSlider } = req.body;
    const news = new News({
      title,
      description,
      imgSrc,
      created,
      readTime,
      comments,
      tags,
      hasSlider
    });

    try {
      const savedNews = await news.save();

      res.status(200).json(savedNews);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
}