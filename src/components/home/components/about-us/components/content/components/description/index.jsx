import { Typography } from "@mui/material";

const Description = ({ children }) => (
    <Typography
        component="p"
        className="mt-4 opacity-70  text-white">
        { children }
    </Typography>
);

export default Description;