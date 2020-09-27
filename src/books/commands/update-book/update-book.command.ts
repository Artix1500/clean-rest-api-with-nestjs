import { UpdateBookDto } from 'src/books/dto/update-book.dto';

export class UpdateBookCommand {
  constructor(public id: string, public payload: UpdateBookDto) {}
}
