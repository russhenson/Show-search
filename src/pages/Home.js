import { BoxContainer, Search, ShowImage } from "../components/index";
import { Grid, Typography, CircularProgress } from "@mui/material";
import { useState } from "react";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [resultData, setResultData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const filtered = data.filter((data) => data.show.image !== null);
        setResultData(
          filtered.map((item) => ({
            id: item.show.externals.imdb,
            name: item.show.name,
            image: item.show.image.medium,
          }))
        );
        setSearchValue("");
        setIsLoading(false);
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
      <Grid item sx={{ mt: 3, width: "100%" }}>
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
      <Grid item sx={{ width: "100%" }}>
        <BoxContainer>
          {isLoading ? (
            <CircularProgress sx={{ py: 3 }}/>
          ) : resultData.length !== 0 ? (
            <ShowImage data={resultData} />
          ) : (
            <Typography color="#FFF" sx={{ py: 3 }}>
              No Match Found. Search a keyword or title.
            </Typography>
          )}
        </BoxContainer>
      </Grid>
    </Grid>
  );
};
