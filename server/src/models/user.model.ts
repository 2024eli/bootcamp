/**
 * Defines the User model for the database and also the interface to
 * access the model in TypeScript.
 */
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gradYear: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  hometown: {
    type: String,
    required: true,
  },
  toxicTraits: {
    type: [String],
    required: true,
  },
});

interface IUser extends mongoose.Document {
  _id: string;
  name: string;
  gradYear: string;
  hometown: string;
  major: string;
  toxicTraits: [string];
}

const User = mongoose.model<IUser>('User', UserSchema);

export { IUser, User };
