import { Grid, Typography } from "@mui/material"
import { data } from "../db/data.json"
import SingleHouse from "./SingleHouse"

export default function House() {
  return (
    <>
      <Typography variant="h4" fontWeight={"bold"}>
        Search properties to rent
      </Typography>
      <Grid container spacing={5}>
        {data?.map((element) => (
          <SingleHouse data={element} key={element.id} />
        ))}
      </Grid>
    </>
  )
}
