import { Box, Card, CardMedia, Grid, Typography } from "@mui/material"

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box>
            <Typography variant="h6">
              ${data.price}
              <Typography sx={{ fontSize: "16px" }} variant="span">
                /month
              </Typography>
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>{data.name}</Typography>
            <Typography variant="subtitle1">{data.location}</Typography>
          </Box>
          {data.popular ? <Typography>Popular✨</Typography> : null}
        </Box>
      </Card>
    </Grid>
  )
}
