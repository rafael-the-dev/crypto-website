import { Typography } from "@mui/material";
import classNames from "classnames";

const Title = ({ children }) => (
    <Typography
        className={classNames(`font-bold text-white text-3xl uppercase md:text-4xl`)}
        component="h2">
        { children }
    </Typography>
);

export default Title;