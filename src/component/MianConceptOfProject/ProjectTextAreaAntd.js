import React, { useState } from "react";
import { Button, Input } from "antd";
import "../MianConceptOfProject/ProjectTextAreaAntd.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CopyOutlined,
  ClearOutlined,
  AliwangwangOutlined,
  DeleteOutlined,
  ConsoleSqlOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { TextArea } = Input;

const ProjectTextAreaAntd = () => {
  const [text, settext] = useState("");

  const handelChangeText = (event) => {
    settext(event.target.value);
  };

  const handelconvertUperCase = () => {
    let newText = text.toUpperCase();
    settext(newText);
    toast("Converting UpperCase");
  };

  // claer text
  const handelClear = () => {
    let newText = "";
    settext(newText);
    toast("Clear Text");
  };

  // copy Text
  const handelCopyText = () => {
    var text = document.getElementById("mytextArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    toast("Copy Text");
  };

  // remove Extra text
  const handelExtraSpace = () => {
    let newText = text.split(/[  ]+/);
    settext(newText.join(" "));
    toast("Space Remove");
  };

  //darkmode color change
  const [buttonText, setbuttonText] = useState("Enable Dark Mode");

  const [darkColor, setdarkColor] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const handelDarkmood = () => {
    if (darkColor.color == "black") {
      setdarkColor({
        color: "white",
        backgroundColor: "black",
        // border:"2px solid white"
      });

      setbuttonText("Enable Light Mode");
      toast("Dark Mode Active");
    } else {
      setdarkColor({
        color: "black",
        backgroundColor: "white",
      });
      setbuttonText("Enable Dark Mode");
      toast("Light Mode Active");
    }
  };

  return (
    <div style={darkColor} className="mainDiv">
      <>
        <h3>Enter The Text Convert To UpperCase</h3>
        <TextArea
          style={darkColor}
          value={text}
          id="mytextArea"
          onChange={handelChangeText}
          rows={6}
          placeholder="Convert to upper case"
          // maxLength={6}
        />
        <Button style={darkColor} onClick={handelconvertUperCase}>
          <ConsoleSqlOutlined style={{ color: "red", fontSize: "16px" }} />
          Cunvert To
        </Button>
        <Button style={darkColor} onClick={handelClear}>
          <DeleteOutlined />
          Clear Text
        </Button>
        <Button style={darkColor} onClick={handelCopyText}>
          <CopyOutlined />
          Text Copy
        </Button>

        <Button style={darkColor} onClick={handelExtraSpace}>
          <ClearOutlined />
          Remove Extra Space
        </Button>

        {/* Dark mode Button  */}
        <Button style={darkColor} onClick={handelDarkmood}>
          <AliwangwangOutlined />
          {buttonText}
        </Button>
        <Link to={"/"}>
          <Button>Back To Home </Button>
        </Link>

        {/* <hr />
        <h4>Text Your Summery</h4>
        <p>
          Word : {text.split("").length} Characters: {text.length}
        </p>
        <p>Minutes read: {0.008 * text.split("").length} </p>
        <hr />
        <h4>Preview</h4>
        <p>{text}</p>
        <hr /> */}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </>
    </div>
  );
};

export default ProjectTextAreaAntd;
