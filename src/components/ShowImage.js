import { ImageList, ImageListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/image.css"

export const ShowImage = (props) => {
  let navigate = useNavigate(); 

  return (
    <ImageList cols={5} gap={16} sx={{ m: 4 }}>
      {props.data.map((item, index) => (
        <ImageListItem key={index} sx={{overflow: "hidden"}}>
          <img
            className="image-item"
            src={item.image}
            srcSet={item.image}
            alt={item.name}
            loading="lazy"
            onClick={() => navigate(`/show/${item.id}`)}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
