import { Box } from "@mui/material";
import React from "react";
import Sidenav from "../Sidenav";

export default function Student() {
  return (
    <>
      <Box sx={{ display: " flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Student</h1>
        </Box>
      </Box>
    </>
  );
}
