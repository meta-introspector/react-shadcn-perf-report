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
import { GitHosting } from "../types/GitHostingTypes";
import { Accounts } from "../types/Accounts";
import { GenericListDefinition } from '../generics/GenericListDefinition';

export function getDescription() :GenericListDefinition {
  return {
	  listName: "Hosting",
	  title: 'List of Hosting',
	  type: 'Hosting',
	  values: [
	    "GitHub",
	    "GitLab",
	    "codeberg",// this list
	  ],
	  sub_components: [
	  ]
	}
}

export function GenericList(setGenericState: (description: GenericListDefinition, value: string) => void) {
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
      <Select value={hosting?.name} onValueChange={(value: string) => {
	setGitHosting(findGitHosting(value))
	setGenericState(getDescription(),value);
      }
      }>
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
