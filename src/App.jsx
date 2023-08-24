import { Container, Typography } from "@mui/material"

import Filters from "./components/Filters"
import Header from "./components/Header"
import House from "./components/House"

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <Typography variant="h4" fontWeight={"bold"} my={3}>
          Search properties
        </Typography>
        <Filters />
        <House />
      </Container>
    </>
  )
}
