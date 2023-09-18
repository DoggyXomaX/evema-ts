import Id from 'base/Id';
import LogicValue from '../base/LogicValue';

class SignalElement {
  x: number;

  y: number;

  id: string;

  state0: LogicValue;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.id = Id.generate('Signal');
    this.state0 = 0;
  }

  get output0() {
    return this.state0;
  }
}

export default SignalElement;
