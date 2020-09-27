import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateBookCommand } from './create-book.command';
import { BookRepository } from 'src/books/repository/book-repository';
import { IdGenerator } from 'src/shared';

@CommandHandler(CreateBookCommand)
export class CreateBookHandler implements ICommandHandler<CreateBookCommand> {
  constructor(
    private idGenerator: IdGenerator,
    private bookRepository: BookRepository,
  ) {}

  async execute(command: CreateBookCommand): Promise<void> {
    const id = this.idGenerator.generateId();
    this.bookRepository.create(id, command.payload);
  }
}
