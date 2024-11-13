import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { useIsFetching } from '@tanstack/react-query'
import { GenericListProps } from '../generics/ListSelector';
import React, { useState, useEffect } from 'react';

type QueryData = {props: GenericListProps};

function someList(props: Map<any,any>) {
  const data1 = Array.from(props.entries())
  const listItems = data1.map(([k,v]) =>
    <li key={k}>{k} {v}</li>
  );
  return (
    <div>Hello
    <ul>{listItems}</ul>
    </div>
  );
}

function getData(queries: any[]){
  const count = queries.length;
  //console.log(queries);
  let cacheData = new Map()  
  cacheData.set("count",count);
  queries.forEach((query) => {
    // Extract the query key and data
    const queryKey = query.queryKey.join('_'); // Flattening query key to a single string
    const queryData: QueryData = query.state.data as QueryData;
    console.log("LOG1",queryKey,"QD",queryData,"CD",cacheData);      
      if (queryData) {
        const defaultv = queryData.props.definition.default|| queryData.props.definition.values[0]
	cacheData.set(queryData.props.definition.listName,defaultv)
      }else{
	console.log("ERR",query.state.data)
      }
    });

  return cacheData      
}

export function CacheSummary() {
  const queryClient = useQueryClient();   
  const queries = queryClient.getQueryCache().findAll();
  const count = queries.length;
  console.log(queries);

  const flattenedData = someList(getData(queries));
  //const  flattenedData = cacheData;
  //console.log("flattenedData",flattenedData);
  //console.log("json",JSON.stringify(flattenedData));
  const isFetching = useIsFetching()

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // Simulate some asynchronous operation
    setTimeout(() => {
      setShowComponent(true);
    }, 10);
  }, []);

  return (
    <div>
      Summary:check {showComponent && count}
      {isFetching ? (
	<div>Loading...</div>
      ) : (
	<div>Done:{showComponent && flattenedData}</div>
      )}
    </div>
  )}
