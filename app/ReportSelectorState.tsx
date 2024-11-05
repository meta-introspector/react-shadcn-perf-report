"use client"; // This is a client component

import { TestCase } from "./TestCase";

export interface ReportSelectorState {
  selectedTestCase: TestCase | null;
}
