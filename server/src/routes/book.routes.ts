import { Router } from 'express';
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from '../controllers/book.controller';

const router = Router();

router.get('/', getBooks); // GET /api/books
router.get('/:id', getBookById); // GET /api/books/:id
router.post('/', createBook); // POST /api/books
router.put('/:id', updateBook); // PUT /api/books/:id
router.delete('/:id', deleteBook); // DELETE /api/books/:id

export default router;
