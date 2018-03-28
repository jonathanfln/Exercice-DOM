import { Personne } from "./personne.js";

export class Doctor extends Personne {
  constructor(name, age, sex, prof) {
    super(name, age, sex, prof);
  }
  operer() { }
}