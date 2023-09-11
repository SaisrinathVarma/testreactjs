import React, { Component } from "react";

export class Styling extends Component {
  render() {
    const main={
        color:"blue",
        fontWeight :"bold"
    };
    return (
      <>
        <div className="mani1">
          <h1>Postal servicce</h1>
        </div>

        <div id="mani2">
          <h1>Postal application</h1>
        </div>
        <div style={main}>
          <h1>Postal Instuituition</h1>
        </div>
        <div>
          <h2>Postal technology</h2>
        </div>
        <div style={{ color: "blue", fontSize: 20 }}>
          <h1>Postal employee</h1>
        </div>
        

      
      </>
    );
  }
}

export default Styling;
