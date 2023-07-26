import React, {useState} from "react";
import Statecontext from "./Statecontext";


const Statemange = (props) => {

  return (
  <>
  <Statecontext.Provider>
   {props.children}
  </Statecontext.Provider>
  </>
  )
}

export default Statemange