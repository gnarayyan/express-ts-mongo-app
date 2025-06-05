import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
}
const UserSchema = new Schema({
  name: String,
  email: String,
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
