import { IdGenerator } from '../index';
import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UuidGenerator extends IdGenerator {
  generateId(): string {
    return uuidv4();
  }
}
