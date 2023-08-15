import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", "& > *": { color: "#000" } }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h4" sx={{ m: "10px", fontWeight: "bold" }}>
          Esatery
        </Typography>
        <Box sx={{ fontSize: 20, fontWeight: "bold" }}>
          <Typography sx={{ m: 2 }} variant="p">
            Rent
          </Typography>
          <Typography sx={{ m: 2 }} variant="p">
            Buy
          </Typography>
          <Typography sx={{ m: 2 }} variant="p">
            Sell
          </Typography>
          <Typography sx={{ m: 2 }} variant="p">
            Manage Property
          </Typography>
          <Typography sx={{ m: 2 }} variant="p">
            Resources
          </Typography>
        </Box>
        <Box>
          <Button sx={{ m: 2 }} variant="contained" size="large">
            Login
          </Button>
          <Button sx={{ m: 2 }} variant="contained" size="large">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
