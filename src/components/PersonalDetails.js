import * as React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import Gender from "./Gender";

export default function PersonalDetails() {
  return (
    <Stack spacing={2} direction="column" width={300}>
      {/* <h1>Personal Details</h1> */}

      <Gender />
      <TextField
        id="outlined-basic"
        label="Blood Group"
        type="text"
        variant="outlined"
      />

      <TextField
        id="outlined-basic"
        label="Aadhar No"
        type="number"
        variant="outlined"
      />

      <TextField
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Mobile No"
        type="number"
        variant="outlined"
      />
    </Stack>
  );
}
