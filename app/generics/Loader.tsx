import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useState, useEffect, SetStateAction, Key } from 'react';
import React, { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { GenericElement, GenericListDefinition } from "./GenericListDefinition";

interface GenericType{
  id: GenericId;
  title: ReactNode;
  body: string
}
function useGenericTypes(def: GenericListDefinition) {
  return useQuery({
    queryKey: [],
    queryFn: async (): Promise<Array<GenericType>> => {
      const response = await def.fetch()
      console.log("response1",response);
      return await response.json()
    },
  })
}
type GenericId = React.Key

function Loader({
  setGenericTypeId,
  def1,
}: {
  setGenericTypeId: React.Dispatch<React.SetStateAction<GenericId>>
  def1: GenericListDefinition
}) {
  const queryClient = useQueryClient()
  //const { status, data, isFetching , isError, isPending} = useGenericTypes()
  const response = useGenericTypes(def1)
  const isError = response.isError;
  const isPending = response.status =='loading';
  const isFetching = response.isFetching;
  const data = response.data;

  return (
    <div>
      <h1>GenericTypes</h1>
      <div>
        {isPending ? (
          'Loading...'
        ) : isError ? (
          <span>Error: "error"</span>
        ) : (
          <>
            <div>
              {data?.map((genericType) => (
                <p key={genericType.id}>
                  <a
                    onClick={() => setGenericTypeId(genericType.id)}
                    href="#"
                    style={
                      // We can access the query data here to show bold links for
                      // ones that are cached
                      queryClient.getQueryData(['genericType', genericType.id])
                        ? {
                            fontWeight: 'bold',
                            color: 'green',
                          }
                        : {}
                    }
                  >
                    {genericType.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? 'Fetching...' : ' '}</div>
          </>
        )}
      </div>
    </div>
  )
}

const getGenericTypeById = async (id: GenericId, def: GenericListDefinition ): Promise<GenericType> => {
  const response = await def.fetch_id(id);
  //console.log(response);
  if (response) {
  return await response.json()
  } else {
    return {id:"FIXME",title:"error", body:"body"}
  }
}

function useGenericType(genericTypeId: GenericId, def: GenericListDefinition) {
  return useQuery({
    queryKey: ['genericType', genericTypeId],
    queryFn: () => getGenericTypeById(genericTypeId,def),
    enabled: !!genericTypeId,
  })
}

export function GenericType({
  genericTypeId,
  setGenericTypeId,
  def,
}: {
  genericTypeId: GenericId,
  setGenericTypeId: React.Dispatch<React.SetStateAction<GenericId>>,
  def: GenericListDefinition
}) {
  function listGenericList(x:GenericElement) :ReactNode {  
    let ret= <SelectItem key={x} value={x}>{x}</SelectItem>
    //console.log(ret)
    return ret
  }

  const { status, data, isFetching } = useGenericType(genericTypeId,def)
  //console.log("testdata",data, status, isFetching, genericTypeId);
  const defaultv = def.default || def.values[0]
  const [genericSelection,setGenericSelection] = useState<GenericElement>(defaultv);
  const selectValue = "select " + def.title;
  //Data:{ JSON.stringify(data) }
  return (
    <div>   
      {!genericTypeId ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: error1 {status}</span>
      ) : (
        <div>
	        <span>
  <Select value={genericSelection}
	  onValueChange={(value: string) => { 
	    if (def.target) {
	      def.target(value);
	    };
	    if (def.generic_target) {
	      console.log("generic target",def,value);
	      def.generic_target(def,value);
	    };
	    return setGenericSelection(value)}}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder={selectValue} />
          </SelectTrigger>
          <SelectContent> {
            def.values?.map(listGenericList)
          } </SelectContent>
      </Select>
    </span>
          <h1>{data?.title}</h1>
          <div>
            <p>{data?.body}</p>	    
          </div>
          <div>{isFetching ? 'Fetch...' : ''}</div>
        </div>
      )}
    </div>
  )
}
