import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const DatePick = () => {
  return (
    <div>
      <hr />

      <h1>Shadow App</h1>
      <div>
        <p>
          A strong feeling of warm personal attachment or deep affection such as
          for a parent child friend or pet. He bent and kissed his newborn
          daughter on the brow his heart full of love and gratitude.
        </p>
      </div>
      <hr />

      {/* <DatePicker />
      <br />
      <TimePicker /> */}
      <h4 style={{ color: "white" }}>Menu</h4>
      {/* <DatePicker.RangePicker picker="month"  /> */}

      <hr />

      <Link to={"/table"}>
        <Button style={{ margin: "4px" }}> Table </Button>
      </Link>
      <Link to={"/crud"}>
        <Button style={{ margin: "4px" }}> Crud In AntD </Button>
      </Link>
      <Link to={"/surch"}>
        <Button style={{ margin: "4px" }}> Surch Modules </Button>
      </Link>
      <Link to={"/form"}>
        <Button style={{ margin: "4px" }}>Form Validation In AntG </Button>
      </Link>
      <Link to={"/grid"}>
        <Button style={{ margin: "4px" }}>Grid System In AntG </Button>
      </Link>

      <Link to={"/navbar"}>
        <Button style={{ margin: "4px" }}>Navbar</Button>
      </Link>

      <Link to={"/clocks"}>
        <Button style={{ margin: "4px" }}>Go to ClockCountry </Button>
      </Link>

      <Link to={"/Tippy"}>
        <Button style={{ margin: "4px" }}>Tippy Toolkit </Button>
      </Link>

      <Link to={"/textarea"}>
        <Button style={{ margin: "4px" }}>Text Area AntD </Button>
      </Link>

      <Link to={"/login"}>
        <Button style={{ margin: "4px" }}>Login Page </Button>
      </Link>

      <Link to={"/tableStd"}>
        <Button style={{ margin: "4px" }}>Students  Table</Button>
      </Link>
      <Link to={"/print"}>
        <Button style={{ margin: "4px" }}>Print Table </Button>
      </Link>
      <br />

      <hr />
    </div>
  );
};

export default DatePick;
