import { BaseBucket } from "./base";
import { Type, fieldType } from "./type";

export type Q = Map<string, Query>; 

export class QueryBucket extends BaseBucket<Query> implements Q  {
    toString() : string {
        let str = "Query {\n";
        str += `    ${this.FieldString()}`
        return str + "}\n";
    }
}

export type queryOptions = {
    input?: Type;
    output: Type | fieldType;
}

export class Query {
    name: string; 
    input: Type;
    output: Type | fieldType;

    constructor(name: string, options : queryOptions) {
        this.name = name;
        this.input = options.input;
        this.output = options.output;
    }

    toString() : string {
        return `${this.name}(${this.input ? this.input : ""}) : ${this.output}`
    }
}