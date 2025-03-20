const Joi = require('joi');

const threadSchema = Joi.object({
  board: Joi.string().required(),
  text: Joi.string().required(),
  delete_password: Joi.string().required(),
});

const replySchema = Joi.object({
  board: Joi.string().required(),
  thread_id: Joi.string().required(),
  text: Joi.string().required(),
  delete_password: Joi.string().required(),
});

const reportSchema = Joi.object({
  board: Joi.string().required(),
  thread_id: Joi.string().required(),
  reply_id: Joi.string().optional(),
});

const deleteSchema = Joi.object({
  board: Joi.string().required(),
  thread_id: Joi.string().required(),
  reply_id: Joi.string().optional(),
  delete_password: Joi.string().required(),
});

module.exports = {
  validateThread: (data) => threadSchema.validate(data),
  validateReply: (data) => replySchema.validate(data),
  validateReport: (data) => reportSchema.validate(data),
  validateDelete: (data) => deleteSchema.validate(data),
};