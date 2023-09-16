import { v4 } from 'uuid';

class ElementBase {
  id: string;

  priority: number;

  inputs: unknown[];

  outputs: unknown[];

  states: unknown[];

  constructor() {
    this.id = `ElementId${v4()}`;
    this.priority = 0;
    this.inputs = [];
    this.outputs = [];
    this.states = [];
  }

  update() {
    // ...
  }
}

export default ElementBase;
