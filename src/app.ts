import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import userRoutes from './routes/user.routes';

import bookRoutes from './routes/book.routes';

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // For parsing application/json

// Serve static files (like your HTML)
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

// Endpoint to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.use('/', express.static(path.join(__dirname, 'public')));
export default app;
