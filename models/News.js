const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  created: {
    type: String,
    required: true
  },
  readTime: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
  },
  hasSlider: {
    type: Boolean
  }
});

module.exports = mongoose.model('News', schema);