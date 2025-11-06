import mongoose, { Schema } from 'mongoose';

export interface IUser extends Document {
  fname: string;
  lname: string;
  email: string;
  password: string;
  userType: string;
  verificationCode: string;
  isVerified: boolean;
  resetToken: string;
  resetTokenExpiry: Date;
}

const UserSchema: Schema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  verificationCode: { type: String },
  isVerified: { type: Boolean, default: false },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date }
});

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;