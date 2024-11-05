"use client"; // This is a client component

import { ReportState } from './ReportState';
import { ResourceMetrics } from "./ResourceMetrics";


export const calculateResourceMetrics = (config: ReportState['configuration']): ResourceMetrics => {
  // This would normally be based on actual measurements
  // Here we're just providing example calculations
  return {
    memory: config.sizeType === 'Big' ? 1024 : 256,
    cpu: config.speedType === 'Fast' ? 80 : 40,
    networkCalls: config.category === 'Network' ? 100 : 10,
    storageUsage: config.allocationType === 'Space-Storage' ? 5000 : 1000
  };
};
