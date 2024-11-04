import { FunctionDefinition } from "./Function";
import { TestCase } from "./TestCase";
import { TestRun } from "./TestRun";
import { Version } from "./Version";

export //@ObjectType()
  class Profile {
    // x
    testCases!: TestCase[];
    // y
    versions!: Version[];
    testRuns!: TestRun[];
    functions!: FunctionDefinition[]; // what functions do we know about so we can select between them
    //  hosting: any;
  }

export function findTestCase(prof:Profile, name: string) {
  console.log(name);
  return prof.testCases.find(item=>item.name === name);
}

