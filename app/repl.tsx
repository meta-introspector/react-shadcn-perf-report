"use client";
//declare module 'awesome-react-repl';
//import './awesome-react-repl';
//import type { ReactReplJS } from './ReactReplJS';
import { EvalCodeFunction } from "./ReactReplJS"
import { ReactReplView } from "./ReactReplView"
function actiononChangeTab (){}
function actiononSubmit (){}
function actiononClear (){}
//function submitCodeRef1 (){}
import React from "react"

//'MutableRefObject<EvalCodeFunction>'.
//const submitCodeRef = submitCodeRef1;//React.MutableRefObject<EvalCodeFunction>(submitCodeRef1);
import { useRef } from 'react';



//// Make sure you assign your function to submitCodeRef.current somewhere
//submitCodeRef.current = actiononSubmit;

const GeneralPurposeReplUI = () => {
    const submitCodeRef = useRef<EvalCodeFunction|undefined>(null); // allow null
    return  (
    <ReactReplView
      title={`My Awesome Repl!`}
      tabs={["Javascript", "Python"]}
      selectedTab="Javascript"
      onChangeTab={actiononChangeTab}
      onSubmit={actiononSubmit}
      submitCodeRef={submitCodeRef}
      onClear={actiononClear}
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

