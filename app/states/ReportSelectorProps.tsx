"use client"; // This is a client component

import { TestCase } from "../types/TestCase";
import { TestRun } from "../types/TestRun";
import { Version } from "../types/Version";

export interface ReportSelectorProps {
  testCases: TestCase[];
  versions: Version[];
  testRuns: TestRun[];
}
