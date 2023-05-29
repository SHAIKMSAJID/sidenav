import * as React from "react";
import { collection,addDoc } from 'firebase/firestore';
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageComponent from "../components/ImageComponent";
import {db} from '../config/firebase';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import ImageComponentOne from "../components/ImageComponentOne";
import ImageComponentTwo from "../components/ImageComponentTwo";
import ImageComponentThree from "../components/ImageComponentThree";
// import BasicTextFields from "../components/BasicTextField";
// import OfficialDetails from "../components/OfficialDetails";
// import PersonalDetails from "../components/PersonalDetails";
// import Gender from "../components/Gender";
// import age from "@mui/material";
import { useState } from "react";
import FileUpload from "../components/FileUplode";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function BoxRow() {
  const marginH1 = {
    margin: 0,
  };
  

  const handleGenderChange = (event) => {
    setselectedgender(event.target.value);
  };

  const handleBloodGroupChange = (event) => {
    setselectedbloodgroup(event.target.value);
  };
  const[newfirstName,setnewfirstName]= useState("");
  const[newlastName,setnewlastName]= useState("");
  const[newfatherName,setnewfatherName]= useState("");
  const[newmotherName,setnewmotherName]= useState("");
  const[newdateOfBirth,setnewdateOfBirth]= useState("");
  const[selectedgender,setselectedgender]=useState("");
  const[selectedbloodgroup,setselectedbloodgroup]=useState("");
  const[newaadharNo,setnewaadharNo]= useState("");
  const[newemail,setnewemail]= useState("");
  const[newmobileNo,setnewmobileNo]= useState("");
  const[newadmissionNumber,setnewadmissionNumber]= useState("");
  const[newjoiningDate,setnewjoiningDate]= useState("");
  const[newrollNumber,setnewrollNumber]= useState("");
 

  const [students] = useState([]);
  
  const usersCollectionRef = collection(db,"student");

  const studentForm = async () => {
    
    await addDoc(usersCollectionRef, {FirstsName:newfirstName,LastName:newlastName,Fathername:newfatherName,Mothername:newmotherName,DateofBirth:newdateOfBirth,Gender:selectedgender,BloodGroup:selectedbloodgroup,AadharNo:newaadharNo,Email:newemail,MobileNo:newmobileNo,Admissionno:newadmissionNumber,Joiningdate:newjoiningDate,Rollno:newrollNumber});
    alert("Successfully Noted!!");
  }


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Stack spacing={6}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 6, md: 12 }}
          >
            <Grid item xs={2} sm={3} md={3}>
              <Item>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <ImageComponent />
                  <Stack spacing={0} alignItems="center">
                    <h1 style={marginH1}>985</h1>
                    <h4 style={marginH1}>Students</h4>
                  </Stack>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Item>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <ImageComponentOne />
                  <Stack spacing={0} alignItems="center">
                    <h1 style={marginH1}>165</h1>
                    <h4 style={marginH1}>Faculty</h4>
                  </Stack>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Item>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-between"
                >
                  <ImageComponentTwo />
                  <Stack spacing={0} alignItems="center">
                    <h1 style={marginH1}>95</h1>
                    <h4 style={marginH1}>Subjects</h4>
                  </Stack>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <Item>
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-between"
                >
                  <ImageComponentThree />
                  <Stack spacing={0} alignItems="center">
                    <h1 style={marginH1}>25</h1>
                    <h4 style={marginH1}>Holidays</h4>
                  </Stack>
                </Stack>
              </Item>
            </Grid>
          </Grid>
          <Grid item xs={2} sm={3} md={3}>
            <Item>
              <h1>Student Details</h1>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, sm: 6, md: 12 }}
              >
                <Grid item xs={2} sm={12} md={12}>
                  <Item>
                    <Stack spacing={12} direction="row">
                      <Stack spacing={2} direction="column" width={300}>
                        <TextField
                          id="outlined-basic"
                          label="First Name"
                          type="text"
                          variant="outlined"
                          onChange={(e)=>{setnewfirstName(e.target.value)}}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Last Name"
                          type="text"
                          variant="outlined"
                          onChange={(e)=>{setnewlastName(e.target.value)}}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Father Name"
                          type="text"
                          variant="outlined"
                          onChange={(e)=>{setnewfatherName(e.target.value)}}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Mother Name"
                          type="text"
                          variant="outlined"
                          onChange={(e)=>{setnewmotherName(e.target.value)}}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Date of Birth"
                          type="text"
                          format="dd-mm-yyyy"
                          variant="outlined"
                          onChange={(e)=>{setnewdateOfBirth(e.target.value)}}
                        />
                      </Stack>
                      <Stack spacing={2} direction="column" width={300}>
                        {/* <h1>Personal Details</h1> */}

                        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          onChange={handleGenderChange}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-blood-group">Blood Group</InputLabel>
        <Select
          labelId="demo-simple-select-label-blood-group"
          id="demo-simple-select-blood-group"
          //value={bloodGroup}
          label="Blood Group"
          onChange={handleBloodGroupChange}
        >
          <MenuItem value="A+">A+</MenuItem>
          <MenuItem value="A-">A-</MenuItem>
          <MenuItem value="B+">B+</MenuItem>
          <MenuItem value="B-">B-</MenuItem>
          <MenuItem value="O+">O+</MenuItem>
          <MenuItem value="O-">O-</MenuItem>
          <MenuItem value="AB+">AB+</MenuItem>
          <MenuItem value="AB-">AB-</MenuItem>
        </Select>
      </FormControl>

                        <TextField
                          id="outlined-basic"
                          label="Aadhar No"
                          type="number"
                          variant="outlined"
                          onChange={(e)=>{setnewaadharNo(e.target.value)}}
                        />

                        <TextField
                          id="outlined-basic"
                          label="Email"
                          type="email"
                          variant="outlined"
                          onChange={(e)=>{setnewemail(e.target.value)}}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Mobile No"
                          type="number"
                          variant="outlined"
                          onChange={(e)=>{setnewmobileNo(e.target.value)}}
                        />
                      </Stack>
                      <Stack spacing={2} direction="column" width={300}>
                        <h2>Official Details</h2>
                        <TextField
                          id="outlined-basic"
                          label="Admission Number"
                          type="number"
                          variant="outlined"
                          onChange={(e)=>{setnewadmissionNumber(e.target.value)}}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Joining Date"
                          type="text"
                          variant="outlined"
                          onChange={(e)=>{setnewjoiningDate(e.target.value)}}
                        />

                        <TextField
                          id="outlined-basic"
                          label="Roll Number"
                          type="number"
                          variant="outlined"
                          onChange={(e)=>{setnewrollNumber(e.target.value)}}
                        />
                        <FileUpload/>
                        <Button variant="contained" onClick={studentForm}>Submit</Button>
                      </Stack>
                    </Stack>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
