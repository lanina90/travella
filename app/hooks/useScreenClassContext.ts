import {useContext} from "react";
import {ScreenClassContext} from "../providers/ScreenClassContextProvider/ScreenClassContext";


function useScreenClassContext() {
  return useContext(ScreenClassContext);
}

export default useScreenClassContext;