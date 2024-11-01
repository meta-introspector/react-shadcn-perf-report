// "use client";
// from https://github.com/seamapi/react-repl/blob/main/src/ReactReplJS.js
// converted with https://js2ts.com 
import React, { useState, useEffect, FC } from "react";
import { useReactReplJS } from "./useReactReplJS"
import { ReactRepl    } from "./ReactReplView";
import { Scope, LineT, LinesT, FCReactReplPropsT, ReactReplPropsT    } from "./types";

import prettyFormat from "pretty-format"

const AsyncFunction: FunctionConstructor = Object.getPrototypeOf(async function () {}).constructor

function scopeEval(scope: Scope, script: string): Promise<Scope> {
  script = script
    .trim()
    .replace(/^var /, "")
    .replace(/^let /, "")
    .replace(/^const /, "")
  return AsyncFunction("return (" + script + ")").bind(scope)()
}

async function execAndGetLine(execLine: string): Promise<LineT> {
   if (!execLine.trim()) return { type: "error", value: "Empty"}
   try {
     const evalOutput = await scopeEval(window, execLine)
     return { type: "output", value: prettyFormat(evalOutput) }
   } catch (e) {
       return { type: "error", value: JSON.stringify(e) }
   }
 }

export const ReactReplJS: FCReactReplPropsT = (args: ReactReplPropsT) => {
  const title=args.title
  const tabs=args.tabs
  const selectedTab=args.selectedTab
  const onChangeTab=args.onChangeTab
  const initialLines = args.initialLines
  const initiallyExecute =args.initiallyExecute
  const  height=args.height
  const submitCodeRef = args.submitCodeRef
  
  const [lines, setLines] = useState<LinesT|undefined>(initialLines)

  const onSubmit = async (execLine: string) => {
    if (lines) {
     const newLines = lines.concat([{ type: "input", value: execLine }])
     setLines(newLines)
     if (!execLine.trim()) return
      setLines(newLines.concat([await execAndGetLine(execLine)]))
    }
   }

  if (submitCodeRef) submitCodeRef.current = onSubmit;

  useEffect(() => {
    ;(async () => {
      
      if (initiallyExecute) {
	if (initiallyExecute.length === 0) return
	const lines: LinesT = []
	for (const execLine of initiallyExecute) {
          lines.push({ type: "input", value: execLine })
          if (!execLine.trim()) continue
          lines.push(await execAndGetLine(execLine))
	}
	setLines(lines)
      }
    })()
  }, [])

  return (
  <div> Test1
    <ReactRepl
      title={title}
      tabs={tabs || ["Javascript"]}
      selectedTab={selectedTab || "Javascript"}
      onChangeTab={onChangeTab}
      onSubmit={onSubmit}
      height={ Number(height)}
      lines={lines}
      onClear={() => setLines([])}
    />
    </div>
  )
}

export { ReactRepl, useReactReplJS }

export default ReactReplJS
