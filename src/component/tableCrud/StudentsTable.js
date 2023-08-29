import React from "react";
import { Table, Button, Modal } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const StudentsTable = () => {
  const [table, setTable] = useState([]);
  const [EditData, setEditData] = useState(false);


  const students = async () => {
    const resp = await axios.get(
      "https://645f31759d35038e2d1e99e2.mockapi.io/crud"
    );
    console.log("====", resp);
    if (resp?.status == "200") {
      setTable(resp?.data);
    }
  };

  useEffect(() => {
    students();
  }, []);

  const deleteHandelButton = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this record?",
      okText: "yes",
      okType: "danger",
      onOk: () => {
        setTable((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };

  const updateHandelButton = async (record) => {
  
    try {
      const response = await fetch(`https://645f31759d35038e2d1e99e2.mockapi.io/crud/${record.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(record),
      });

      if (response?.ok) {

        students();
      } else {
        console.error('Error updating data:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };


  const viewHandelButton = () => {};
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <Button
            onClick={() => {
              deleteHandelButton(record);
            }}
            style={{ backgroundColor: "red", color: "white", margin: "2px" }}
          >
            Delete
          </Button>
          <Button
             onClick={() => {
              updateHandelButton(record);
            }}
            style={{ backgroundColor: "green", color: "white", margin: "2px" }}
          >
            Update
          </Button>
          <Button
            onClick={viewHandelButton}
            style={{ backgroundColor: "black", color: "white", margin: "2px" }}
          >
            View
          </Button>
        </>
      ),
    },
  ];
  return (
    <div style={{ backgroundColor: "white",borderRadius:"100px" }} className="container mt-4 border">
      <h1> Well To Students Records</h1>
      <Table
        dataSource={table}
        columns={columns}
        style={{ marginLeft: "100px" }}
      />
    </div>
  );
};

export default StudentsTable;
