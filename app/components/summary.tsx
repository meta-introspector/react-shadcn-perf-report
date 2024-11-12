import React from 'react';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { useIsFetching } from '@tanstack/react-query'
import { GenericListProps } from '../generics/ListSelector';
type QueryData = {props: GenericListProps};

function someList(props: Map<any,any>) {
  const data1 = Array.from(props.entries())
  const listItems = data1.map(([k,v]) =>
    <li>{k} {v}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function getData(queryClient: QueryClient){
  const queries = queryClient.getQueryCache().findAll();
  const count = queries.length;
  //console.log(queries);
  let cacheData = new Map()  
  queries.forEach((query) => {
    // Extract the query key and data
    const queryKey = query.queryKey.join('_'); // Flattening query key to a single string
    const queryData: QueryData = query.state.data as QueryData;
    console.log("LOG1",queryKey,queryData);      
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
  let count = 0;
  const flattenedData = someList(getData(queryClient));
  //const  flattenedData = cacheData;
  //console.log("flattenedData",flattenedData);
  //console.log("json",JSON.stringify(flattenedData));
  const isFetching = useIsFetching()
  return (
    <div>
    <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
      {flattenedData}
    </pre>
    </div>
  );
}

