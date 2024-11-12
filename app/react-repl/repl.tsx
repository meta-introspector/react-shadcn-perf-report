"use client";
//declare module 'awesome-react-repl';
//import './awesome-react-repl';
//import type { ReactReplJS } from './ReactReplJS';
import { ReactReplJS } from "./ReactReplJS"
import { useReactReplJS } from "./useReactReplJS"
import type {  EvalCodeFunction } from "./ReactReplTypes"
import { ReactRepl } from "./ReactReplView"
function actionOnChangeTab (){}
function actionOnSubmit (): Promise<void>{
  //console.log("submit");
  return new Promise(resolve => {
    //console.log("resolve");
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
  
  return  (
    <ReactRepl
      title={`test Repl!`}
      height={600}

      // TODO: FIXME: and long term ideas that are out of scope :)
      // generate and use graphql
      // generate and use sparql
      // visualize rdf graphs, tables, charts,
      // each line is like a notebook
      // save lines jupyter notebook
      // save and name files
      // select recent files
      // view recent runs
      // report writer
      // scheduling system
      // storage system
      // filter and browse functions
      // classify functions
      // pull in all runs from github actions, gitlab, aws batch etc
      // profile code
      // populate select box with query, like msacess
      // model building interactivly
      // translate code into something easier profiled
      // instrument code
      // view profile
      // copy and paste
      // split into chunks
      // send to port
      // connect port between browser windows
      // send to another app or chat window on android.
      // send to llm
      // generate and test js snippet with llm and browser

      
    />
  )
}
export default GeneralPurposeReplUI;

