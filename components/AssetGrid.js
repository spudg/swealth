import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "owner_id",
    headerName: "Owner ID",
    width: 110,
  },
  {
    field: "value",
    headerName: "Value",
    width: 110,
  },
];

export default function AssetGrid(assets) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={assets.assets}
        columns={columns}
        pageSize={100}
        autoHeight={true}
        id="_id"
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        isRowSelectable={false}
        disableColumnSelector
        sx={{
          border: 0,
          color: "white",
          fontFamily: "Quicksand",
        }}
      />
    </Box>
  );
}
