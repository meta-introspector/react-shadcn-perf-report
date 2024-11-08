import { TestMetrics } from "./TestMetrics";


export //@ObjectType()
  class FunctionData {
  // for each function
  [functionName: string]: TestMetrics;
}
