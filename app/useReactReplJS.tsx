// from https://github.com/seamapi/react-repl/blob/main/src/useReactReplJS.js
// converted with https://js2ts.com 

import React, { useMemo
		//, useRef
	      } from "react"
import { ReactReplJS } from "./ReactReplJS"
//import type ReactReplPropsT from "./ReactReplView"

// type SomeProp= {
//     name: string    
// };
// interface ReactReplProps {
//   [key: string]: SomeProp;
// }

function submit_job (props: ReactReplPropsT): JSX.Element {
    return <ReactReplJS {...props} submitCodeRef={submitCodeRef} />
}
function submit_code (code: string): Promise<void>{
    if (submitCodeRef.current) {
        submitCodeRef.current(code)
    }
}
export const useReactReplJS = () => {
    //const submitCodeRef = useRef<((code: string) => Promise<void>) | null>(null)

  return useMemo(
    () => ({
      ReactRepl: submit_job,
      submitCode: submit_code,
    }),
    []
  )
}

export default useReactReplJS
