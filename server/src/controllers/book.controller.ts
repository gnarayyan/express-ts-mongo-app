import { Request, Response } from 'express';
import Book, { IBook } from '../models/book.model';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books: IBook[] = await Book.find();
    res.status(200).json(books);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book: IBook | null = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.status(200).json(book);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createBook = async (req: Request, res: Response) => {
  const { title, author, isbn } = req.body;
  if (!title || !author || !isbn) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  try {
    const newBook: IBook = new Book({ title, author, isbn });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error: any) {
    if (error.code === 11000) {
      // Duplicate key error for ISBN
      res.status(409).json({ message: 'Book with this ISBN already exists.' });
      return;
    }
    res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const updatedBook: IBook | null = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedBook) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.status(200).json(updatedBook);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const deletedBook: IBook | null = await Book.findByIdAndDelete(
      req.params.id
    );
    if (!deletedBook) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
