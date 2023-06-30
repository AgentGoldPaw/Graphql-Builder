import { Custom, CustomBucket, CustomBucketType, CustomType } from './customTI';

interface TypeOptions extends CustomType {
  addField(name: string, type: string, required?: boolean): TypeOptions;
}

export type T = Map<string, TypeOptions>;

export class TypeBucket extends CustomBucket<Type> implements T {
  constructor() {
    super(CustomBucketType.TYPE);
  }
  toString(): string {
    return this.getFields();
  }
}

export class Type extends Custom {}
