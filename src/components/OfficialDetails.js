import * as React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import Gender from "./Gender";

export default function OfficialDetails() {
  return (
    <Stack spacing={2} direction="column" width={300}>
      <h4>Official Details</h4>
      <TextField
        id="outlined-basic"
        label="Admission Number"
        type="number"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Joining Date"
        type="text"
        variant="outlined"
      />

      <TextField
        id="outlined-basic"
        label="Roll Number"
        type="number"
        variant="outlined"
      />

      <TextField
        id="outlined-basic"
        label="Official Email"
        type="email"
        variant="outlined"
      />
    </Stack>
  );
}
