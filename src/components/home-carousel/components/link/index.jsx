import { Button } from "@mui/material";

import Link from "src/components/link";

const LinkContainer = ({ children }) => (
    <Link className="mt-4" href="/">
        <Button 
            className="border-amber-500 text-amber-500 hover:bg-amber-600 
            hover:border-amber-600 hover:text-white sm:py-2 sm:px-12"
            variant="outlined">
            { children }
        </Button>
    </Link>
);

export default LinkContainer;