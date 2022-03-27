import { Grid, Typography, Box } from "@mui/material";
import thomasLogo from "../../assets/images/thomasLogo.jpeg";

const HomePage = () => {
  return (
    <Grid item xs={12}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            alignContent: "center",
            ml: "auto",
            border: 1,
            borderRadius: 1,
            background: "black"
          }}
        >
          <img
            src={thomasLogo}
            alt="Thomas White"
            height="200px"
            width="200px"
          />
        </Box>

        <Typography>
          After graduating from UCF Mechanical Engineering in 2015, I performed
          Facility Condition Assessments and building Cost Estimates. October
          2017 I started contracting independently and assessed damage resulting
          from Hurricanes Irma and Maria in the U.S. Virgin Islands. Currently I
          am enrolled in UCF Coding Full Stack Development Bootcamp.
        </Typography>
        <Typography>
          In total I have assessed 25+ million square feet of commercial,
          government and residential facilities. This led me to start White
          Engineering LLC. I help construct cost estimates for renovations and
          developing projects. Located in Central Florida, I am able to consult
          large commercial developments and Orlando's themed entertainment
          industry.
        </Typography>
        <Typography>
          In 2021, I completed an Appalachian Trail through-hike. I've enjoyed
          traveling to ~44 States, The Bahamas, Mexico, Puerto Rico, U.S. Virgin
          Islands, Peru, Germany and Japan.
        </Typography>
      </Box>
    </Grid>
  );
};

export default HomePage;
