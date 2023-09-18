import OutputNodeElement from '../elements/OutputNodeElement';

class OutputNodeStore {
  elements: OutputNodeElement[];

  constructor() {
    this.elements = [];
  }

  getById(id: string): OutputNodeElement {
    const element = this.elements.find((item) => item.id === id);

    if (element === undefined) {
      throw Error(`Элемент ${id} не найден!`);
    }

    return element;
  }
}

export default OutputNodeStore;
