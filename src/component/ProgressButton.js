import { Progress } from "antd";
import React from "react";

const ProgressButton = () => {
  return (
    <div>
      <Progress percent={72}></Progress>
      <Progress percent={72} type="circle"></Progress>
    </div>
  );
};

export default ProgressButton;
