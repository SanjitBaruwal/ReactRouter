import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  createMuiTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import DrawerComponent from "../Component/DrawerComponent";

const Layout = ({ links }) => {
  const theme = createMuiTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState();

  return (
    <>
      <AppBar
        sx={{
          backgroundImage:
            "linear-gradient(30deg, rgba(1,0,25,1) 0%, rgba(2,9,124,1) 45%, rgba(255,0,237,1) 100%)",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>
                <AgricultureIcon sx={{ fontSize: "40px", color: "yellow" }} />
              </Typography>
              <DrawerComponent links={links} />
            </>
          ) : (
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={2}>
                <Typography>
                  <AgricultureIcon sx={{ fontSize: "40px", color: "yellow" }} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Tabs
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                >
                  {/* try to add routing here using <Link/> and <Outlet/> from react-router-dom. */}
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      to={`/${link.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Tab label={link} />
                    </Link>
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={3}>
                <Box display="flex">
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: "auto",
                      background: "rgba(2, 9, 124, 1)",
                      borderRadius: "50px",
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      marginLeft: 1,
                      background: "rgba(2, 9, 124, 1)",
                      borderRadius: "50px",
                    }}
                  >
                    Signup
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;
