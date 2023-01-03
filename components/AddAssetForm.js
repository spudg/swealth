import React from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useForm, Form } from "./useForm";
import Controls from "./controls/Controls";

const initialFValues = {
  asset_type: "",
  description: "",
  value: "",
  owner1_id: "",
  owner2_id: "",
};

export default function AddAssetForm() {
  const validate = () => {
    let temp = {};
    temp.value = values.value
      ? ""
      : "Please enter the asset's estimated value.";
    temp.description = values.description
      ? ""
      : "Please enter a brief name or description of the asset.";
    temp.asset_type = values.asset_type ? "" : "Required field.";
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
      e.preventDefault();
      addAsset(values);
      window.location.reload(false);
    }
  };

  async function addAsset() {
    try {
      const docRef = await addDoc(collection(db, "assets"), {
        date_added: "1672581257797",
        name: "testAssets",
        owner_id: "C8rZzRZsNIAhneQAY9jI",
        value: "150928.33",
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
              label="Description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
              error={errors.description}
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
                name="asset_type"
                label="Type"
                value={values.asset_type || ""}
                onChange={handleInputChange}
              >
                <MenuItem value={"retirement"}>Retirement</MenuItem>
                <MenuItem value={"non-retirement"}>Non retirement</MenuItem>
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
