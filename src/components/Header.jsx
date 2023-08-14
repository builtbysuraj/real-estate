import { AppBar, Box, Button, Toolbar } from "@mui/material"

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem"
        }}
      >
        <Button variant="contained" size="large">Esatery</Button>
        <Box>
          <Button variant="contained">Rent</Button>
          <Button variant="contained">Buy</Button>
          <Button variant="contained">Sell</Button>
          <Button variant="contained">Manage Property</Button>
          <Button variant="contained">Resources</Button>
        </Box>
        <Box>
          <Button variant="contained" size="large">Login</Button>
          <Button variant="contained" size="large">Sign Up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
