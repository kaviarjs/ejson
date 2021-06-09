EJSON is a great way to use JSON to pass binaries and serialize/deserialize any type of data with ease. We use it to easily serialise/deserialise our objects while maintaining important objects such as dates, object ids, regexp etc.

## Install

```bash
npm install --save @kaviar/ejson
```

## [Documentation](https://docs.meteor.com/api/ejson.html)

Follow the official and complete documentation here:
https://docs.meteor.com/api/ejson.html

## Extra

An easy way to transform an object into a class instance.

```ts
import { toModel } from "@kaviar/ejson";

class Person {
  firstname: string;
  lastname: string;

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}

toModel(Person, {
  firstname: "John",
  lastname: "Smith",
});
```
