"use client"; // This is a client component
import React, { useState, ReactNode } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Profile } from "./ProfileData";
import { GitHosting, GitRepository } from "./GitHostingTypes";
import { Accounts } from "./Accounts";

export function GitRepoSelector() {
  function listRepo(tc:GitRepository) :ReactNode {  
    let ret= <SelectItem key={tc.name} value={tc.name}>{tc.name}</SelectItem>
    return ret
  }

  function findGitRepo(name: string):GitRepository|undefined {
    //console.log(name);
    return gitHosting?.repos?.find(item=>item.name === name);
  }
  
  const [gitHosting] = useState<GitHosting>(
    {
      name:"github",
      owners: [],
      repos:[
        {name: "o1js", owner: { name: "mdupont" }}        
      ]
    }
);
  const [repo,setGitRepo] = useState<GitRepository>();
  return (
    <span>Git Repo:
        <Select value={repo?.name} onValueChange={(value: string) => setGitRepo(findGitRepo(value))}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Git Repo" />
          </SelectTrigger>
          <SelectContent> {
            gitHosting?.repos?.map(listRepo)
          } </SelectContent>
        </Select></span>
  )
}
