import React, { useReducer, createContext, useEffect } from "react";
import axios from 'axios';
import "./assets/stylesheets/base.css";
import reducer from "./reducers";
import { initialState } from "./reducers";
import Loader from "./components/loader"
import Routers from "./routes"


export const ContainerContext = createContext(initialState);

const Container = () => {
  const API = "https://script.google.com/macros/s/AKfycbwKAT11jZmYEH-Xbm-dc0OL2GeB36i7oFYQupxPMP5qMRTzmXB8/exec";

  // 1. initialState for implementing useReducer initial data
  // 2. dispatch (run function reducer with parameter)
  // 3. reducer (function reducer read parameter from dispatch and return new value)
  // 4. state (read function reducer)
  const [state, dispatch] = useReducer(reducer, initialState);

  let headersConfig = {
    headers: {'Access-Control-Allow-Origin': '*'}
  }

  useEffect(async () => {
    const data = await axios.get(API, headersConfig)
          .then(resp => resp.json())
          .then(json => json.data);
    dispatch({ type: "fetching", data });
  }, []);

  console.log([state, dispatch])
  return (
    <ContainerContext.Provider value={[state, dispatch]}>
      {state.loader ? <Loader /> : null}
      <Routers />
    </ContainerContext.Provider>
  );
};

export default Container;
