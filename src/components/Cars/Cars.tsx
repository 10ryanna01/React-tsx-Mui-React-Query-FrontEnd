import { useState } from "react";
import { usePost } from "../../api/hooks/use-posts";
import { Box,  Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface CarUI {
  prev: boolean;
}

export const Cars = () => {
  const [infoVisiable, setInfoVisible] = useState<CarUI | any >("");

  const handleShowAllCarData = () => {
    setInfoVisible((prev:any) => !prev);
  };
  const { isLoading, data: carData, error } = usePost();

  if (error) {
    return <h1>sorry there was an error </h1>;
  }
  if (isLoading) {
    <h1> data is delayed for to demonstrate fallbacks UX....</h1>;
  }


  return (
    <div>
      <Button
        className=" mvp__UI__utility__button__primary"
        onClick={handleShowAllCarData}
      >
        {infoVisiable ? (
          <>
            {" "}
            show me less data <ExpandLessIcon />{" "}
          </>
        ) : (
          <>
            {" "}
            show me some more data <ExpandMoreIcon />
          </>
        )}

      </Button>

      {infoVisiable ? <Box className=" mvp__UI__utility__wordbreak">{JSON.stringify(carData)}</Box> : null}

      <Box>{carData?.name}</Box>
      <Box>{carData?.details}</Box>
      <h2 className=" mvp__UI__utility__copy__h2">test render array from Space X Roaders API</h2>
      <Box className="mvp__UI__utility__grid">
        {/* {carData?.flickr_images} */}
        {isLoading ? <span className=" mvp__UI__utility__copy__h5">  data is delayed for to demonstrate fallbacks UX... </span> : ""}
        {carData?.flickr_images.map(({ carListItem }: any) => (
            // need to cross check the interface typing on this
            <Box className="mvp__UI__utility__grid__item">
            <img key={carListItem} src={`${carData?.flickr_images}`} /> 
            </Box>
        ))}
         
      </Box>
    </div>
  );
};
