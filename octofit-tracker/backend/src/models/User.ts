import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password?: string;
  profile?: {
    firstName?: string;
    lastName?: string;
    bio?: string;
    avatar?: string;
  };
  team?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    profile: {
      firstName: String,
      lastName: String,
      bio: String,
      avatar: String,
    },
    team: { type: Schema.Types.ObjectId, ref: 'Team' },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', userSchema);
