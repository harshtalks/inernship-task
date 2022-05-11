import * as React from "react";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Button } from "@mui/material";

export default function Toggle({ annonationType, setAnnonationType }) {
  return (
    <div
      style={{
        background: "#FF6978",
        padding: "5px 20px",
        display: "flex",
        gap: "1em",
      }}
    >
      <Button
        onClick={() => setAnnonationType("person")}
        sx={{
          color: annonationType === "person" ? "#FF6978" : "white",
          border: "1px solid white",
          background: annonationType === "person" ? "white" : "none",
          "&:hover": {
            color: "white",
          },
        }}
      >
        Person
      </Button>
      <Button
        onClick={() => setAnnonationType("org")}
        sx={{
          color: annonationType === "org" ? "#FF6978" : "white",
          border: "1px solid white",
          background: annonationType === "org" ? "white" : "none",
          "&:hover": {
            color: "white",
          },
        }}
      >
        Org
      </Button>
    </div>
  );
}
