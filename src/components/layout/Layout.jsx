import { Header, Footer } from "./index";
//

import { Grid } from "@mui/material";
//

const Layout = ({ children }) => {
  return (
    <main role="main">
      <Grid container>
        <Grid
          component="main"
          item
          sx={{
            color: "primary.main",
            // background: "linear-gradient(#5D17FE, #5D17FE, #5D17FE, #1A122B)",
            // bgcolor: "#5D17FE",
            border: 3,
            borderRadius: 3,
            // borderColor: "primary.main",
            minWidth: "320px",
          }}
        >
          {/* //! MAIN CONTENT 
                //!> Below - ONLY FOOTER is Outside this Grid Item */}
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            {/* //! - MAIN - - - - - */}
            <Grid container>
              {/* //! - HEADER - - - - */}
              <Grid item xs={12} mb={5}>
                <Header />
              </Grid>

              <Grid item md={10} xs={12}>
                <Grid
                  item
                  sx={{
                    p: 2,
                    mx: "auto",
                    spacing: 2,
                    rowSpacing: 1,
                    columnSpacing: 2,
                    borderRadius: 3,
                  }}
                >
                  {children}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* // ! - FOOTER - - - - * (Keep outside center Grid) *- */}
        <Grid
          item
          xs={12}
          component="footer"
          sx={{
            mt: "auto",
            position: "fixed",
            bottom: "0px",
            width: "100vw",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container sx={{ display: "flex", flexDirection: "row" }}></Grid>
          <Footer />
        </Grid>
      </Grid>
    </main>
  );
};

export default Layout;

// ** ==== // ** ====
// ** ==== // ** ====
