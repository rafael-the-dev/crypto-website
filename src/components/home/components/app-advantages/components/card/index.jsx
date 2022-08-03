import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const Card = ({ description, title, titleIcon }) => (
    <li className={classNames(classes.container, "mb-6 text-center md:text-left md:pl-28 md:mb-12")}>
        <Typography
            component="h2"
            className={classNames("font-bold text-xl text-white uppercase before:block before:mx-auto before:bg-no-repeat", 
            "before:bg-contain", classes.title, titleIcon)}>
            { title }
        </Typography>
        <Typography
            className="mt-3 opacity-70  text-white">
            { description }
        </Typography>
    </li>
);

export default Card;