import React from "react";
import { AppBar, Grid, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

const Header = () => {
  return (
    <>
      <AppBar
        sx={{
          // mb:0,
          // pb:0,
          position: "fixed",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          // background: "linear-gradient(#d3d3d3, #5D17FE, #5D17FE, #5D17FE)",
        }}
      >
        <Toolbar>
          <Grid
            item
            xs={12}
            md={8}
            lg={6}
            sx={{
              flexGrow: 1,
              flexWrap: "wrap",
              display: "flex",
              mx: "auto",
            }}
          >
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/portfolio"}>Portfolio</Link>
              </li>
              <li>
                <Link to={"/resume"}>Resume</Link>
              </li>
              {/* <li>
            <Link to={"/edit/:id"}>Edit</Link>
          </li> */}
            </ul>
            <a
              href="https://github.com/thomas-white-ucf"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-white-engineering/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

// target = "_blank";
// rel = "noopener noreferrer";
// target = "_blank";
// rel = "noopener noreferrer";
// target = "_blank";
// rel = "noopener noreferrer";
