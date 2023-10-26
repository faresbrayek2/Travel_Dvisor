import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar className="text-red sm:block flex justify-between">
        <Typography variant="h5" className="text-red sm:block">
          Travel Advisor
        </Typography>
        <Box className="flex">
          <Typography variant="h6" className="text-red sm:block px-2">
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
          <div className="relative flex items-center">
            <div className="absolute text-blue-700 bg-white rounded-2xl p-1 ">
              <SearchIcon />
            </div>
            <div className="relative pl-4 bg-slate-50 opacity-50 rounded-2xl ">
              <InputBase placeholder="Search ..." className="pl-8" />
            </div>
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
