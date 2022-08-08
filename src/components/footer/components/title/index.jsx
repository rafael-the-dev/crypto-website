import { Typography } from "@mui/material";

const Title = ({ children }) => (
    <Typography
        component="h2"
        className="font-bold text-amber-600 text-lg uppercase">
        { children }
    </Typography>
);

export default Title;