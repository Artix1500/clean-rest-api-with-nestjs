import { DeleteBookCommand } from './delete-book.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BookRepository } from 'src/books/repository/book-repository';

@CommandHandler(DeleteBookCommand)
export class DeleteBookHandler implements ICommandHandler<DeleteBookCommand> {
  constructor(private bookRepository: BookRepository) {}

  async execute(command: DeleteBookCommand): Promise<void> {
    this.bookRepository.delete(command.id);
  }
}
