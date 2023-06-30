import { Type } from './type';
import { fieldType } from './customTI';

export type BaseType<ReturnType> = Map<string, ReturnType>;

export class BaseBucket<BucketType extends { toString(): string }>
  extends Map<string, BucketType>
  implements BaseType<BucketType>
{
  FieldString(): string {
    let str = '';
    this.forEach((value: BucketType, key: string) => {
      str += `${value}\n`;
    });
    return str;
  }
}

export type options = {
  input?: Type;
  output: Type | fieldType;
};

export class Base {
  name: string;
  input: Type;
  output: Type | fieldType;

  constructor(name: string, options: options) {
    this.name = name;
    this.input = options.input;
    this.output = options.output;
  }

  toString(): string {
    return `${this.name}${this.input ? '(' + this.input + ')' : ''} : ${
      this.output
    }`;
  }
}
