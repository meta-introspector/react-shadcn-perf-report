import React from 'react';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { useIsFetching } from '@tanstack/react-query'


export function CacheSummary() {
  const queryClient = useQueryClient();

  let count = 0;
  // Fetch and flatten all cached data
  const flattenedData = React.useMemo(() => {
    const queries = queryClient.getQueryCache().findAll();
    count = queries.length;
    //console.log(queries);
    let cacheData :any[]= []

    queries.forEach((query) => {
      // Extract the query key and data
      const queryKey = query.queryKey.join('_'); // Flattening query key to a single string
      const queryData = query.state.data;
      console.log("LOG1",queryKey,queryData);
      //if (queryData) {
        // Add to the flattened object
        //cacheData.set(queryKey,queryData);
      cacheData.push(queryData.props.definition.default)
      //}
    });

    console.log("cache",cacheData);
      return cacheData;
  }, [queryClient]);
  //const  flattenedData = cacheData;
  //console.log("flattenedData",flattenedData);
  //console.log("json",JSON.stringify(flattenedData));
  const isFetching = useIsFetching()
  return (
    <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
      {flattenedData}
      IsFetching:{isFetching}
      len:{count}
    </pre>
  );
}

//      <CacheSummary />
