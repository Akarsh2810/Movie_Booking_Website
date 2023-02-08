import { makeStyles } from "@material-ui/core/styles";
import LandingPageBGImage from "../../images/netflixImage.jpg";
const useStyles = makeStyles(
  () => ({
    layout: {
      backgroundImage: `url(${LandingPageBGImage})`,
      backgroundPosition: "center",
      height: "100vh",
      width: "70%",
      "@media (min-height: 1000px)": {
        backgroundSize: "100% 100%",
      },
    },
  }),
  { index: 1 }
);

export { useStyles };
