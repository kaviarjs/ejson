EJSON is a great way to use JSON to pass binaries and serialize/deserialize any type of data with ease. We use it to easily serialise/deserialise our objects while maintaining important objects such as dates, object ids, regexp etc.

## Install

```bash
npm install --save @kaviar/ejson
```

```ts
import { EJSON } from "@kaviar/ejson";

const result = EJSON.stringify({ a: 1 }); // string: {"a": 1}
const parsed = EJSON.parse(result); // object: {a: 1}
```

Works with complex objects such as `Date`, `RegExp`, `NaN`, `Inf, -Inf`:

```ts
const result = EJSON.stringify({ now: new Date() }); // string: {"now": { "$date": 100000000 }}
```

## Custom Objects

Works with customly defined objects for easy serialisastion and deserialisation:

```ts
class Distance {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  // Convert our type to JSON.
  toJSONValue() {
    return {
      value: this.value,
      unit: this.unit,
    };
  }

  // Unique type name.
  typeName() {
    return "Distance";
  }
}

EJSON.addType("Distance", function fromJSONValue(json) {
  return new Distance(json.value, json.unit);
});

EJSON.stringify(new Distance(10, "m"));
// Returns '{"$type":"Distance","$value":{"value":10,"unit":"m"}}'
```

## [Documentation](https://docs.meteor.com/api/ejson.html)

Follow the official and complete documentation here, our implementation is a superset of it:
https://docs.meteor.com/api/ejson.html

## Models

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
