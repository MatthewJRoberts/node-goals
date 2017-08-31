var mongoose = require('mongoose');

var Goals = mongoose.model('Goals', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  text: {
    type: String,
    required: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  deadline: {
    type: Number,
    default: null
  }
});

module.exports = {Goals};
