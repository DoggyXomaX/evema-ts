import TimeStore from 'stores/TimeStore';
import OutputNodeStore from 'stores/OutputNodeStore';
import InputNodeStore from 'stores/InputNodeStore';

const timeStore = new TimeStore(0.1);
const outputNodeStore = new OutputNodeStore();
const inputNodeStore = new InputNodeStore();

export { timeStore, outputNodeStore, inputNodeStore };
