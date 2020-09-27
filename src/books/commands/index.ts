import { CreateBookHandler } from './create-book/create-book.handler';
import { UpdateBookHandler } from './update-book/update-book.handler';
import { DeleteBookHandler } from './delete-book/delete-book.handler';

export const CommandHandlers = [
  CreateBookHandler,
  UpdateBookHandler,
  DeleteBookHandler,
];
