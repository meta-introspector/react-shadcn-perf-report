"use client";
//declare module 'awesome-react-repl';
//import './awesome-react-repl';
//import type { ReactReplJS } from './ReactReplJS';
import { ReactReplJS } from "./ReactReplJS"
import { useReactReplJS } from "./useReactReplJS"
import type {  EvalCodeFunction } from "./types"
import { ReactRepl } from "./ReactReplView"
function actionOnChangeTab (){}
function actionOnSubmit (): Promise<void>{
  console.log("submit");
  return new Promise(resolve => {
    console.log("resolve");
    resolve()
  });
}
function actionOnClear (){}
//function submitCodeRef1 (){}
import React from "react"

import { useRef } from 'react';

const GeneralPurposeReplUI = () => {
  const submitCodeRef = useRef<EvalCodeFunction|undefined>(undefined); 
  submitCodeRef.current = actionOnSubmit;

  const { submitCode, ReactRepl } = useReactReplJS();
      //   onChangeTab={actionOnChangeTab}
      // onSubmit={actionOnSubmit}
      // submitCodeRef={submitCodeRef}
  // onClear={actionOnClear}

  // onChangeTab={function (tab: string): void {
  //         //throw new Error("Function not implemented.");
  // 	  console.log("change tag", tab);
  // 	  submitCode('alert(`${tab}! This will appear in the REPL!`)');

  //       } }
  return  (
    <div>
    <ReactRepl
        title={`test Repl!`}
      height={600}

      // TODO:
      // add copy
      // split into chunks
      // send to port
      // connect port between browser windows
      // send to another app or chat window on android.
      // send to llm
      //lines={[
      //          { type: "input", value: "obj = { something: 2 }" },
      //          { type: "output", value: '{ "something": 2 }' },
      //          { type: "input", value: "b" },
      //   { type: "error", value: "TypeError: b is not defined" },
      //]}

b      // onSubmit={function (input: string): void {
      //     //throw new Error("Function not implemented.");
      // 	  console.log("input", input, eval(input));
      // 	  submitCode('alert(`${input}! This will appear in the REPL!`)');
      // 	  //FIXME: lines.append({type:"input",value: input});
	  
      //   } }
    /></div>
  )
}
export default GeneralPurposeReplUI;

