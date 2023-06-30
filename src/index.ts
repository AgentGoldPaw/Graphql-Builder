import { Type, T, TypeBucket } from './type';
import { fieldType } from './customTI';
import { QueryBucket, Q, Query, queryOptions } from './query';
import { Mutation, MutationBucket, M } from './mutation';
import { options } from './base';
import { Input, I, InputBucket } from './input';
export default class Schema {
  private query: Q = new QueryBucket();
  private mutation: M = new MutationBucket();
  private types: T = new TypeBucket();
  private input: I = new InputBucket();
  addInput(name: string, input: Input): Schema {
    this.input.set(name, input);
    return this;
  }

  addQuery(name: string, options: queryOptions): Schema {
    this.query.set(name, new Query(name, options));
    return this;
  }

  addType(name: string, type: Type): Schema {
    this.types.set(name, type);
    return this;
  }

  getType(name: string): Type {
    return this.types.get(name);
  }

  addMutation(name: string, options: options): Schema {
    this.mutation.set(name, new Mutation(name, options));
    return this;
  }

  toString(): string {
    return (
      `${this.types}\n${this.input}\n${this.query}\n${this.mutation}\nschema {\n` +
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
const userInput = new Input('UserInput').addField('id', fieldType.STRING, true);
schema
  .addInput('UserInput', userInput)
  .addType('User', user)
  .addQuery('getUser', {
    output: schema.getType('User'),
  })
  .addMutation('createUser', {
    input: schema.getType('User'),
    output: schema.getType('User'),
  });

console.log(schema.compile());