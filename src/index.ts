import { Type, T, TypeBucket, fieldType } from './type';
import { QueryBucket, Q, Query, queryOptions } from './query';

export default class Schema {
  private query: Q = new QueryBucket();
  private types: T = new TypeBucket();
  private mutation: string;

  addQuery(name: string, options: queryOptions): Schema {
    this.query.set(name, new Query(name, options));
    return this;
  }

  addType(name: string, type: Type): Schema {
    this.types.set(name, type);
    return this;
  }

  toString(): string {
    return (
      `${this.types}\n${this.query}\n schema {\n` +
      `   query: Query,\n` +
      `   mutation: Mutation\n` +
      `}`
    );
  }

  compile(): string {
    return `${this}`;
  }
}

const schema = new Schema();
const user = new Type('User').addField('id', fieldType.STRING, true);
schema.addType('User', user).addQuery('getUser', {
  output: user,
});

console.log(schema.compile());
