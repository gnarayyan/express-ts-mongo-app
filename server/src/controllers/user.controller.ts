import { Request, Response } from 'express';
import User from '../models/user.model';

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  const users_static = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      age: 28,
      role: 'admin',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      age: 34,
      role: 'editor',
    },
    {
      id: 3,
      name: 'Charlie Lee',
      email: 'charlie@example.com',
      age: 22,
      role: 'user',
    },
    {
      id: 4,
      name: 'Dana Wright',
      email: 'dana@example.com',
      age: 40,
      role: 'user',
    },
    {
      id: 5,
      name: 'Eli Black',
      email: 'eli@example.com',
      age: 30,
      role: 'moderator',
    },
  ];

  res.json({ dynamic: users, static: users_static });
};

export const createUser = async (req: Request, res: Response) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};
