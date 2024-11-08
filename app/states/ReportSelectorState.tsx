"use client"; // This is a client component

import { TestCase } from "../types/TestCase";

export interface ReportSelectorState {
  selectedTestCase: TestCase | null;
}
