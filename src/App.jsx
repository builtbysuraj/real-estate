import { Container } from "@mui/material"

import Header from "./components/Header"
import House from "./components/House"

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <House />
      </Container>
    </>
  )
}
