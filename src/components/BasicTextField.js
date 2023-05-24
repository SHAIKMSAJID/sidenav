import * as React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import Gender from "./Gender";

export default function BasicTextFields() {
  return (
    <Stack spacing={2} direction="column" width={300}>
      <h4>Personal Details</h4>
      <TextField
        id="outlined-basic"
        label="Full Name"
        type="text"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Father Name"
        type="text"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Mother Name"
        type="text"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Date of Birth"
        type="text"
        format="dd-mm-yyyy"
        variant="outlined"
      />
    </Stack>
  );
}
