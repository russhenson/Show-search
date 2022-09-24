import { Box } from "@mui/material";

export const BoxContainer = (props) => {
  return (
    <Box
      sx={{
        bgcolor: "#1c3139",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 2,
        borderRadius: 2,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }}
    >
      {props.children}
    </Box>
  );
};
