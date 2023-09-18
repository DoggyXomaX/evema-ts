import InputNodeElement from '../elements/InputNodeElement';

class InputNodeStore {
  elements: InputNodeElement[];

  constructor() {
    this.elements = [];
  }

  getById(id: string): InputNodeElement {
    const element = this.elements.find((item) => item.id === id);

    if (element === undefined) {
      throw Error(`Элемент ${id} не найден!`);
    }

    return element;
  }
}

export default InputNodeStore;
