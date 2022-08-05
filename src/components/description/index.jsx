import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";

const Description = ({ children, hasBars }) => (
    <Typography
        className={classNames(`leading-8 mt-4 opacity-70 text-center text-white 
        uppercase md:flex md:items-center`,
        { [`${classes.description} before:bg-amber-600 after:bg-amber-600`]: hasBars })}>
        { children }
    </Typography>
);

export default Description;