// fakerdata.mts
import { faker } from '@faker-js/faker';

export function generateUser() {
  const name = faker.person.firstName();

  const signUpDetails = {
    name: name,
    email: faker.internet.email(),
    password: faker.internet.password({ length: 20 }),
    firstName: name,
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address: faker.location.secondaryAddress(),
    country: "United States",
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    mobileNumber: faker.phone.number(),
  };

  return signUpDetails;
}
