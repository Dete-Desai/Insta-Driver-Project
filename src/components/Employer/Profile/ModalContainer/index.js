import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

import "./index.css";
import { updateUserFirstTime } from "../../../../redux/actions/auth_actions";

const AlertDialog = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const directToEmployerEdit = () => {
    let route = `/employer-edit-profile`;
    history.push(route);

    // dispatch(updateUserFirstTime());
  };

  const [open, setOpen] = useState(false);
  const [openOnce, setOpenOnce] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (open === true && openOnce === 0) {
      setOpenOnce(1);
    } else if (open === false && openOnce === 0) {
      setTimeout(() => {
        handleClickOpen();
      }, 1000);
    }
  }, [open, openOnce]);

  const handleClose = () => {
    setOpenOnce(1);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{
            backgroundColor: "#792079",
            color: "#fff",
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              paddingLeft: "10px",
              fontWeight: "bolder",
            }}
          >
            Welcome to InstaDriver Employer!
          </Typography>
          <DialogActions className="dialog-actions">
            <Button onClick={handleClose}>
              <i
                className="far fa-times-circle fa-3x"
                style={{
                  color: "#fff",
                }}
              ></i>
            </Button>
          </DialogActions>
        </DialogTitle>
        <DialogContent
          style={{
            backgroundColor: "#792079",
            color: "#fff",
          }}
        >
          <DialogContentText
            id="alert-dialog-description"
            style={{
              color: "#fff",
            }}
          >
            <div
              className="container"
              style={{
                paddingBottom: "2rem",
              }}
            >
              <Typography style={{ opacity: "0.8" }}>
                A cloud based solution to automate your transport business and
                undertake fleet management effortlesly
              </Typography>
              <Typography style={{ opacity: "0.8", paddingTop: "2rem" }}>
                What about setting your profile business first! This will help
                you build your online brand, set up contact information for your
                recruitment purpose and to connect with clients
              </Typography>
              <Typography
                style={{
                  paddingTop: "2rem",
                  textAlign: "center",
                }}
              >
                <button
                  onClick={directToEmployerEdit}
                  className="btn btn-light warning"
                >
                  Edit Your Business Profile
                </button>
              </Typography>
              <Typography style={{ opacity: "0.8", paddingTop: "2rem" }}>
                Or you may want to go through the video tutorials on how to use
                Instadriver Employer software
              </Typography>
              <Typography
                style={{
                  paddingTop: "2rem",
                  textAlign: "center",
                }}
              >
                <button className="btn btn-light warning">
                  Go To Video Tutorials
                </button>
              </Typography>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
