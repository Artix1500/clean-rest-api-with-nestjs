import { Book } from 'src/books/entities/book.entity';
import { CreateBookDto } from 'src/books/dto/create-book.dto';
import { UpdateBookDto } from 'src/books/dto/update-book.dto';
import { books } from './fixtures/books';
import { BookRepository } from '../book-repository';

export class BookRepositoryMemoryAdapter extends BookRepository {
  private books = books;

  async findOneById(id: string): Promise<Book> {
    return this.books.find(book => book.id === id);
  }

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async create(id: string, payload: CreateBookDto): Promise<void> {
    const { title, author } = payload;
    const newBook = new Book(id, title, author);
    this.books.push(newBook);
  }

  async delete(id: string): Promise<void> {
    this.books = this.books.filter(book => id !== book.id);
  }

  async update(id: string, payload: UpdateBookDto): Promise<void> {
    const { title, author } = payload;
    const newBook = new Book(id, title, author);
    this.books = this.books.filter(book => id !== book.id);
    this.books.push(newBook);
  }
}
