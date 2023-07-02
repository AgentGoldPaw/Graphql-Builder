export type CTI = Map<string, CustomType>;

type CustomFields = {
  type: string;
  required?: boolean;
};

export interface CustomType {
  name: string;
  fields: Map<string, CustomFields>;
}

export enum CustomBucketType {
  TYPE = 'type',
  INPUT = 'input',
}

export class CustomBucket<StoreType extends CustomType>
  extends Map<string, StoreType>
  implements CTI
{
  type: CustomBucketType;
  constructor(type: CustomBucketType) {
    super();
    this.type = type;
  }
  getFields(): string {
    let str = '';
    const self = this;
    this.forEach((value: StoreType, key: string) => {
      str += `${self.type} ${key} {\n`;
      value.fields.forEach((value: CustomFields, key: string) => {
        str += `    ${key}: ${value.type}${value.required ? '!' : ''}\n`;
      });
      str += '}\n\n';
    });
    return str;
  }
}

export enum fieldType {
  STRING = 'String',
  ID = 'ID',
  INT = 'Int',
  FLOAT = 'Float',
  BOOLEAN = 'Boolean',
}

export class Custom {
  name: string;
  fields: Map<string, CustomFields> = new Map<string, CustomFields>();

  constructor(name: string) {
    this.name = name;
  }

  public addField(
    name: string,
    type: fieldType,
    required: boolean = false,
  ): Custom {
    this.fields.set(name, { type: type, required: required });
    return this;
  }

  toString(): string {
    return this.name;
  }
}
