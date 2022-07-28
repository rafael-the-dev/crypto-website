import { Button, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "src/styles/home.module.css"

import Link from "src/components/link";

const Home = () => {

    return (
        <main>
            <section>
                <div className={classNames(classes.secureHero, `bg-no-repeat bg-center bg-cover flex flex-col 
                    items-center justify-center`)}>
                    <Typography
                        className={classNames(`text-center text-2xl text-white uppercase`)}
                        component="h1">
                        <span className="text-amber-600">Secure</span> and <span className="text-amber-600">Easy way </span>
                        <br/>to bitcoin
                    </Typography>
                    <Link className="mt-4" href="/">
                        <Button 
                            className="border-amber-600 text-amber-700 hover:bg-amber-600 
                            hover:border-amber-600 hover:text-white"
                            variant="outlined">Learn more</Button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;