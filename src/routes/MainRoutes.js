import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DatePick from "../component/DatePick";
import SpingButton from "../component/SpingButton";
import ProgressButton from "../component/ProgressButton";
import TableRowAndColum from "../tabledata12video/TableRowAndColum";
import Crud from "../component/crudAntD/Index";
import Sureaching from "../component/suerchData/Sureaching";
import FormValidation from "../component/formValidation/FormValidation";
import AntdGridSyatem from "../component/AntdGridSyatem";
import Navbar from "../component/navbar/Navbar";
import ClockCountry from "../component/ClockCountry";
import LoginPage from "../component/LoginPage";
import TippyToolkit from "../component/Toolkit/TippyToolkit";
import ProjectTextAreaAntd from "../component/MianConceptOfProject/ProjectTextAreaAntd";
import StudentsTable from "../component/tableCrud/StudentsTable";
import PrintIndex from "../component/printfuncation/PrintIndex";
const MainRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<DatePick />} />
            <Route path="/spin" element={<SpingButton />} />
            <Route path="/progress" element={<ProgressButton />} />
            <Route path="/table" element={<TableRowAndColum />} />
            <Route path="/crud" element={<Crud />} />
            <Route path="/surch" element={<Sureaching />} />
            <Route path="/form" element={<FormValidation />} />
            <Route path="/grid" element={<AntdGridSyatem />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/clocks" element={<ClockCountry />} />
            <Route path="/tippy" element={<TippyToolkit />} />
            <Route path="/textarea" element={<ProjectTextAreaAntd />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/tableStd" element={<StudentsTable />} />
            <Route path="/print" element={<PrintIndex />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRoutes;
