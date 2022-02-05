import mongoose from 'mongoose';

const  { Schema } = mongoose
const roomSchema = new Schema({
  title: String,
  slug: { type: String, unique: true },
  description: String,

  owner: {
    type: Schema.ObjectId,
    ref: 'User',
    required: 'Owner is required',
    index: true,
  },
  members: [{
    type: Schema.ObjectId,
    ref: 'User',
    index: true,
  }],
}, { timestamps: true });

const Room = mongoose.model('room', roomSchema);

export default Room;