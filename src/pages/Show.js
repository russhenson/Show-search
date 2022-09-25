import { useParams } from "react-router-dom";
import { BoxContainer } from "../components/index";
import { Grid, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState, useEffect } from "react";

export const Show = () => {
  const { id } = useParams();
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/lookup/shows?imdb=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const showInfo = {
          name: data?.name,
          image: data.image.original,
          genres: data.genres,
          summary: data.summary,
        };
        setResultData(showInfo);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <BoxContainer
      sx={{ width: "80%", mx: "auto", mt: 5, position: "relative" }}
    >
      <Button
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          ml: 4,
          mt: 1,
          color: "#619EAD",
          "&:hover": {
            bgcolor: "transparent",
            color: "#FFF"
          },
        }}
        href="/"
        startIcon={<ArrowBackIcon />}
      >
        Home
      </Button>
      <Grid container direction="row" sx={{ p: 4, pt: 6 }}>
        <Grid item md={4}>
          <img
            src={Object.values(resultData)[1]}
            alt={Object.values(resultData)[0]}
            width={"100%"}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 8px",
              borderRadius: 4,
            }}
          />
        </Grid>
        <Grid item md={8} sx={{ px: 8 }}>
          <Grid container>
            <Typography
              color="#FFF"
              variant="h2"
              fontWeight="600"
              textTransform="uppercase"
              width="100%"
            >
              {Object.values(resultData)[0]}
            </Typography>

            {Object.values(resultData)[2]?.map((genre, index) => (
              <Typography mr={2} color="rgba(255,255,255, 0.4)" key={index}>
                {genre}
              </Typography>
            ))}

            <Typography color="#FFF" align="justify" mt={2}>
              {Object.values(resultData)[3]?.replace(/<\/?[^>]+(>|$)/g, "")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </BoxContainer>
  );
};
