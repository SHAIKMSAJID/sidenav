import { Box } from "@mui/material";
import React from "react";
import Sidenav from "../Sidenav";

export default function Admin() {
  return (
    <>
      <Box sx={{ display: " flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Admin</h1>
        </Box>
      </Box>
    </>
  );
}
