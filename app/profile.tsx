"use client"; // This is a client component
import React, { useState, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

//type Version = 'v1' | 'v2' | 'v3';
type TestCase = 'test1' | 'test2';

interface VersionMetrics {
  v1: number;
  v2: number;
  v3: number;
}

interface TestMetrics {
  [key: string]: VersionMetrics;
}

interface FunctionData {
  functionName: string;
  metrics: TestMetrics;
}

interface PerformanceStats {
  min: number;
  max: number;
  avg: number;
  variance: string;
}

const PerformanceAnalyzer = () => {
  const [selectedTest, setSelectedTest] = useState<TestCase>('test1');
  
  // Sample data structure
  const sampleData: FunctionData[] = [
    {
      functionName: "ark_ff::fields::models::fp::montgomery_backend::MontBackend",
      metrics: {
        test1: { v1: 1000, v2: 1200, v3: 800 },
        test2: { v1: 900, v2: 950, v3: 850 }
      }
    },
    {
      functionName: "ark_ff::fields::models::fp::standard_backend::StdBackend",
      metrics: {
        test1: { v1: 1100, v2: 1300, v3: 900 },
        test2: { v1: 950, v2: 1000, v3: 875 }
      }
    }
  ];

  const processedData = useMemo(() => {
    return sampleData.map(func => ({
      name: func.functionName.split('::').pop(),
      v1: func.metrics[selectedTest].v1,
      v2: func.metrics[selectedTest].v2,
      v3: func.metrics[selectedTest].v3
    }));
  }, [selectedTest, sampleData]);

  const getPerformanceStats = (metrics: TestMetrics): PerformanceStats => {
    const allValues = Object.values(metrics)
      .flatMap(test => Object.values(test));
    const min = Math.min(...allValues);
    const max = Math.max(...allValues);
    const avg = allValues.reduce((a, b) => a + b, 0) / allValues.length;
    const variance = ((max - min) / min * 100).toFixed(1);
    return { min, max, avg, variance };
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Performance Analysis Dashboard</h1>
      
      <div className="mb-6">
        <Select value={selectedTest} onValueChange={(value: TestCase) => setSelectedTest(value)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select test case" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="test1">Test Case 1</SelectItem>
            <SelectItem value="test2">Test Case 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 w-full">
            <LineChart
              width={1100}
              height={400}
              data={processedData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Ticks', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="v1" 
                stroke="#8884d8" 
                name="Version 1" 
              />
              <Line 
                type="monotone" 
                dataKey="v2" 
                stroke="#82ca9d" 
                name="Version 2" 
              />
              <Line 
                type="monotone" 
                dataKey="v3" 
                stroke="#ffc658" 
                name="Version 3" 
              />
            </LineChart>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left border-b bg-gray-50 font-medium">Function</th>
                  <th className="p-4 text-left border-b bg-gray-50 font-medium">Best Version</th>
                  <th className="p-4 text-left border-b bg-gray-50 font-medium">Worst Version</th>
                  <th className="p-4 text-left border-b bg-gray-50 font-medium">Average</th>
                  <th className="p-4 text-left border-b bg-gray-50 font-medium">Variance</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((func, i) => {
                  const stats = getPerformanceStats(func.metrics);
                  return (
                    <tr key={i}>
                      <td className="p-4 border-b">{func.functionName.split('::').pop()}</td>
                      <td className="p-4 border-b text-green-600">
                        {stats.min.toLocaleString()}
                      </td>
                      <td className="p-4 border-b text-red-600">
                        {stats.max.toLocaleString()}
                      </td>
                      <td className="p-4 border-b">
                        {Math.round(stats.avg).toLocaleString()}
                      </td>
                      <td className="p-4 border-b">{stats.variance}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceAnalyzer;
