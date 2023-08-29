import { Button, Input, Table } from "antd";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sureaching = () => {
  
  const [dataSource, setDataSource] = useState([
    {
      name: "Waqas Ahmad",
      age: 21,
      address: "Green Town Lahore",
    },
    {
      name: "Ahmad",
      age: 20,
      address: "Lahore",
    },
    {
      name: "Laiba",
      age: 22,
      address: "Mutan",
    },
    {
      name: "Sima Ali",
      age: 19,
      address: "Karchi",
    },
    {
      name: "Abbas",
      age: 25,
      address: "Wapda Town",
    },
    {
      name: "Kheel",
      age: 20,
      address: "Pk Lahore",
    },
  ]);
  const colum = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKey,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Text Searching "
              value={selectedKey}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            />
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
              style={{ marginTop: "5px", marginBottom: "10px" }}
            >
              Search
            </Button>
            {/* clear funcationality */}
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="dashed"
              //   style={{ marginTop: "5px", marginBottom: "10px" }}
            >
              Clears
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      //   filterDropdown: ({
      //     setSelectedKeys,
      //     selectedKey,
      //     confirm,
      //     clearFilters,
      //   }) => {
      //     return (
      //       <>
      //         <Input
      //           autoFocus
      //           placeholder="Text Searching "
      //           value={selectedKey}
      //           onChange={(e) => {
      //             setSelectedKeys(e.target.value ? [e.target.value] : []);
      //             confirm({ closeDropdown: false });
      //           }}
      //           onPressEnter={() => {
      //             confirm();
      //           }}
      //           onBlur={() => {
      //             confirm();
      //           }}
      //         />
      //         <Button
      //           onClick={() => {
      //             confirm();
      //           }}
      //           type="primary"
      //           style={{ marginTop: "5px", marginBottom: "10px" }}
      //         >
      //           Search
      //         </Button>
      //         {/* clear funcationality */}
      //         <Button
      //           onClick={() => {
      //             clearFilters();
      //           }}
      //           type="dashed"
      //           //   style={{ marginTop: "5px", marginBottom: "10px" }}
      //         >
      //           Clears
      //         </Button>
      //       </>
      //     );
      //   },
      //   filterIcon: () => {
      //     return <SearchOutlined />;
      //   },
      //   onFilter: (value, record) => {
      //     return record.age == value;
      //   },
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Searching funcationality</h2>

      <Link to={"/"}>
        <Button> Back </Button>
      </Link>
      <Table columns={colum} dataSource={dataSource}></Table>
    </div>
  );
};

export default Sureaching;
