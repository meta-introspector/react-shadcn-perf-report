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
import { FunctionDefinition } from "../types/Function";

export function FunctionSelector() {

  function listFunction(tc:FunctionDefinition) :ReactNode {  
    let ret= <SelectItem key={tc.name} value={tc.name}>{tc.name}</SelectItem>
    //console.log(ret);
    return ret
  }

  function findFunction(prof:Profile, name: string) {
    //console.log(name);
    return prof.testCases.find(item=>item.name === name);
  }
  
  const [getProfile, setProfile] = useState<Profile>({
    versions:[],
    testRuns:[],   
    testCases:[],
    functions: [
      {name:"test 1"},
    ]
  });
  const [testCase,setFunction] = useState<FunctionDefinition>();
  return (
    <span>Function:
        <Select value={testCase?.name} onValueChange={(value: string) => setFunction(findFunction(getProfile,value))}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select test case" />
          </SelectTrigger>
          <SelectContent> {
            getProfile?.testCases?.map(listFunction)
          } </SelectContent>
        </Select></span>
  )
}
