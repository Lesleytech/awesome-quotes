import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ReplayIcon from "@material-ui/icons/Replay";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinearProgress from "@material-ui/core/LinearProgress";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";
import cx from "classnames";

import styles from "./Quotes.module.css";

export default function Quotes({
  quotes: { author, text: quote },
  changeQuote,
  isQuoteLoading,
}) {
  let _author = author;
  if (!_author) {
    _author = "Anonymous";
  }
  return (
    <Card className={styles.container}>
      {isQuoteLoading && <LinearProgress color="secondary" />}
      <CardHeader
        className={cx(styles.animation, isQuoteLoading && styles.animated)}
        avatar={
          <Avatar aria-label="author" style={{ backgroundColor: red[500] }}>
            {_author[0].toUpperCase()}
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={_author}
        subheader={"@" + _author.split(" ")[0]}
      />
      <CardContent
        className={cx(styles.animation, isQuoteLoading && styles.animated)}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          component="blockquote"
        >
          <FontAwesomeIcon icon={faQuoteLeft} className={styles.quote_left} />
          {quote}"
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="View code on github">
          <Link
            href="https://www.github.com/lesleytech/awesome-quotes"
            target="_blank"
          >
            <IconButton aria-label="github">
              <GitHubIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Tweet">
          <Link
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=lafenlesley&text=${quote}`}
            target="_blank"
          >
            <IconButton aria-label="twitter">
              <TwitterIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Shuffle">
          <IconButton
            aria-label="reload"
            style={{ marginLeft: "auto" }}
            onClick={changeQuote}
          >
            <ReplayIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
