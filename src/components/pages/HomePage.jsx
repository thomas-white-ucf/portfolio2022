import { Grid, Typography, Box } from "@mui/material";
import thomasLogo from "../../assets/images/thomasLogo.jpeg";

const HomePage = () => {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          overFlow: "auto",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            // ml: "auto",
            // border: 1,
            borderRadius: 1,
            background: "whitesmoke",
            p: 1,
            m: 1,
          }}
        >
          <Box>
            <Typography variant="h4" gutterBottom>
              Thomas White
            </Typography>
            <Typography variant="subtitle" gutterBottom>
              After graduating from UCF Mechanical Engineering in 2015, I
              performed Facility Condition Assessments and constructed Cost
              Estimates with Nelson Engineering Company. October 2017, I started
              contracting independently and thereafter founded my consulting
              company White Engineering LLC in 2018.
            </Typography>
            <hr />
            <Typography variant="subtitle" gutterBottom>
              While assisting Professional Estimators as White Engineering's
              Owner and sole employee, I returned to the University of Central
              Florida to attend the Full Stack Web Development Bootcamp.
            </Typography>
            <hr />
            <Typography variant="subtitle" gutterBottom>
              I completed an Appalachian Trail through-hike in 2021, after 2193.1 miles. <br/>
              Also, I have enjoyed traveling to ~44 States, The Bahamas, Mexico, Puerto Rico,
              U.S. Virgin Islands, Peru, Germany and Japan.
            </Typography>
          </Box>
          <Box sx={{ p: 1, m: 1 }}>
            <img
              src={thomasLogo}
              alt="Thomas White"
              height="200px"
              width="200px"
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default HomePage;
