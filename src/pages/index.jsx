import { Button, IconButton, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "src/styles/home.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useCallback, useEffect, useRef } from "react"

import Link from "src/components/link";

const Home = () => {
    const listRef = useRef(null);
    const index = useRef(null);

    const setWidth = useCallback(() => {
        const children = [ ...listRef.current.children ];
        const width = window.innerWidth;

        children.forEach(item => {
            item.style.width = `${width}px`;
        });

        listRef.current.style.width = `${width * children.length}px`;
    }, []);

    useEffect(() => {
        setWidth()
        window.addEventListener("resize", setWidth);

        const currentWindow = window;

        return () => {
            if(currentWindow) window.removeEventListener('resize', setWidth)
        };
    }, [ setWidth ]);

    return (
        <main>
            <section className="overflow-hidden relative w-full">
                <ul 
                    className="list flex"
                    ref={listRef}>
                    <li className="">
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
                    </li>
                    <li className="w-full">
                        <div className={classNames(classes.hero, classes.exchangeHero, `bg-no-repeat bg-center bg-cover flex flex-col 
                            items-center justify-center`)}>
                            <Typography
                                className={classNames(classes.heroTitle, `font-bold leading-8 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase`)}
                                component="h1">
                                <span className="text-amber-600">Bitcoin</span> exchange<br/>you can
                                <span className="text-amber-600">trust</span>
                            </Typography>
                            <Link className="mt-4" href="/">
                                <Button 
                                    className="border-amber-500 text-amber-500 hover:bg-amber-600 
                                    hover:border-amber-600 hover:text-white sm:py-2 sm:px-12"
                                    variant="outlined">Our prices</Button>
                            </Link>
                        </div>
                    </li>
                </ul>
                <div className={classNames(classes.heroButtons, 'absolute flex justify-between px-5 sm:px-4 w-full')}>
                    <IconButton className="text-amber-500">
                        <ArrowBackIosIcon className="text-4xl" />
                    </IconButton>
                    <IconButton className="text-amber-500">
                        <ArrowForwardIosIcon  className="text-4xl" />
                    </IconButton>
                </div>
            </section>
        </main>
    );
};

export default Home;