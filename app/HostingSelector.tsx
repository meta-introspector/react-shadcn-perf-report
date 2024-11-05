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
import { GitHosting } from "./Hosting";
import { Accounts } from "./Accounts";

export function GitHostingSelector() {
  function listHosting(tc:GitHosting) :ReactNode {  
    let ret= <SelectItem key={tc.name} value={tc.name}>{tc.name}</SelectItem>
    return ret
  }

  function findGitHosting(name: string):GitHosting|undefined {
    //console.log(name);
    return accounts?.gitHostings?.find(item=>item.name === name);
  }
  
  const [accounts] = useState<Accounts>(
    {
      gitHostings:[
        {
          name:"github", 
          owners:[ {name:"hello"} ],
          repos : [{name: "o1js", owner: { name: "mdupont" }}]
        }
      ]
    }
);
  const [hosting,setGitHosting] = useState<GitHosting>();
  return (
    <span>Hosting:
        <Select value={hosting?.name} onValueChange={(value: string) => setGitHosting(findGitHosting(value))}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Git Hosting" />
          </SelectTrigger>
          <SelectContent> {
            accounts?.gitHostings?.map(listHosting)
          } </SelectContent>
        </Select>
    </span>
  )
}
