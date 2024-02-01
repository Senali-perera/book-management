import {createReducer,on} from "@ngrx/store";
import { AddBook, RemoveBook } from "./book.actions";
import { Book } from "../models/book";

export const initialState: ReadonlyArray<Book> = [];

export const BookReducer = createReducer(
  initialState
);
