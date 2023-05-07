import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Stack,
  Box,
  IconButton,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Grid,
  Link,
} from "@mui/material";
import ScrollBar from "../../../../components/Scrollbar";
import { LinkSimple } from "phosphor-react";
import {
  PhotoSizeSelectActualOutlined as PhotoSizeSelectActualOutlinedIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  FileDownloadOutlined as FileDownloadOutlinedIcon,
} from "@mui/icons-material";
import { faker } from "@faker-js/faker";
import { useDispatch } from "react-redux";
import { changeTypeRightSideBar } from "../../../../app/slices/rightSideBarSlice";

const Shared = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);

  const tabProps = (index) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
      sx: {
        px: 1,
        borderRadius: 0,
      },
    };
  };

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Stack
      sx={{
        height: "100vh",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: "30px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: 2,
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
          height: "90px",
          flexShrink: 0,
        }}
      >
        <IconButton
          onClick={() => {
            dispatch(changeTypeRightSideBar({ type: "CONTACT" }));
          }}
        >
          <KeyboardBackspaceIcon
            width="20px"
            height="20px"
            sx={{
              cursor: "pointer",
              color: theme.palette.text.secondary,
            }}
          />
        </IconButton>
      </Box>
      {/* Content */}
      <ScrollBar
        timeout={500}
        clickOnTrack={false}
        sx={{
          flexGrow: 1,
          overflow: "auto",
          px: 3,
        }}
      >
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          aria-label="basic tabs example"
          centered
          sx={{
            "& .MuiTabs-indicator": {
              background: `${theme.palette.primary.main} !important`,
              transform: "translateY(-10px)",
            },
            "& .MuiButtonBase-root:not(:last-child)": {
              marginRight: "70px",
            },
            "& .Mui-selected": {
              color: `${theme.palette.primary.main} !important`,
            },
            " .MuiTouchRipple-root": {
              display: "none",
            },
          }}
        >
          <Tab label="Media" {...tabProps(0)} />
          <Tab label="Links" {...tabProps(1)} />
          <Tab label="Docs" {...tabProps(2)} />
        </Tabs>
        {tab === 0 && (
          <Stack gap={1}>
            <Typography variant="subtitle2" mt={2}>
              27th Oct 22
            </Typography>
            <Grid container spacing={2} mb={3}>
              {Array(9)
                .fill(0)
                .map((item, index) => {
                  return (
                    <Grid key={index} item xs={4}>
                      <Box
                        sx={{
                          borderRadius: "10px",
                          background:
                            theme.palette.mode === "light"
                              ? "rgba(242, 242, 242, 0.67)"
                              : "#2e3b4a",
                          width: "100%",
                          aspectRatio: "1 / 1",
                          p: 0.5,
                        }}
                      >
                        <Avatar
                          alt={faker.image.avatar()}
                          src={faker.image.avatar()}
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 0,
                          }}
                        />
                      </Box>
                    </Grid>
                  );
                })}
            </Grid>
            <Typography variant="subtitle2">27th Oct 22</Typography>
            <Grid container spacing={2}>
              {Array(3)
                .fill(0)
                .map((item, index) => {
                  return (
                    <Grid key={index} item xs={4}>
                      <Box
                        sx={{
                          borderRadius: "10px",
                          background:
                            theme.palette.mode === "light"
                              ? "rgba(242, 242, 242, 0.67)"
                              : "#2e3b4a",
                          width: "100%",
                          aspectRatio: "1 / 1",
                          p: 0.5,
                        }}
                      >
                        <Avatar
                          alt={faker.image.avatar()}
                          src={faker.image.avatar()}
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 0,
                          }}
                        />
                      </Box>
                    </Grid>
                  );
                })}
            </Grid>
          </Stack>
        )}
        {tab === 1 && (
          <Box>
            <Typography variant="subtitle2" my={2}>
              27th Oct 22
            </Typography>
            <Stack gap={3}>
              {new Array(5).fill(0).map((item, index) => {
                return (
                  <Box
                    key={{ index }}
                    sx={{
                      py: "11px",
                      px: "14px",
                      display: "flex",
                      gap: "14px",
                      background: theme.palette.background.paper,
                      boxShadow: "0px 0px 4px 3px rgba(0, 0, 0, 0.04)",
                      borderRadius: "10px",
                    }}
                  >
                    <Stack
                      sx={{
                        width: "64px",
                        height: "64px",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        background: theme.palette.text.disabled,
                      }}
                    >
                      <LinkSimple width="32px" height="32px" />
                    </Stack>
                    <Stack gap={1}>
                      <Link
                        href="https://abc.in/blogs"
                        variant="subtitle2"
                        underline="always"
                        sx={{
                          color: theme.palette.text.primary,
                          textDecorationColor: theme.palette.text.primary,
                        }}
                      >
                        https://abc.in/blogs
                      </Link>
                      <Link
                        href="abc.in"
                        variant="subtitle2"
                        underline="hover"
                        sx={{
                          color: theme.palette.background.primary,
                        }}
                      >
                        abc.in
                      </Link>
                    </Stack>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        )}
        {tab === 2 && (
          <Box>
            <Typography variant="subtitle2" my={2}>
              27th Oct 22
            </Typography>
            <Stack gap={3}>
              {new Array(3).fill(0).map((item, index) => {
                return (
                  <Stack
                    key={index}
                    direction={"row"}
                    gap={2}
                    alignItems={"center"}
                    p={2}
                    sx={{
                      background: theme.palette.background.paper,
                      borderRadius: "10px",
                      boxShadow: "0px 0px 4px 3px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <IconButton>
                      <PhotoSizeSelectActualOutlinedIcon />
                    </IconButton>
                    <Typography>Just file name</Typography>
                    <IconButton
                      sx={{
                        ml: "auto",
                      }}
                    >
                      <FileDownloadOutlinedIcon />
                    </IconButton>
                  </Stack>
                );
              })}
            </Stack>
          </Box>
        )}
      </ScrollBar>
    </Stack>
  );
};

export default Shared;
