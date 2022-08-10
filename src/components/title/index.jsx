import { Typography } from "@mui/material";
import classNames from "classnames";

const Title = ({ children, className }) => (
    <Typography
        className={classNames(`font-bold text-center text-white text-3xl uppercase md:text-4xl lg:text-5xl`, className)}
        component="h2">
        { children }
    </Typography>
);

export default Title;