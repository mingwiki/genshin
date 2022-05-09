import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import Paper from "@mui/material/Paper";
import AirIcon from "@mui/icons-material/Air";
import StormIcon from "@mui/icons-material/Storm";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { useNavigate } from "react-router-dom";
import { nav } from "../data";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();
  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate(nav[newValue]);
          }}
        >
          <BottomNavigationAction
            label="计划"
            icon={<FormatListNumberedIcon />}
          />
          <BottomNavigationAction label="配队" icon={<GroupsIcon />} />
          <BottomNavigationAction label="角色培养" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="圣遗物" icon={<AirIcon />} />
          <BottomNavigationAction label="天赋" icon={<StormIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
