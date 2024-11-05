"use client"; // This is a client component

import { TestCase } from "./TestCase";
import { TestRun } from "./TestRun";
import { Version } from "./Version";

export interface ReportSelectorProps {
  testCases: TestCase[];
  versions: Version[];
  testRuns: TestRun[];
}
