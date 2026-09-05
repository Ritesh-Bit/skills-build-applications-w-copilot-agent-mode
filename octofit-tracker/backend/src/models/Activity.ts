import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  userId: mongoose.Types.ObjectId;
  type: string;
  title: string;
  description?: string;
  duration: number; // in minutes
  calories?: number;
  intensity: 'low' | 'moderate' | 'high';
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true }, // e.g., 'running', 'cycling', 'swimming'
    title: { type: String, required: true },
    description: String,
    duration: { type: Number, required: true }, // minutes
    calories: Number,
    intensity: { type: String, enum: ['low', 'moderate', 'high'], required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

export const Activity = mongoose.model<IActivity>('Activity', activitySchema);
