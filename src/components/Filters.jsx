import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material"
import useFilter from "../hook/useFilter"

export default function Filters() {
  const { state, handleClear, handleInput, handlePopularCheck } = useFilter()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        marginTop: "2rem"
      }}
    >
      <TextField
        type="text"
        placeholder="Search name and location"
        onChange={handleInput}
      />
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
      <Button onClick={handleClear}>Clear</Button>
    </Box>
  )
}
