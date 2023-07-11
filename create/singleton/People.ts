/* class People {
  constructor() {}

  println() {
    console.log("Hello This is Singleton");
  }
}

module.exports = new People(); */

export class NormalPeople {
  constructor() {}
}

export class People2 {
  private static INSTANCE: People2;

  private constructor() {}

  public static getInstance() {
    if (!People2.INSTANCE) {
      People2.INSTANCE = new People2();
    }

    return People2.INSTANCE;
  }
}
