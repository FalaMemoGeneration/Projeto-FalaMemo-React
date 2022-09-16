import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

import "./Hank.css";

// interface hankProps {
//   foto: string,
//   title: string,
// }

function Hank() {
  return (
    <div>
      <Box className="box-hank">
        <img
          src="https://images.pexels.com/photos/2467277/pexels-photo-2467277.png?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <Typography variant="subtitle1" className="title-hank">
          Kiss
        </Typography>

        <Box className="star">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
        </Box>
      </Box>
    </div>
  );
}

export default Hank;
