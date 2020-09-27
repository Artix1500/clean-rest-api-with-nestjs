import { IQuery } from '@nestjs/cqrs';

export class GetBookQuery implements IQuery {
  constructor(public id: string) {}
}
