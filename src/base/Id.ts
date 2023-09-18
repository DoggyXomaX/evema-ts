import { v4 } from 'uuid';

class Id {
  static generate(prefix: string) {
    return `${prefix}Id(${v4})`;
  }
}

export default Id;
