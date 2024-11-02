import "core-js/features/reflect";

@ObjectType()
export class Scope {
    name!: string;    
};

export type Value=string;

export type LinesT = LineT[];

export type EvalCodeFunction = (code: string) => Promise<void>;

@ObjectType()
export class ReactReplPropsT {
  title?: string;
  stealFocus?: boolean;
  tabs?: string[];
  selectedTab?: string;
  onChangeTab?: (tab: string) => void;
  onClear?: () => void;
  onSubmit?: (input: string) => void;
  submitCodeRef?: React.MutableRefObject<EvalCodeFunction|undefined|null>;
  @Field()
  lines?: LinesT|undefined;
  @Field()
  initialLines?: LinesT | (() => LinesT);
  @Field()
  initiallyExecute?: string[];
  
  height?: number;
};

@ObjectType()
export class LineT {
    type: 'input' | 'output' | 'error' = "input";
    value!: string;
}

import "core-js/features/reflect";
import { Field, Int, ObjectType } from "type-graphql";
import { FC } from "react";
import test from 'node:test';

export @ObjectType()
class TestCase {
  @Field()
  name!:string;

  @Field()
  file!:string;
}

@ObjectType()
class Function {
  @Field()
  url!:string;

  @Field()
  hash!:string;

  // versions
  // test cases
  // calls/called by
  // similar
  // see also
  // performance profile
  // blocks
  // instruction
}

@ObjectType()
class Version {
  @Field()
  hash!: string;
  @Field()
  name!: string;
  @Field()
  url!: string;
  // from url owner,repo,host, etc
}

@ObjectType()
export class Stats {
  @Field()
  total!: number;
  @Field()
  count!: number;

  @Field()
  min!: number;
  
  @Field()
  max!: number;
  
  @Field()
  avg!: number;
  
  @Field()
  variance!: number;
}

export class VersionMetrics {
  [version: string]: Stats
}

export class TestMetrics {
  // for each test case
  [testName: string]: VersionMetrics;
}

export @ObjectType()
class FunctionData {
  // for each function
  [functionName: string] : TestMetrics;
}

export @ObjectType()
class TestRun {
  @Field()
  hash!: string;

  @Field()
  id!: string;  

  // each test run has test cases collected
  @Field()
  metrics!: FunctionData[];
  
  // logs
  
  @Field()
  url!: string;
  // from url owner,repo,host,action/workflow etc
}

export @ObjectType()
class Profile {
  // x
  testCases!: TestCase[];
  // y
  versions!: Version[];
  testRun!: TestRun[];

  // reports
}

export type FCReactReplPropsT = FC<ReactReplPropsT>;

