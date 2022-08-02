import { Typography } from "@mui/material";
import classNames from "classnames";

const CardContainer = ({ description, title }) => (
    <div className="text-center">
        <Typography
            component="h2"
            className={classNames("font-bold")}>
            { title }
        </Typography>
        <Typography
            className="font-bold">
            { description }
        </Typography>
    </div>
);

export default CardContainer;