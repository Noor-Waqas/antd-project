import { Button, Table, Tag } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TableRowAndColum = () => {
  const [readySelector, setAllreadySelector] = useState(["1", "4"]);
  const colum = [
    {
      title: "student ID",
      dataIndex: "id",
    },
    {
      title: "student Name",
      dataIndex: "name",
    },
    {
      title: "student Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "green"
          : tag.includes("B")
          ? "red"
          : "blue";
        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
  ];
  const dataSoruse = [
    {
      key: "1",
      id: 1,
      name: "waqas",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Abbas",
      grade: "B",
    },
    {
      key: "3",
      id: 3,
      name: "Ashfaq",
      grade: "B",
    },
    {
      key: "4",
      id: 4,
      name: "Azam",
      grade: "C",
    },
    {
      key: "5",
      id: 5,
      name: "Aysha",
      grade: "D",
    },
  ];
  return (
    <div>
      <Table
        columns={colum}
        dataSource={dataSoruse}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: readySelector,
          onChange: (keys) => {
            setAllreadySelector(keys);
          },
          // disable
          getCheckboxProps: (rec) => ({
            // disabled:rec.grade==='C',
          }),
          onSelect: (record) => {
            console.log({ record });
          },
          // hideSelectAll:true,

          // selectoin
          selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_NONE,
            Table.SELECTION_INVERT,
          ],
        }}
      ></Table>
      <Link to={"/"}>
      <Button>Back</Button></Link>
    </div>
  );
};

export default TableRowAndColum;
