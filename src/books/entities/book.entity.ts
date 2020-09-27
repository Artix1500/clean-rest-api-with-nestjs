import { AggregateRoot } from '@nestjs/cqrs';
import {
  UnprocessableEntityException,
  InternalServerErrorException,
} from '@nestjs/common';
export class Book extends AggregateRoot {
  constructor(public id: string, public title: string, public author: string) {
    super();
    this.validate();
  }

  validate(): void {
    if (!this.id) {
      throw new InternalServerErrorException();
    }

    if (!this.title || !this.author) {
      throw new UnprocessableEntityException();
    }

    if (this.title.length < 3) {
      throw new UnprocessableEntityException(
        'Title must contain at least three letters.',
      );
    }

    if (this.author.length < 2) {
      throw new UnprocessableEntityException(
        'Author must contain at least two letters.',
      );
    }
  }
}
