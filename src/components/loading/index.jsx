import { Typography } from "@mui/material";
import classNames from "classnames";
import { useEffect, useState } from "react";


const LoadingContainer = () => {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 4000)
    }, []);

    return (
        <div className={classNames( "bg-neutral-900 flex fixed h-screen items-center justify-center left-0 top-0 w-screen z-50",
            { "hidden": !loading }
        )}>
            <Typography className="font-bold text-amber-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Loading...
            </Typography>
        </div>
    );
};

export default LoadingContainer;