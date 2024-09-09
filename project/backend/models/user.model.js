const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  notificationPreferences: {
    type: String,
    enum: ['email', 'sms', 'none'],
    default: 'email',
  },
}, { timestamps: true });

const user = mongoose.model('User', UserSchema);
module.exports=user