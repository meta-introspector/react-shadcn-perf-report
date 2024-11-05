"use client"; // This is a client component

import { ReportState } from './ReportState';
import { calculatePerformanceMetrics } from './calculatePerformanceMetrics';
import { calculateResourceMetrics } from './calculateResourceMetrics';

export const analyzeConfigurations = (config: ReportState['configuration']) => {
  const recommendations: string[] = [];
  const resourceMetrics = calculateResourceMetrics(config);
  const performanceMetrics = calculatePerformanceMetrics(config);

  // Add recommendations based on configuration
  if (config.speedType === 'Slow' && config.sizeType === 'Big') {
    recommendations.push('Consider implementing pagination or lazy loading');
  }

  if (config.languageType === 'javascript' && config.allocationType === 'Compute') {
    recommendations.push('Consider using Web Workers for compute-intensive operations');
  }

  return {
    resourceUtilization: resourceMetrics,
    performanceMetrics: performanceMetrics,
    recommendations
  };
};
