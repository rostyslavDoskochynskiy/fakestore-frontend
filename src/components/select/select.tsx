import * as React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface ISelectSort {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectSort({ sortBy, setSortBy }: ISelectSort) {
  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 120, marginTop: "120px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
