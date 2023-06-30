import { Query } from "./query";
import { Type, fieldType } from "./type";

export type BaseType<ReturnType> = Map<string, ReturnType>; 

export class BaseBucket <BucketType> extends Map<string, BucketType> implements BaseType<BucketType>  {
    FieldString(): string {
        let str = "";
        this.forEach((value: any, key: string) => {
            str += `${key}: ${value}\n`
        });
        return str;
    }
}

export type options = {
    input?: Type;
    output: Type | fieldType;
}

export class Base {
    name: string; 
    input: Type; 
    output: Type | fieldType; 

    constructor(name: string, options: options) {
        this.name = name;
        this.input = options.input;
        this.output = options.output;
    }
}
