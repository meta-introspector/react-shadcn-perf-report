"use client"; // This is a client component

import { PerformanceReport } from "../types/PerformanceReport";
import { TypedTable } from "../types/TypedTable";


export interface ReportState extends Omit<PerformanceReport, 'metadata'> {
  rawSelections: TypedTable;
}
