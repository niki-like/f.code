import React from "react";
import { Routes, Route } from "react-router";

import Main from "./main";
import Title from "./title/title";
import P2 from "./p2/p2";
import P3 from "./p3/p3";
import NF from "./pNF/nf";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        
        <Routes>
            <Route path="/" element={<Main />} >
                <Route index element={<Title/>} />
                <Route path="rule" element={<P2/>} />
                <Route path="prise" element={<P3/>} />
                <Route path="*" element={<NF/>} />
            </Route>
        </Routes>
      </>
    );
  }
}
export default App;
