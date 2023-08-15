import { Container } from "@mui/material"

import Filters from "./components/Filters"
import Header from "./components/Header"
import House from "./components/House"

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Filters />
        <House />
      </Container>
    </>
  )
}
