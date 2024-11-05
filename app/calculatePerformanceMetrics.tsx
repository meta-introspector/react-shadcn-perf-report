"use client"; // This is a client component

import { PerformanceMetrics } from "./PerformanceMetrics";
import { ReportState } from './ReportState';


export const calculatePerformanceMetrics = (config: ReportState['configuration']): PerformanceMetrics => {
  // This would normally be based on actual measurements
  const baseResponseTime = config.speedType === 'Fast' ? 100 : 300;

  return {
    averageResponseTime: baseResponseTime,
    p95ResponseTime: baseResponseTime * 1.5,
    p99ResponseTime: baseResponseTime * 2,
    errorRate: config.speedType === 'Fast' ? 0.1 : 0.5,
    throughput: config.speedType === 'Fast' ? 1000 : 500
  };
};
