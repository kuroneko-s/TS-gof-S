import People from "./People";
import PeopleBuilder from "./PeopleBuilder";

export default class DefaultLocalePeopleBuilder extends PeopleBuilder {
  build(): People {
    const locale = this.params.has("locale") ? this.params.get("locale") : "KR";
    const address = this.params.has("address")
      ? this.params.get("address")
      : "평택";

    return new People(
      this.params.get("name"),
      this.params.get("email"),
      Number(this.params.get("age")),
      locale,
      address
    );
  }
}
