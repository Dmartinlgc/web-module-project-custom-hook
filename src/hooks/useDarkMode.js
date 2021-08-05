import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = (() =>{
   const [modeValue, setModeValue] = useLocalStorage('dark-mode')
   
   return([modeValue,setModeValue]) 
   
})
export default useDarkMode