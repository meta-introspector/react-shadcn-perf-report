// from https://github.com/seamapi/react-repl/blob/main/src/useReactReplJS.js
// converted with https://js2ts.com 

import React, { useMemo, useRef } from "react"
import { ReactReplJS } from "./ReactReplJS"
import type { EvalCodeFunction } from "./ReactReplJS"

import { ReactReplPropsT } from "./ReactReplJS"

export const useReactReplJS = () => {
  const submitCodeRef = useRef<EvalCodeFunction>()

  function submit_job (props: ReactReplPropsT): JSX.Element {
    return <ReactReplJS {...props} submitCodeRef={submitCodeRef} />
  }
  function submit_code (code: string): Promise<string>{
    if (submitCodeRef.current) {
      submitCodeRef.current(code)
    }
    return new Promise(resolve => resolve("Hello"));
  }
  return useMemo(
    () => ({
      ReactRepl: submit_job,
      submitCode: submit_code,
    }),
    []
  )
}

export default useReactReplJS
