import { Grid, Typography } from "@mui/material"
import { useContext } from "react"

import { AppContext } from "../state/AppContext"
import SingleHouse from "./SingleHouse"

export default function House() {
  const { state } = useContext(AppContext)
  return (
    <>
      <Typography variant="h4" fontWeight={"bold"}>
        Search properties to rent
      </Typography>
      <Grid container spacing={5}>
        {state.filteredData?.map((element) => (
          <SingleHouse data={element} key={element.id} />
        ))}
      </Grid>
    </>
  )
}
