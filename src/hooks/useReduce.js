import { useReducer } from "react"
const reducer = (mode, action) => {
   if (action.type === 'TOGGLE_MODE') {
      return { lightMode: !mode.lightMode }
   }
}
const defaultMode = {
   lightMode: true
}
export const useReduce = () => {
   const [mode, dispatch] = useReducer(reducer, defaultMode)
   return { mode, dispatch }
}
