import { outputNodeStore } from 'stores';
import Id from 'base/Id';
import type OutputNodeElement from './OutputNodeElement';
import Nullable from '../types/Nullable';
import LogicValue from '../base/LogicValue';

class InputNodeElement {
  id: string;

  outputId: Nullable<string>;

  constructor() {
    this.id = Id.generate('Input');
    this.outputId = null;
  }

  get value(): LogicValue {
    return this.output !== null ? this.output.value : 0;
  }

  get output(): Nullable<OutputNodeElement> {
    return this.outputId !== null ? outputNodeStore.getById(this.outputId) : null;
  }
}

export default InputNodeElement;
