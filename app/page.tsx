"use client";
//import Image from "next/image";
import PerformanceAnalyzer from "./reports/PerformanceAnalyser"
import GeneralPurposeReplUI from "./react-repl/repl"
import * as React from 'react'
//import ReactDOM from 'react-dom/client'
import { CacheSummary } from "./components/summary"

import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  //useQuery,
  //useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient1 = new QueryClient({
  defaultOptions: {
  },
})

let persister:any = undefined;

if (typeof window !== 'undefined')
  {
    persister = createSyncStoragePersister({
      storage: window.localStorage,
    })
  }


function Home2() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
	<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
	  <PerformanceAnalyzer/>

	  <GeneralPurposeReplUI/>
	  
	            <CacheSummary></CacheSummary>
	</main>
      <ReactQueryDevtools initialIsOpen={false} />

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

function App() {
  return (
    // Provide the client to your App
    <PersistQueryClientProvider
      client={queryClient1}
      persistOptions={{ persister }}>
    <Home2></Home2>
       </PersistQueryClientProvider>
  )
}
export default function Home() {
  return (<App></App>)
}
