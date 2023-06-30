export type T = Map<string, Type>; 

export class TypeBucket extends Map<string, Type> implements T  {
    toString() : string {
        let str = "";
        this.forEach((value: Type, key: string) => {
            str += `type ${key} {\n`
            value.fields.forEach((value: fieldOptions, key: string) => {
                str += `    ${key}: ${value.type}${value.required ? "!" : ""}\n`
            });
            str += "}\n\n"
        });
        return str;
    }
}

type fieldOptions = {
    required?: boolean;
    type: string
}

export enum fieldType {
    STRING = "String",
    ID  = "ID",
    INT = "Int",
    FLOAT = "Float",
    BOOLEAN = "Boolean",
}

export class Type {
    name: string; 
    fields: Map<string, fieldOptions> = new Map<string, fieldOptions>();

    constructor(name: string) {
        this.name = name;
    }

    public addField(name: string, type: fieldType, required: boolean = false): Type {
        this.fields.set(name, { type: type, required: required });
        return this; 
    }

    toString() : string {
        return this.name; 
    }
}