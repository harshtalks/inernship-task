import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Record = ({ data, setRecord, record }) => {
  return (
    <Typography
      onClick={() => {
        setRecord(data.id);
      }}
      sx={{
        borderBottom: "1px solid black",
        padding: "10px 8px",
        background: record === data.id && "#FFC0CB",
        cursor: "pointer",

        "&: hover": {
          background: "#FFC0CB",
        },
      }}
      noWrap
    >
      <span>{data.id + 1}.</span> {data.content}
    </Typography>
  );
};

const Records = ({ records, record, setRecord }) => {
  return (
    <Box sx={{ width: "30%", border: "1px solid black", overflow: "auto" }}>
      <Typography
        align="center"
        variant="h6"
        sx={{ background: "#FF6978", color: "white", padding: "5px 0" }}
      >
        Records
      </Typography>
      {records.map((el) => {
        return (
          <Record key={el.id} data={el} setRecord={setRecord} record={record} />
        );
      })}
    </Box>
  );
};

export default Records;
