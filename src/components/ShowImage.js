import { ImageList, ImageListItem } from "@mui/material";

export const ShowImage = (props) => {
  return (
    <ImageList cols={5} gap={16} sx={{m: 4}}>
      {props.data.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={item.image}
            srcSet={item.image}
            alt={item.name}
            loading="lazy"
            style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 8px", borderRadius: 2}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
