"use client"; // This is a client component
import React, { useState, ReactNode } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Profile } from "../types/ProfileData";
import { TestCase } from "../types/TestCase";

export function TestCaseSelector() {

  function listTestCase(tc:TestCase) :ReactNode {  
    let ret= <SelectItem key={tc.name} value={tc.name}>{tc.name}</SelectItem>
    //console.log(ret);
    return ret
  }

  function findTestCase(prof:Profile, name: string) {
    //console.log(name);
    return prof.testCases.find(item=>item.name === name);
  }
  
  const [getProfile, setProfile] = useState<Profile>({
    versions:[],
    testRuns:[],
   functions:[],
    testCases:[
      {name:"test 1",file:"1"},
      {name:"tes2",file:"test"},
      {name:"test3",file:"test2"}
    ]
  });
  const [testCase,setTestCase] = useState<TestCase>();
  return (
    <span>TestCase:
        <Select value={testCase?.name} onValueChange={(value: string) => setTestCase(findTestCase(getProfile,value))}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select test case" />
          </SelectTrigger>
          <SelectContent> {
            getProfile?.testCases?.map(listTestCase)
          } </SelectContent>
        </Select></span>
  )
}
