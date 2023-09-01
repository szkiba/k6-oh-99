import faker, { Faker } from "k6/x/faker";

let f = new Faker(1234);

export default function () {
  // faker with random seed
  console.log(faker.name());

  // faker with custom seed
  console.log(f.name());
}
