import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Nav_Buttons, Nav_Setting, Profile_Menu } from "../../data";
import Logo from "../../assets/Images/logo.ico";
import AntSwitch from "../../components/AntSwitch";
import useSettings from "../../hooks/useSettings";
import { faker } from "@faker-js/faker";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickAvatar = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const { themeMode, onToggleMode } = useSettings();
  const [selected, setSelected] = useState(0);
  const theme = useTheme();
  return (
    <Box
      py={2}
      px={4}
      height="100vh"
      width={130}
      sx={{
        background: theme.palette.background.paper,
      }}
      boxShadow="0px 0px 2px rgba(0,0,0,0.25)"
    >
      <Stack direction="column" alignItems="center" height="100%" gap={3}>
        <Box
          sx={{
            background: theme.palette.primary.main,
          }}
          width={64}
          height={64}
          borderRadius={1.5}
        >
          <img src={Logo} alt="" />
        </Box>
        <Stack direction="column" alignItems="center" spacing={3}>
          {Nav_Buttons.map((item) => {
            const isSelected = selected === item.index;
            return (
              <Box
                key={item.index}
                width={48}
                height={48}
                sx={{
                  backgroundColor: isSelected
                    ? theme.palette.primary.main
                    : "transparent",
                  borderRadius: 1.5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  setSelected(item.index);
                }}
              >
                <IconButton
                  sx={{
                    width: "max-content",
                    color: isSelected ? "#fff" : undefined,
                  }}
                >
                  {item.icon}
                </IconButton>
              </Box>
            );
          })}
          <Divider variant="middle" width="100%" />
          {Nav_Setting.map((item) => {
            const isSelected = selected === item.index;
            return (
              <Box
                key={item.index}
                width={48}
                height={48}
                sx={{
                  backgroundColor: isSelected
                    ? theme.palette.primary.main
                    : "transparent",
                  borderRadius: 1.5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  setSelected(item.index);
                }}
              >
                <IconButton
                  sx={{
                    width: "max-content",
                    color: isSelected ? "#fff" : undefined,
                  }}
                >
                  {item.icon}
                </IconButton>
              </Box>
            );
          })}
        </Stack>
        <Stack sx={{ marginTop: "auto" }} gap={6.5} alignItems={"center"}>
          <AntSwitch onChange={onToggleMode} checked={themeMode === "dark"} />
          <Avatar
            src={faker.image.avatar()}
            sx={{
              cursor: "pointer",
            }}
            onClick={handleClickAvatar}
          />
          <Menu
            id="profile-menu"
            aria-labelledby="profile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            {Profile_Menu.map((item, index) => {
              return (
                <MenuItem key={index} onClick={handleCloseMenu}>
                  <ListItemIcon
                    sx={{
                      mr: 0,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </MenuItem>
              );
            })}
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
