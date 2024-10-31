"use client";
//declare module 'awesome-react-repl';
//import './awesome-react-repl';
//import type { ReactReplJS } from './ReactReplJS';
import { EvalCodeFunction } from "./ReactReplJS"
import { ReactReplView } from "./ReactReplView"
function actionOnChangeTab (){}
function actionOnSubmit (): Promise<string>{
  return new Promise(resolve => resolve("Hello"));
}
function actionOnClear (){}
//function submitCodeRef1 (){}
import React from "react"

//'MutableRefObject<EvalCodeFunction>'.
//const submitCodeRef = submitCodeRef1;//React.MutableRefObject<EvalCodeFunction>(submitCodeRef1);
import { useRef } from 'react';

//// Make sure you assign your function to submitCodeRef.current somewhere


const GeneralPurposeReplUI = () => {
  const submitCodeRef = useRef<EvalCodeFunction|undefined>(undefined); 
  submitCodeRef.current = actionOnSubmit;
    return  (
    <ReactReplView
      title={`My Awesome Repl!`}
      tabs={["Javascript", "Python"]}
      selectedTab="Javascript"
      onChangeTab={actionOnChangeTab}
      onSubmit={actionOnSubmit}
      submitCodeRef={submitCodeRef}
      onClear={actionOnClear}
      height={200}
      lines={[
        { type: "input", value: "obj = { something: 2 }" },
        { type: "output", value: '{ "something": 2 }' },
        { type: "input", value: "b" },
        { type: "error", value: "TypeError: b is not defined" },
      ]}
    />
  )
}
export default GeneralPurposeReplUI;

