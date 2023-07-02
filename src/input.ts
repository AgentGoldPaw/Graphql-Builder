import { Custom, CustomBucket, CustomBucketType, CustomType } from './customTI';

interface InputOptions extends CustomType {
  addField(name: string, type: string, required?: boolean): InputOptions;
}

export type I = Map<string, InputOptions>;

export class InputBucket extends CustomBucket<Input> implements I {
  constructor() {
    super(CustomBucketType.INPUT);
  }
  toString(): string {
    return this.getFields();
  }
}

export class Input extends Custom {}
