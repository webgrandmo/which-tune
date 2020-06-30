import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import './Buttons.css';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div className="Buttons">
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<PlayArrowIcon />}
      >
        Play
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudDownloadIcon />}
      >
        Download
      </Button>
    </div>
  );
}