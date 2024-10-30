// from https://github.com/seamapi/react-repl/blob/main/src/ReactReplJS.js
// converted with https://js2ts.com 

import React, { useState, useEffect, FC } from "react"
import {ReactReplView    } from "./ReactReplView"
//import useReactReplJS from "./useReactReplJS"
import prettyFormat from "pretty-format"

const AsyncFunction: FunctionConstructor = Object.getPrototypeOf(async function () {}).constructor

export type Scope={
    name: string    
};

function scopeEval(scope: Scope, script: string): Promise<Scope> {
  script = script
    .trim()
    .replace(/^var /, "")
    .replace(/^let /, "")
    .replace(/^const /, "")
  return AsyncFunction("return (" + script + ")").bind(scope)()
}

export type Value=string;
export type LinesT = LineT[];

export type ReactReplPropsT = {
  title?: string;
  stealFocus?: boolean;
  tabs?: string[];
  selectedTab?: string;
  //onChangeTab: (tab: string) => void;
  onClear?: () => void;
  //onSubmit: (input: string) => void;
  submitCodeRef?: React.RefObject<(execLine: string) => Promise<void>>;
  lines: LinesT;
  initialLines?: LinesT;
  initiallyExecute?: string[];
  height: number;
};

async function execAndGetLine(execLine: string): Promise<LineT> {
   if (!execLine.trim()) return { type: "error", value: "Empty"}
   try {
     const evalOutput = await scopeEval(window, execLine)
     return { type: "output", value: prettyFormat(evalOutput) }
   } catch (e) {
       return { type: "error", value: JSON.stringify(e) }
   }
 }

export interface LineT {
    type: 'input' | 'output' | 'error';
    value: string;
}

export type FCReactReplPropsT = FC<ReactReplPropsT>;
    
// interface ReactReplJSProps {
//   title?: string;
//   tabs?: string[];
//   selectedTab?: string;
// //  onChangeTab?: (tab: string) => void;
//   initialLines?: Lines //Array<{ type: string; value: string }>;

//   height?: string | number;

// }

export const ReactReplJS: FCReactReplPropsT = ({
  title,
  tabs,
  selectedTab,
//  onChangeTab,
    initialLines = [],
  initiallyExecute = [],
  height,
//  submitCodeRef = null,
}) => {
  const [lines, setLines] = useState<LinesT>(initialLines)

  // const onSubmit = async (execLine: string) => {
  //   const newLines = lines.concat([{ type: "input", value: execLine }])
  //   setLines(newLines)
  //   if (!execLine.trim()) return
  //   setLines(newLines.concat([await execAndGetLine(execLine)]))
  // }

    //if (submitCodeRef) submitCodeRef.current = onSubmit

  useEffect(() => {
    ;(async () => {
      if (initiallyExecute.length === 0) return
      const lines: LinesT = []
      for (const execLine of initiallyExecute) {
        lines.push({ type: "input", value: execLine })
        if (!execLine.trim()) continue
        lines.push(await execAndGetLine(execLine))
      }
      setLines(lines)
    })()
  }, [])

  return (
    <ReactReplView
      title={title}
      tabs={tabs || ["Javascript"]}
      selectedTab={selectedTab || "Javascript"}
//      onChangeTab={onChangeTab}
      //onSubmit={onSubmit}
      height={ Number(height)}
      lines={lines}
      onClear={() => setLines([])}
    />
  )
}

//export { ReactReplView, useReactReplJS }

//export default ReactReplJS

//function ReactReplView2(args: ReactReplJSPropsT);
