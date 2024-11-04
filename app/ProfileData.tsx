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
    //  hosting: any;
  }

export function findTestCase(prof:Profile, name: string) {
  console.log(name);
  return prof.testCases.find(item=>item.name === name);
}

