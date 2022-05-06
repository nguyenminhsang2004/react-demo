import React, { useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/600/300`;
};

function RandomImage() {
  const [imageValue, setImage] = useState("");
  //const [filter, setFilter] = useState(0);
  const handleRandomPhotoClick = async () => {
    const randomImageUrl = getRandomImageUrl();
    setImage(randomImageUrl);
  };

  useEffect(() => {
    console.log("Random image");
    handleRandomPhotoClick();
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     setFilter(filter + 1);
  //   }, 1000);
  // }, []);

  return (
    <Box>
      <Box style={{ marginTop: "5rem" }}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleRandomPhotoClick}
        >
          Random image
        </Button>
      </Box>

      <Box height={300} style={{ marginTop: "2rem" }}>
        {imageValue && (
          <img
            src={imageValue}
            alt="Ooops ... not found. Please click random again!"
            onError={handleRandomPhotoClick}
          />
        )}
      </Box>
    </Box>
  );
}

export default RandomImage;
