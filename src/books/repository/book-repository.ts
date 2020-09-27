import { Book } from '../entities/book.entity';
import { UpdateBookDto } from '../dto/update-book.dto';
import { CreateBookDto } from '../dto/create-book.dto';

export abstract class BookRepository {
  abstract async findOneById(id: string): Promise<Book>;
  abstract async findAll(): Promise<Book[]>;

  abstract async create(id: string, payload: CreateBookDto): Promise<void>;
  abstract async delete(id: string): Promise<void>;
  abstract async update(id: string, payload: UpdateBookDto): Promise<void>;
}
