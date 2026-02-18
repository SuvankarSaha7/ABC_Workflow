import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Workflow from "./components/Dashboard/Workflow/Workflow";
import Entitlement from "./components/Dashboard/Entitlement/Entitlement";
import Policy from "./components/Dashboard/Policy/Policy";
import Spocs from "./components/Dashboard/Spocs/Spocs";
import Approver from "./components/Dashboard/Approver/Approver";
import DivisionPage from "./components/Dashboard/DivisionPage/DivisionPage";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/workflow" element={<Workflow/>}/>
          <Route path="/entitlement" element={<Entitlement/>}/>
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/spocs" element={<Spocs/>}/>
          <Route path="/approver" element={<Approver/>}/>
          <Route path="/:division" element={<DivisionPage/>}/>

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
