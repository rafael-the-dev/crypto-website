import { useCallback, useEffect, useRef } from "react"
import { Button, IconButton, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "src/styles/home.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Link from "src/components/link";

const Home = () => {
    const listRef = useRef(null);
    const children = useRef([]);
    const index = useRef(0);

    const slide = useCallback(() => {
        listRef.current.style.transform = `translateX(-${window.innerWidth * index.current}px)`;
    }, []);

    const setWidth = useCallback(() => {
        const width = window.innerWidth;

        children.current.forEach((item, index) => {
            item.style.width = `${width}px`;
            item.style.left = `${width * index}px`
        });

        listRef.current.style.width = `${width * children.current.length}px`;
        slide()
    }, [ slide ]);

    const previousHandler = useCallback(() => {
        if((index.current - 1) >= 0) {
            index.current = index.current - 1;
        } 

        slide();
    }, [ slide ]);

    const nextHandler = useCallback(() => {
        if((index.current + 1) < children.current.length) {
            index.current = index.current + 1;
        } 

        slide();
    }, [ slide ]);


    useEffect(() => {
        children.current = [ ...listRef.current.children ];
        setWidth();
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
                    className={classNames(classes.list, "relative")}
                    ref={listRef}>
                    <li className="absolute h-full">
                        <div className={classNames(classes.hero, classes.secureHero, `bg-no-repeat bg-center bg-cover flex flex-col 
                            h-full items-center justify-center`)}>
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
                    <li className="absolute h-full">
                        <div className={classNames(classes.hero, classes.exchangeHero, `bg-no-repeat bg-center bg-cover flex flex-col 
                            h-full items-center justify-center`)}>
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
                    <IconButton 
                        className="text-amber-500"
                        onClick={previousHandler}>
                        <ArrowBackIosIcon className="text-4xl" />
                    </IconButton>
                    <IconButton 
                        className="text-amber-500"
                        onClick={nextHandler}>
                        <ArrowForwardIosIcon  className="text-4xl" />
                    </IconButton>
                </div>
            </section>
        </main>
    );
};

export default Home;