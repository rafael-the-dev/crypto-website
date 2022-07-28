import { Button, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "src/styles/home.module.css"

import Link from "src/components/link";

const Home = () => {

    return (
        <main>
            <section>
                <div className={classNames(classes.hero, classes.secureHero, `bg-no-repeat bg-center bg-cover flex flex-col 
                    items-center justify-center`)}>
                    <Typography
                        className={classNames(classes.heroTitle, `font-bold leading-8 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase`)}
                        component="h1">
                        <span className="text-amber-600">Secure</span> and <span className="text-amber-600">Easy way </span>
                        <br/>to bitcoin
                    </Typography>
                    <Link className="mt-4" href="/">
                        <Button 
                            className="border-amber-500 text-amber-500 hover:bg-amber-600 
                            hover:border-amber-600 hover:text-white sm:py-2 sm:px-12"
                            variant="outlined">Learn more</Button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;