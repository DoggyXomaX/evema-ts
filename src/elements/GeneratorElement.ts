import { timeStore } from 'stores';
import Id from 'base/Id';
import LogicValue from 'base/LogicValue';

class GeneratorElement {
  x: number;

  y: number;

  id: string;

  option0: number; // period 1..5

  option1: number; // fill 0.1..0.9

  option2: number; // delay 0..5

  constructor() {
    this.x = 0;
    this.y = 0;
    this.id = Id.generate('Generator');
    this.option0 = 1;
    this.option1 = 0.5;
    this.option2 = 0;
  }

  get output0(): LogicValue {
    const { time } = timeStore;

    const fullTime = this.option2 + this.option0;

    const relativeTime = time % fullTime;

    if (relativeTime < this.option2) return 0;

    const noDelayRelativeTime = relativeTime - this.option2;

    return noDelayRelativeTime < this.option1 * this.option0 ? 1 : 0;
  }
}

export default GeneratorElement;
