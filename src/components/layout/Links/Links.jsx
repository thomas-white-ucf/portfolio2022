import { Link } from "react-router-dom";
import { Box } from "@mui/material";

// =

const Links = () => {
  return (
    <>
      <Box
        sx={{
          ml: 0,
          mx: "auto",
          px: 1,
          border: 2,
          borderRadius: 2,
          borderColor: "background.default",
        }}
      >
        <Link to={"/"}>Home</Link>

        {/* <Link href="/" passHref>
          <Typography variant="subtitle2" color="background.default">
            Home
          </Typography>
        </Link> */}
      </Box>

      {/* <Box sx={{ mx: "auto", px: 1, border:1, borderColor: "background.default" }}>
        <Link href="/Search" passHref>
          <Typography variant="subtitle2" color="background.default">
            Search
          </Typography>
        </Link>
      </Box> */}
      <Box
        sx={{
          mx: "auto",
          px: 1,
          border: 2,
          borderRadius: 2,
          borderColor: "background.default",
        }}
      >
        <Link to={"/portfolio"}>Portfolio</Link>

        {/* <Link href="/wallet" passHref>
          <Typography variant="subtitle2" color="background.default">
            Wallet
          </Typography>
        </Link> */}
      </Box>
      <Box
        sx={{
          mx: "auto",
          px: 1,
          border: 2,
          borderRadius: 2,
          borderColor: "background.default",
        }}
      >
        <Link to={"/resume"}>Resume</Link>
        {/* <Link href="/nftsPage" passHref>
          <Typography variant="subtitle2" color="background.default">
            NFTs
          </Typography>
        </Link> */}
      </Box>
      {/* <Box
        sx={{
          mx: "auto",
          px: 1,
          border: 2,
          borderRadius: 2,
          borderColor: "background.default",
        }}
      >
           <Link to={"/technologies"}>Technologies</Link>
        
      </Box> */}
    </>
  );
};

export default Links;
