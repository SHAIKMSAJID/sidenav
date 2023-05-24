import { Box } from "@mui/material";
import React from "react";
import Sidenav from "../Sidenav";
import BoxRow from "./BoxRow";

export default function Home() {
  return (
    <>
      <Box sx={{ display: " flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <BoxRow />
        </Box>
      </Box>
    </>
  );
}
