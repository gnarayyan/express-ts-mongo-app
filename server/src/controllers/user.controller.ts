import { Request, Response } from 'express';
import User from '../models/user.model';


export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};
