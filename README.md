# Graphql-Builder

typescript / node.js graphql schema builder in code.

## Purpose

We have IaC (Infrastructure as Code) and i needed a way to programatically produce a graphql schema. so I give (SaC) Schema as Code. This repo will allow you to programatically create a graphql schema all through nodejs.

I have plans to expand this to GoLang later.

## Install

```
npm i @RedMunroe/graphql-builder
```

## Import

```js
import Schema from @redmunroe/graphql-builder
```

## Usage

```js
const schema = new Schema();
// Type creation
const user = new Type('User').addField('id', fieldType.STRING, true);
// Input type creation
const userInput = new Input('UserInput').addField('id', fieldType.STRING, true);
schema
  .addInput('UserInput', userInput)
  .addType('User', user)
  .addQuery('getUser', {
    output: schema.getType('User'),
  })
  .addMutation('createUser', {
    input: schema.getInput('UserInput'),
    output: schema.getType('User'),
  });

console.log(schema.compile());
```
