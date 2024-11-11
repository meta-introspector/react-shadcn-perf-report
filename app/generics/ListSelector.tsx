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
    //throw new Error("Function not implemented.");
    console.log("selected",value);
  }

export function GenericListDefinitionSelector(props:GenericListProps) {

/*  function findGenericList(x:GenericListDefinition,name: string) : GenericElement{
//console.log(name);
    return x.values?.find(item=>item === name)||"not found";
  }
  */

  //  const [getGenericListDefinition, setGenericListDefinition] = useState<GenericListDefinition>(props.definition);
  //const [genericSelection,setGenericSelection] = useState<GenericElement>(props.default);
  //setGenericSelection(props.default);
  //console.log("debug",props,genericSelection)

  function fetch_id(a:any) {
    console.log("fetch id",a);  
    return {
      json : (()=>{
	//console.log("json called");
	return {
	  arg1: a,
	  props: props,
	
	}
      })
    }
  }
  function update(){
    //props.definition.generic_target(props.definition,props.default);
  }
  
  // set the default callback
  if (props.definition.generic_target) {
    //useEffect(update);
  }
  props.definition.fetch_id = fetch_id;
  return (
    <span>{props.definition?.title}:
     
      {
	GenericType({
	  def:props.definition,
	  genericTypeId:props.definition.listName,
	  setGenericTypeId:foo
	})
      }
    </span>
  )
}
