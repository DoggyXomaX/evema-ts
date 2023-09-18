import Nullable from 'types/Nullable';
import { inputNodeStore } from 'stores';
import Id from 'base/Id';
import LogicValue from 'base/LogicValue';
import InputNodeElement from 'elements/InputNodeElement';

class LogicOr2Element {
  x: number;

  y: number;

  id: string;

  inputId0: Nullable<string>;

  inputId1: Nullable<string>;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.id = Id.generate('LogicOr2');
    this.inputId0 = null;
    this.inputId1 = null;
  }

  get output0(): LogicValue {
    const value0 = this.input0 !== null ? this.input0.value : 0;
    const value1 = this.input1 !== null ? this.input1.value : 0;
    return (value0 | value1) as LogicValue;
  }

  get input0(): Nullable<InputNodeElement> {
    return this.inputId0 !== null ? inputNodeStore.getById(this.inputId0) : null;
  }

  get input1(): Nullable<InputNodeElement> {
    return this.inputId1 !== null ? inputNodeStore.getById(this.inputId1) : null;
  }
}

export default LogicOr2Element;
