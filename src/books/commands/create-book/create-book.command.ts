import { CreateBookDto } from 'src/books/dto/create-book.dto';

export class CreateBookCommand {
  constructor(public payload: CreateBookDto) {}
}
