const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  text: { type: String, required: true },
  delete_password: { type: String, required: true },
  reported: { type: Boolean, default: false },
  created_on: { type: Date, default: Date.now },
  thread_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Thread', required: true },
});

module.exports = mongoose.model('Reply', replySchema);