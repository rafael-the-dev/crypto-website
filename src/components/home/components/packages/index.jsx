import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const PackagesSection = () => {

    return (
        <section className="bg-neutral-900 flex flex-col items-center px-5 py-12">
            <Typography
                className={classNames(`font-bold text-white text-3xl uppercase md:text-4xl`)}
                component="h2">
                Affordable<br className="sm:hidden" /><span className="text-amber-600 sm:ml-3">packages</span>
            </Typography>
            <Typography
                className={classNames(classes.description, `leading-8 mt-4 opacity-70 text-center text-white 
                uppercase before:bg-amber-600 after:bg-amber-600 md:flex md:items-center`)}>
                Purchase Bitcoin using credit card or with your linked bank account.
            </Typography>
        </section>
    );
};

export default PackagesSection;