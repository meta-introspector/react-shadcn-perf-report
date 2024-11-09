"use client"; // This is a client component

import React, { useState, ReactNode, useEffect, SetStateAction, Key } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Profile } from "../types/ProfileData";
import { GenericListDefinition, GenericElement } from "./GenericListDefinition";
import { GenericType } from './Loader';

type GenericListProps = {
  definition: GenericListDefinition
  ,
  default: GenericElement
}

  function foo(value: SetStateAction<Key>): void {
    throw new Error("Function not implemented.");
  }

export function GenericListDefinitionSelector(props:GenericListProps) {

  function listGenericList(x:GenericElement) :ReactNode {  
    let ret= <SelectItem key={x} value={x}>{x}</SelectItem>
    //console.log(ret)
    return ret
  }
/*  function findGenericList(x:GenericListDefinition,name: string) : GenericElement{
//console.log(name);
    return x.values?.find(item=>item === name)||"not found";
  }
  */

  //  const [getGenericListDefinition, setGenericListDefinition] = useState<GenericListDefinition>(props.definition);
  const [genericSelection,setGenericSelection] = useState<GenericElement>(props.default);
  //setGenericSelection(props.default);
  //console.log("debug",props,genericSelection)

  function update(){
    //props.definition.generic_target(props.definition,props.default);
  }
  
  // set the defaul callback
  if (props.definition.generic_target) {
    //useEffect(update);
  }
  
  return (
    <span>{props.definition?.title}:
      <Select value={genericSelection}
	onValueChange={(value: string) => { 
	  if (props.definition.target) {
	    props.definition.target(value);
	  };
	  if (props.definition.generic_target) {
	    console.log("generic target",props,value);
	    props.definition.generic_target(props.definition,value);
	  };
	  return setGenericSelection(value)}}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select {datatype.name}" />
          </SelectTrigger>
          <SelectContent> {
            props.definition.values?.map(listGenericList)
          } </SelectContent>
      </Select>
      {GenericType({
	def:props.definition,
	genericTypeId:props.definition.listName,
	setGenericTypeId:foo})}
    </span>
  )
}
