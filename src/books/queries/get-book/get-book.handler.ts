import { Book } from 'src/books/entities/book.entity';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetBookQuery } from './get-book.query';
import { BookRepository } from 'src/books/repository/book-repository';

@QueryHandler(GetBookQuery)
export class GetBookHandler implements IQueryHandler<GetBookQuery> {
  constructor(private bookRepository: BookRepository) {}

  async execute(query: GetBookQuery): Promise<Book> {
    return this.bookRepository.findOneById(query.id);
  }
}
