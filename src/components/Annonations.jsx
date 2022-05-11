import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeAnnonation } from "../app/dataSlice";

const Annonations = ({ records, record }) => {
  const [annonationsObj] = records.filter((el) => el.id === record);
  const annonations = annonationsObj && annonationsObj.annonations;
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "30%", border: "1px solid black", overflow: "auto" }}>
      <Typography
        align="center"
        variant="h6"
        sx={{ background: "#FF6978", color: "white", padding: "5px 0" }}
      >
        Annonations
      </Typography>
      {annonations &&
        annonations.map((el) => {
          return (
            <Box
              key={el.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 20px",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
                {el.selectedWords}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                {el.type[0].toUpperCase() + el.type.slice(1)}
              </Typography>
              <CloseIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(removeAnnonation({ record: record, id: el.id }));
                }}
                color="primary"
              />
            </Box>
          );
        })}
    </Box>
  );
};

export default Annonations;
