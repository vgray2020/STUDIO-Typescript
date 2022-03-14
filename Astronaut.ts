import { Payload } from './Payload';

export class Astronaut implements Payload {
  // properties and methods
  massKg: number;
  name: string;

  constructor(massKg, name) {
    this.massKg = massKg;
    this.name = name;
  }
}
