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
import { GenericListDefinition, GenericElement } from "./GenericListDefinition";

type GenericListProps = {
  definition: GenericListDefinition
  ,
  default: GenericElement
}
export function GenericListDefinitionSelector(props:GenericListProps) {

  function listGenericList(x:GenericElement) :ReactNode {  
    let ret= <SelectItem key={x} value={x}>{x}</SelectItem>
    return ret
  }
  function findGenericList(x:GenericListDefinition,name: string) : GenericElement{
    console.log(name);
    return x.values?.find(item=>item === name)||"not found";
  }
  
  //  const [getGenericListDefinition, setGenericListDefinition] = useState<GenericListDefinition>(props.definition);
  const [genericSelection,setGenericSelection] = useState<GenericElement>(props.default);
  return (
    <span>{props.definition?.title}:
      <Select value={
        props.definition?.listName
      }
	onValueChange={(value: string) => setGenericSelection(
	  findGenericList(props?.definition,value)
	)
	}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select {datatype.name}" />
          </SelectTrigger>
          <SelectContent> {
            props.definition.values?.map(listGenericList)
          } </SelectContent>
        </Select></span>
  )
}
