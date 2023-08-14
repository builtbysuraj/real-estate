import { Card, CardMedia, Grid, Typography } from "@mui/material"

export default function SingleHouse({ data }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component={"img"}
          height={200}
          width={200}
          image={data.img}
          alt={data.name}
        />
        {data.popular ? <Typography>Popular</Typography> : null}
        <Typography variant="h5">${data.price}/month</Typography>
        <Typography variant="h5">{data.name}</Typography>
      </Card>
    </Grid>
  )
}
