import { Book } from 'src/books/entities/book.entity';
import { ListBooksQuery } from './list-books.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BookRepository } from 'src/books/repository/book-repository';

@QueryHandler(ListBooksQuery)
export class ListBooksHandler implements IQueryHandler<ListBooksQuery> {
  constructor(private bookRepository: BookRepository) {}

  async execute(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }
}
