import LogicValue from 'base/LogicValue';

type LogicOutput = {
  key: string;
  method: () => LogicValue;
};

export default LogicOutput;
