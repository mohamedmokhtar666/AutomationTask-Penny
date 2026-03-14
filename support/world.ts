import { setWorldConstructor, World } from "@cucumber/cucumber";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class CustomWorld extends World {
  user!: User;
}

setWorldConstructor(CustomWorld);