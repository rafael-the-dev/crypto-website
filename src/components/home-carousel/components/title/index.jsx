import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./style.module.css";

const Title = ({ children }) => (
    <Typography
        className={classNames(classes.heroTitle, `font-bold leading-8 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase`)}
        component="h2">
        { children }
    </Typography>
);

export default Title;