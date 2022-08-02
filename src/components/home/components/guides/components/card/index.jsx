import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const CardContainer = ({ description, title, titleIcon }) => (
    <div className="mb-6 text-center">
        <Typography
            component="h2"
            className={classNames("font-bold text-xl text-white before:block before:mx-auto before:bg-no-repeat", 
            "before:bg-contain", classes.title, titleIcon)}>
            { title }
        </Typography>
        <Typography
            className="mt-3 opacity-70  text-white">
            { description }
        </Typography>
    </div>
);

export default CardContainer;