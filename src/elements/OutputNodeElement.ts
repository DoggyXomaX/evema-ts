import Id from 'base/Id';
import LogicValue from '../base/LogicValue';

class OutputNodeElement {
  id: string;

  value: LogicValue;

  constructor() {
    this.id = Id.generate('Output');
    this.value = 0;
  }

  set(value: LogicValue) {
    this.value = value;
  }
}

export default OutputNodeElement;
