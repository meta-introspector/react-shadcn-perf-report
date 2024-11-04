import { FunctionData } from "./FunctionData";


export //@ObjectType()
  class TestRun {
  //@Field()
  hash!: string;

  //@Field()
  id!: string;

  // each test run has test cases collected
  //@Field()
  metrics!: FunctionData[];

  // logs
  //@Field()
  url!: string;
}
