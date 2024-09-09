const mongoose = require('mongoose');

const AvailabilitySchema =  mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
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
}, { timestamps: true });

const availabilityModel= mongoose.model('Availability', AvailabilitySchema);
module.exports=availabilityModel ;