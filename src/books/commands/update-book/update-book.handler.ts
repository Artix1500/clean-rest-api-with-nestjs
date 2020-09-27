import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateBookCommand } from './update-book.command';
import { BookRepository } from 'src/books/repository/book-repository';

@CommandHandler(UpdateBookCommand)
export class UpdateBookHandler implements ICommandHandler<UpdateBookCommand> {
  constructor(private bookRepository: BookRepository) {}

  async execute(command: UpdateBookCommand): Promise<void> {
    this.bookRepository.update(command.id, command.payload);
  }
}
