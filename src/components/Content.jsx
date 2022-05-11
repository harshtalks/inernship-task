import { Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import React, { useEffect, useState } from "react";
import Toggle from "./Toggle";
import Highlighter from "react-highlight-words";
import { useDispatch } from "react-redux";
import { addAnnonations } from "../app/dataSlice";
const highlightClass = {
  backgroundColor: "#BFDBF7",
  padding: "5px 10px",
  position: "relative",
};

const Content = ({ record, records, annonations, setAnnonations }) => {
  const dispatch = useDispatch();
  const [annonationType, setAnnonationType] = useState("person");
  useEffect(() => {
    console.log(records);
  }, [records]);
  return (
    <Box sx={{ width: "40%", border: "1px solid black", overflow: "auto" }}>
      <Toggle
        annonationType={annonationType}
        setAnnonationType={setAnnonationType}
      />

      {records
        .filter((el) => el.id === record)
        .map((el) => (
          <Typography
            key={el.id}
            sx={{ margin: "1em", lineHeight: "2" }}
            onMouseUp={() => {
              const selection = window.getSelection().toString();
              if (selection && selection !== " ") {
                dispatch(
                  addAnnonations({
                    id: el.id,
                    annonationObj: {
                      id: new Date().toISOString(),
                      selectedWords: selection,
                      type: annonationType,
                    },
                  })
                );
              }
            }}
          >
            <Highlighter
              highlightStyle={highlightClass}
              searchWords={el.annonations.map((item) => item.selectedWords)}
              autoEscape={true}
              caseSensitive={false}
              textToHighlight={el.content}
            />
          </Typography>
        ))}
    </Box>
  );
};

export default Content;
