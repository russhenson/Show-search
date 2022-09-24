import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const CssFormControl = styled(FormControl)({
  "& label.Mui-focused": {
    color: "#4A7985",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#4A7985",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#3D656E",
    },
    "&:hover fieldset": {
      borderColor: "#4A7985",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4A7985",
    },
  },
});

export const Search = (props) => {
  return (
    <CssFormControl fullWidth variant="outlined" sx={{ m: 4 }}>
      <InputLabel sx={{ color: "#FFF" }}>Search</InputLabel>
      <OutlinedInput
        type="text"
        fullWidth
        value={props.searchValue}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        sx={{ pr: 3, color: "#FFF" }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={props.handleSearch} edge="end">
              <SearchIcon
                sx={{ fill: "#619EAD", }}
              />
            </IconButton>
          </InputAdornment>
        }
        label="Search"
      />
    </CssFormControl>
  );
};
