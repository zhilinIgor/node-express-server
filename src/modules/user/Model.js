import mongoose from 'mongoose';

// const { Schema } = mongoose;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
    uniq: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  location: String,
  name: String,
});

// userSchema.index({ email: 1 }, { unique: true });

export default mongoose.model('User', userSchema);
