"use client"; // This is a client component

import { PerformanceMetrics } from './PerformanceMetrics';
import { ResourceMetrics } from './ResourceMetrics';


export interface PerformanceReport {
  metadata: {
    timestamp: string;
    environment: string;
    dataSource: string;
  };
  configuration: {
    module: string;
    callingMode: string;
    layer: string;
    category: string;
    countType: string;
    sizeType: string;
    speedType: string;
    timePhaseType: string;
    languageType: string;
    mathType: string;
    allocationType: string;
    dataType: string;
    accountType: string;
  };
  analysis: {
    resourceUtilization: ResourceMetrics;
    performanceMetrics: PerformanceMetrics;
    recommendations: string[];
  };
}
