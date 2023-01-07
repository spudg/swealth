import React from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useForm, Form } from "./useForm";
import Controls from "./controls/Controls";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "../components/GlobalFunctions";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const initialFValues = {
  type: "",
  name: "",
  value: "",
  owner_id: "",
};

export default function AddLiabilityForm() {
  const validate = () => {
    let temp = {};
    temp.value = values.value
      ? ""
      : "Please enter the liability's estimated value.";
    temp.name = values.name
      ? ""
      : "Please enter a brief name or description of the liability.";
    temp.type = values.type ? "" : "Required field.";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const { values, handleInputChange, errors, setErrors } =
    useForm(initialFValues);

  const handleSubmit = async (e) => {
    if (!validate()) e.preventDefault();
    else {
      //e.preventDefault();
      addLiability(values);
    }
  };

  async function addLiability(values) {
    try {
      const docRef = await addDoc(collection(db, "liabilities"), {
        name: values.name,
        owner_id: "C8rZzRZsNIAhneQAY9jI",
        value: values.value,
        type: values.type,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div style={{ height: "auto", width: "auto", display: "grid" }}>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid container xs={12} alignItems="center" justifyContent="center">
            <Controls.Input
              label="Name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
              error={errors.name}
            />
            <Controls.Input
              label="Value"
              name="value"
              value={values.value}
              onChange={handleInputChange}
              error={errors.value}
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                name="type"
                label="Type"
                value={values.type || ""}
                onChange={handleInputChange}
              >
                <MenuItem value={"credit-card"}>Credit card</MenuItem>
                <MenuItem value={"loan"}>Loan</MenuItem>
                <MenuItem value={"mortgage"}>Mortgage</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <div>
              <Controls.Button
                style={{ float: "right", display: "grid", marginTop: "20px" }}
                text="Submit"
                type="submit"
                variant="text"
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}
