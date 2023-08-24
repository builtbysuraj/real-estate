import { Grid } from "@mui/material"

import { useFilter } from "../hook/useFilter"
import SingleHouse from "./SingleHouse"

export default function House() {
  const { filteredData } = useFilter()
  return (
    <>
      <Grid container spacing={5} sx={{ marginBottom: "2rem" }}>
        {filteredData?.map((element) => (
          <SingleHouse data={element} key={element.id} />
        ))}
      </Grid>
    </>
  )
}
