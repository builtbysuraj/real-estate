import { Grid, Typography } from "@mui/material"

import { useSearchFilter } from "../hook/useSearch"
import SingleHouse from "./SingleHouse"

export default function House() {
  const { filteredData } = useSearchFilter()
  return (
    <>
      <Typography variant="h4" fontWeight={"bold"}>
        Search properties to rent
      </Typography>
      <Grid container spacing={5} sx={{ marginBottom: "2rem" }}>
        {filteredData?.map((element) => (
          <SingleHouse data={element} key={element.id} />
        ))}
      </Grid>
    </>
  )
}
