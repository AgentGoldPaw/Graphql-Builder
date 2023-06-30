import { BaseBucket, Base } from './base';
export type M = Map<string, Mutation>;

export class MutationBucket extends BaseBucket<Mutation> implements M {
  toString(): string {
    let str = 'Mutation {\n';
    str += `    ${this.FieldString()}`;
    return str + '}\n';
  }
}

export class Mutation extends Base {}
