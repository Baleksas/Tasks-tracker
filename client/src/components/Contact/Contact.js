import React from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "../../Styles/Transitions";

const Contact = () => {
  const classes = useStyles();
  return (
    <motion.div
      exit="out"
      animate="in"
      initial="initial"
      variants={pageTransition}
      className="container"
    >
      <div className="contact-container">
        <div className="linked-in contact-type">
          <a href="https://www.linkedin.com/in/aleksas-bagdonas-2bb8a71b2/">
            LinkedIn
          </a>
        </div>
        <div className="instagram contact-type">
          <a href="https://www.instagram.com/alexas.ba/">Instagram</a>
        </div>
        <form
          method="POST"
          netlify
          autoComplete="off"
          className={`${classes.root} ${classes.form}`}
        >
          <TextField name="email" variant="outlined" label="Email" fullWidth />
          <TextField name="title" variant="outlined" label="Title" fullWidth />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            multiline
            rows={4}
          />

          <Button
            className={classes.buttonSubmit}
            variant="outlined"
            color="secondary"
            size="large"
            type="submit"
          >
            Send
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
