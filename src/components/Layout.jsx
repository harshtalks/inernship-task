import { Box } from "@mui/system";
import { useState } from "react";
import Annonations from "./Annonations";
import Content from "./Content";

import Records from "./Records";

const Layout = ({ records }) => {
  const [record, setRecord] = useState(false);
  return (
    <Box
      sx={{
        backgroundColor: "#1011",
        width: "100%",
        height: "100vh",
        padding: "4rem 2rem",
        display: "flex",
        gap: "10px",
      }}
    >
      <Records records={records} record={record} setRecord={setRecord} />
      <Content records={records} record={record} />
      <Annonations records={records} record={record} />
    </Box>
  );
};

export default Layout;
