import { Button } from "antd";
import React from "react";
import "../Toolkit/tippy.css";
import "react-tippy/dist/tippy.css";
// import Tippy from "@tippy.js/react";
import { Tooltip, Tippy } from "react-tippy";

const TippyToolkit = () => {
  return (
    <div>
      <h1>tippy Tool tip </h1>
      <div>
        {/* <Tippy content="hellow">
          <Button>Tippy</Button>
        </Tippy> */}
        <Tooltip
          // options
          title="Welcome to Waqas Game System"
          position="top"
          trigger="click"
        >
          <Button>Tippy</Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default TippyToolkit;
