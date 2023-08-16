import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import useHandler from "../hook/useHandler"

export default function Filters() {
  const {
    state,
    handleClear,
    handleInput,
    handlePopularCheck,
    handlePriceRangeChange,
  } = useHandler()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        marginTop: "2rem",
      }}
      my={4}
    >
      {/* Price Range */}
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Price range</InputLabel>
        <Select value={state.priceRange} onChange={handlePriceRangeChange}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="1000-2000">1000 - 2000</MenuItem>
          <MenuItem value="2000-4000">2000 - 4000</MenuItem>
        </Select>
      </FormControl>

      {/* Search Filter */}
      <FormControl fullWidth>
        <TextField
          type="text"
          placeholder="Search name or location"
          onChange={handleInput}
        />
      </FormControl>

      {/* Toggle Popular */}
      <FormControl
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <FormControlLabel
          control={
            <Checkbox checked={state.popular} onChange={handlePopularCheck} />
          }
          label="Only Popular"
        />
      </FormControl>
      
      {/* Clear Filter */}
      <Button onClick={handleClear}>Clear</Button>
    </Box>
  )
}
