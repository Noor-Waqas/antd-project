import { Button, Table} from "antd";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Excel } from "antd-table-saveas-excel";
import { CSVLink, CSVDownload } from "react-csv";


const PrintIndex = () => {
  const pdf = useRef();
  const printFuncation=useRef();


  const dataSource = [
    {
      key: "1",
      name: "Waqas Ahmad",
      age: 24,
      address: "Town Ship",
    },
    {
      key: "2",
      name: "Khawar",
      age: 38,
      address: "green town ",
    },
  ];
  const columns = [
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
  ];
  // pdf convert funcation
  const pdfHandelButton = useReactToPrint({
    content: () => pdf.current,
    documentTitle: "PDF",
    // onAfterPrint: () => toast("PDF Successfully Save"),
  });

  // excel form download funcationality
  const handleClick = () => {
    const excel = new Excel();
    excel
      .addSheet("test")
      .addColumns(columns)
      .addDataSource(dataSource, {
        str2Percent: true
      })
      .saveAs("Excel.xlsx");
      toast("Excel Successfully Save")
  };

  // print funcationality 
const printData=useReactToPrint({
  content:()=>printFuncation.current,
  documentTitle:"student data",
  // onAfterPrint: () => alert("Print Successfully "),
})
  return (
    <div ref={printFuncation}  style={{width:"100%",height:window.innerHeight}}  >
      <h1 style={{ marginTop: "3rem",textAlign:"center" }}>Student Table</h1>
      <div ref={pdf} style={{ width: "100%" }}>
        <Table
          style={{ justifyContent: "center", justifyItems: "center" }}
          dataSource={dataSource}
          columns={columns}
        />
      </div>
      <div style={{ width: "100%", background: "white", margin: "auto" }}>
        <Button
          type="primary"
          style={{ background: "#c3687b", color: "white",margin:"50px" }}
           onClick={printData}
        >
          PRINT
        </Button>




        <Button
          style={{ background: "#c3687b", color: "white",margin:"50px"}}
          onClick={pdfHandelButton}
        >

             PDF
       
        </Button>



        
        <Button style={{ background: "#c3687b", color: "white",margin:"50px" }}
          onClick={handleClick}
        
        >

          Excel
        </Button>

        <CSVLink data={dataSource} >
          <Button style={{ background: "#c3687b", color: "white",margin:"50px" }}>download CSV</Button>
        </CSVLink>

       {/* or  */}

        {/* <CSVDownload data={csvData} target="_blank" /> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default PrintIndex;
