import { BaseBucket, Base } from './base';
import { fieldType } from './customTI';
import { Type } from './type';

export type Q = Map<string, Query>;

export class QueryBucket extends BaseBucket<Query> implements Q {
  toString(): string {
    let str = 'Query {\n';
    str += `    ${this.FieldString()}`;
    return str + '}\n';
  }
}

export type queryOptions = {
  input?: Type;
  output: Type | fieldType;
};

export class Query extends Base {}
