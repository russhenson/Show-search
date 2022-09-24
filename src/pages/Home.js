import { BoxContainer, Search, ShowImage } from "../components/index";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [resultData, setResultData] = useState([]);

  const handleSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((data) => data.show.image !== null);
        setResultData(
          filtered.map((item) => ({
            name: item.show.name,
            image: item.show.image.medium,
          }))
        );
        setSearchValue("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Grid
      container
      direction="column"
      sx={{
        alignItems: "center",
        width: "70%",
        mx: "auto",
      }}
    >
      <Grid item sx={{ mt: 3, width: "100%" }} >
        <BoxContainer>
          <Search
            searchValue={searchValue}
            handleSearch={handleSearch}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </BoxContainer>
      </Grid>
      <Grid item sx={{width: "100%"}}>
        <BoxContainer>
          {resultData.length !== 0 ? (
            <ShowImage data={resultData} />
          ) : (
            <Typography color="#FFF" sx={{py: 3}}>No Result</Typography>
          )}
        </BoxContainer>
      </Grid>
    </Grid>
  );
};
