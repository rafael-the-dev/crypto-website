import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const Card = ({ description, title, titleIcon }) => (
    <li className={classNames(classes.container, "mb-12 text-center")}>
        <Typography
            component="h2"
            className={classNames("font-bold text-xl text-white uppercase before:block before:mx-auto before:bg-no-repeat", 
            "before:bg-contain", classes.title, titleIcon)}>
            { title }
        </Typography>
        <Typography
            className="leading-8 mt-3 opacity-70  text-white">
            { description }
        </Typography>
    </li>
);

export default Card;