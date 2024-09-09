const mongoose = require('mongoose');

const SessionSchema = mongoose.Schema({
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true, 
  },
  attendees: [{
    name: String,
    email: String,
  }],
  type: {
    type: String,
    enum: ['one-on-one', 'group'],
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  linkedAvailability: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Availability',
  }],
}, { timestamps: true });

const sessionModel = mongoose.model('Session', SessionSchema);
module.exports=sessionModel