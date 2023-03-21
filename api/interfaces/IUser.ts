import { Types } from "mongoose";
export interface IUser  {
    username: string;
    password: string;
    email: string;
    isAdmin: boolean;
    _id: Types.ObjectId;
  }