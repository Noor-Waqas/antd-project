import { Button, Table, Modal } from "antd";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Index = () => {
  const [EditData, setEditData] = useState(false);
  const [dataSoruse, setdataSoruse] = useState([
    {
      id: 1,
      name: "waqas",
      email: "wali@gmail.com",
      address: "Green Town Lahore",
    },
    {
      id: 2,
      name: "Abbas",
      email: "Abbas@gmail.com",
      address: "Green Town Lahore",
    },
    {
      id: 3,
      name: "Yasir",
      email: "Yasir@gmail.com",
      address: "Ali Town Lahore",
    },
    {
      id: 4,
      name: "Laiba Noor",
      email: "Laiba321@gmail.com",
      address: "Joher Town Lahore",
    },
  ]);
  const colum = [
    {
      key: "1",
      title: "id",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: " Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: " Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: " Acctions ",
      render: (record) => {
        return (
          <>
            <DeleteOutlined
              onClick={() => {
                deleteHandelButton(record);
              }}
              style={{ margin: "5px", color: "blue" }}
            />
            <EditOutlined
              style={{ margin: "5px", color: "red" }}
              onClick={() => {
                onEditHandel(record);
              }}
            />
            <Link to={"/"}>
              <HomeOutlined
                style={{ textDecoration: "none", color: "green" }}
              />
            </Link>
          </>
        );
      },
    },
  ];
  const onAddStudents = () => {
    const RandumNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      // auto genarate
      id: RandumNumber,
      name: "name" + RandumNumber,
      email: RandumNumber + "@gmail.com",
      address: "Address" + RandumNumber,
    };
    setdataSoruse((pre) => {
      return [...pre, newStudent];
    });
    alert("Successfully Adding Data :");
  };

  const deleteHandelButton = (record) => {
    Modal.confirm({
      title: "Yasir: Are you sure, you want to delete this record?",
      okText: "yes",
      okType: "danger",
      onOk: () => {
        setdataSoruse((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditHandel = (record) => {
    setEditData(true);
  };
  return (
    <div>
      <h3>Students Details</h3>

      <Button
        onClick={onAddStudents}
        style={{
          marginBottom: "5px",
          marginRight: "auto",
          display: "flex",
          marginTop: "4px",
        }}
      >
        Create New +
      </Button>
      <Table columns={colum} dataSource={dataSoruse}></Table>
      <Modal
        title="Edit Students"
        visible={EditData}
        okText="Save"
        // onCancel={setEditData(true)}
        onOk={() => {
          setEditData();
        }}
      ></Modal>
    </div>
  );
};

export default Index;
