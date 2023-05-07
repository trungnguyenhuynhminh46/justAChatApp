import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Avatar,
  IconButton,
  Divider,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from "@mui/material";
import {
  HighlightOff as HighlightOffIcon,
  FlagOutlined as FlagOutlinedIcon,
  DeleteOutlineOutlined as DeleteOutlineOutlinedIcon,
  VideocamOutlined as VideocamOutlinedIcon,
  LocalPhoneOutlined as LocalPhoneOutlinedIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  Star as StarIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  closeRightSideBar,
  changeTypeRightSideBar,
} from "../../../../app/slices/rightSideBarSlice";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";
import AntSwitch from "../../../../components/AntSwitch";
import ScrollBar from "../../../../components/Scrollbar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AlertDialog = (props) => {
  const { open, setOpen, title, content } = props;
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            setOpen(false);
          }}
          autoFocus
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Contact = () => {
  const [isMute, setIsMute] = useState(true);
  const theme = useTheme();
  const dispatch = useDispatch();
  const [showBlockDialog, setShowBlockDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  return (
    <>
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
          <HighlightOffIcon
            width="20px"
            height="20px"
            sx={{
              cursor: "pointer",
              color: theme.palette.text.secondary,
            }}
            onClick={() => {
              dispatch(closeRightSideBar());
            }}
          />
          <Typography
            component={"span"}
            variant="body2"
            color={theme.palette.text.secondary}
          >
            Contact info
          </Typography>
        </Box>
        {/* Content */}
        <ScrollBar
          timeout={500}
          clickOnTrack={false}
          sx={{
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          <Stack py={4} px={3.5} gap={4}>
            {/* Info */}
            <Stack direction={"row"} gap={"35px"} alignItems={"center"}>
              <Avatar
                alt={faker.image.avatar()}
                src={faker.image.avatar()}
                sx={{
                  width: "75px",
                  height: "75px",
                }}
              ></Avatar>
              <Stack>
                <Typography variant="body2">Shreyansh shah</Typography>
                <Typography variant="body2">+91 6265 081 928</Typography>
              </Stack>
            </Stack>
            {/* Functions */}
            <Stack
              direction={"row"}
              gap={7}
              justifyContent={"center"}
              sx={{
                my: -2,
              }}
            >
              <IconButton
                sx={{
                  height: "74px",
                  aspectRatio: "1 / 1",
                }}
              >
                <Stack gap={1} alignItems={"center"}>
                  <VideocamOutlinedIcon />
                  <Typography variant="body2" component={"span"}>
                    Audio
                  </Typography>
                </Stack>
              </IconButton>
              <IconButton
                sx={{
                  height: "74px",
                  aspectRatio: "1 / 1",
                }}
              >
                <Stack gap={1} alignItems={"center"}>
                  <LocalPhoneOutlinedIcon />
                  <Typography variant="body2" component={"span"}>
                    Audio
                  </Typography>
                </Stack>
              </IconButton>
            </Stack>
            <Divider flexItem />
            {/* Bio */}
            <Stack
              gap={1}
              sx={{
                marginY: "-4px",
              }}
            >
              <Typography
                variant="body2"
                component={"span"}
                sx={{
                  fontWeight: "400",
                }}
              >
                About
              </Typography>
              <Typography
                variant="body2"
                component={"span"}
                sx={{
                  fontWeight: "700",
                }}
              >
                Hi there, I am using
              </Typography>
            </Stack>
            <Divider flexItem />
            {/* Media, links and docs */}
            <Stack gap={3}>
              {/* Head */}
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{
                  my: -0.5,
                }}
              >
                <Typography variant="body2" component={"span"}>
                  Media, links and docs
                </Typography>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  gap={2}
                  sx={{
                    ml: "auto",
                  }}
                >
                  <Typography variant="body2" component={"span"}>
                    402
                  </Typography>
                  <IconButton
                    onClick={() => {
                      dispatch(changeTypeRightSideBar({ type: "SHARED" }));
                    }}
                  >
                    <ArrowForwardIosIcon
                      sx={{
                        width: "18px",
                        height: "18px",
                      }}
                    />
                  </IconButton>
                </Stack>
              </Stack>
              {/* Body */}
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
            <Divider flexItem />
            {/* Starred Messages */}
            <Stack
              direction={"row"}
              gap={2}
              alignItems={"center"}
              sx={{
                my: "-4px",
              }}
            >
              <StarIcon sx={{ width: "18px", height: "18px" }} />
              <Typography variant="body2" component={"span"}>
                Starred Messages
              </Typography>
              <IconButton
                sx={{ ml: "auto" }}
                onClick={() => {
                  dispatch(changeTypeRightSideBar({ type: "STARRED" }));
                }}
              >
                <ArrowForwardIosIcon sx={{ width: "18px", height: "18px" }} />
              </IconButton>
            </Stack>
            <Divider flexItem />
            {/* Mute */}
            <Stack
              direction={"row"}
              gap={2}
              alignItems={"center"}
              sx={{
                my: "-4px",
              }}
            >
              <NotificationsIcon sx={{ width: "18px", height: "18px" }} />
              <Typography variant="body2" component={"span"}>
                Mute Notifications
              </Typography>
              <AntSwitch
                onChange={() => {
                  setIsMute((prev) => !prev);
                }}
                checked={isMute}
                sx={{
                  scale: "0.7",
                  ml: "auto",
                }}
              />
            </Stack>
            <Divider flexItem />
            {/* Groups in common */}
            <Stack
              sx={{
                mt: "-4px",
              }}
              gap={4}
            >
              <Typography variant="body2" component={"span"}>
                1 group in common
              </Typography>
              {new Array(4).fill(0).map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      p: 2,
                      borderRadius: "16px",
                      cursor: "pointer",
                      "&:hover": {
                        background:
                          theme.palette.mode === "light"
                            ? "rgba(242, 242, 242, 0.67)"
                            : "#2e3b4a",
                      },
                    }}
                  >
                    <Stack direction={"row"} gap={2}>
                      <Avatar
                        alt={faker.image.avatar()}
                        src={faker.image.avatar()}
                        sx={{
                          width: "48px",
                          height: "48px",
                        }}
                      />
                      <Stack>
                        <Typography variant="subtitle1" component={"span"}>
                          Camel’s Gang
                        </Typography>
                        <Typography variant="subtitle2" component={"span"}>
                          Owl, Parrot, Rabbit , You
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </ScrollBar>
        {/* Footer */}
        <Stack
          direction={"row"}
          gap={2.5}
          alignItems={"stretch"}
          sx={{
            height: "112px",
            flexShrink: 0,
            px: "18px",
            py: "32px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              flex: 1,
              borderRadius: "8px",
              height: "48px",
            }}
            startIcon={<FlagOutlinedIcon />}
            onClick={() => {
              setShowBlockDialog(true);
            }}
          >
            Block
          </Button>
          <Button
            variant="outlined"
            sx={{
              flex: 1,
              borderRadius: "8px",
              height: "48px",
            }}
            startIcon={<DeleteOutlineOutlinedIcon />}
            onClick={() => {
              setShowDeleteDialog(true);
            }}
          >
            {" "}
            Delete
          </Button>
        </Stack>
      </Stack>
      {showBlockDialog && (
        <AlertDialog
          open={showBlockDialog}
          setOpen={setShowBlockDialog}
          title="Block this user"
          content="Are you sure you want to block this user?"
        />
      )}
      {showDeleteDialog && (
        <AlertDialog
          open={showDeleteDialog}
          setOpen={setShowDeleteDialog}
          title="Delete this chat"
          content="Are you sure you want to delete this chat?"
        />
      )}
    </>
  );
};

export default Contact;
