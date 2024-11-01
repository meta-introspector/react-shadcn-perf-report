"use client";
//declare module 'awesome-react-repl';
//import './awesome-react-repl';
//import type { ReactReplJS } from './ReactReplJS';
import { ReactReplJS } from "./ReactReplJS"
import type {  EvalCodeFunction } from "./types"
import { ReactRepl } from "./ReactReplView"
function actionOnChangeTab (){}
function actionOnSubmit (): Promise<void>{
  return new Promise(resolve => resolve());
}
function actionOnClear (){}
//function submitCodeRef1 (){}
import React from "react"

//'MutableRefObject<EvalCodeFunction>'.
//const submitCodeRef = submitCodeRef1;//React.MutableRefObject<EvalCodeFunction>(submitCodeRef1);
import { useRef } from 'react';

const GeneralPurposeReplUI = () => {
  const submitCodeRef = useRef<EvalCodeFunction|undefined>(undefined); 
  submitCodeRef.current = actionOnSubmit;

      //   onChangeTab={actionOnChangeTab}
      // onSubmit={actionOnSubmit}
      // submitCodeRef={submitCodeRef}
  // onClear={actionOnClear}
  return  (
    <div>DEBUG { JSON.stringify( actionOnSubmit ) } test { JSON.stringify( submitCodeRef )} test2
    <ReactRepl
        title={`test Repl!`}
        tabs={["Javascript"]}
        selectedTab="Javascript"     height={200}
        lines={[
          { type: "input", value: "obj = { something: 2 }" },
          { type: "output", value: '{ "something": 2 }' },
          { type: "input", value: "b" },
          { type: "error", value: "TypeError: b is not defined" },
        ]} onChangeTab={function (tab: string): void {
          throw new Error("Function not implemented.");
        } } onSubmit={function (input: string): void {
          throw new Error("Function not implemented.");
        } }    /></div>
  )
}
export default GeneralPurposeReplUI;

