import People from "./People";

export default class PeopleBuilder {
  protected params = new Map();

  constructor() {}

  name(name: string): PeopleBuilder {
    this.params.set("name", name);
    return this;
  }

  email(email: string): PeopleBuilder {
    this.params.set("email", email);
    return this;
  }

  age(age: number): PeopleBuilder {
    this.params.set("age", age);
    return this;
  }

  locale(locale: string): PeopleBuilder {
    this.params.set("locale", locale);
    return this;
  }

  address(address: string): PeopleBuilder {
    this.params.set("address", address);
    return this;
  }

  build(): People {
    return new People(
      this.params.get("name"),
      this.params.get("email"),
      Number(this.params.get("age")),
      this.params.get("locale"),
      this.params.get("address")
    );
  }
}
