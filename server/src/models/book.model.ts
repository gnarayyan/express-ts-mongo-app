import mongoose, { Document, Schema } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  isbn: string;
  publishedDate: Date;
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  publishedDate: { type: Date, default: Date.now },
});

const Book =  mongoose.model<IBook>('Book', BookSchema);

export default Book