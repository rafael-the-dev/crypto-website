import { useCallback, useEffect, useRef } from "react"
import { Button, IconButton, Typography } from "@mui/material";
import classNames from "classnames";


import classes from "./styles.module.css"

import Link from "./components/link";
import Title from "./components/title";
import Controls from "./components/buttons"

const CarouselContainer = () => {
    const listRef = useRef(null);
    const children = useRef([]);
    const indexRef = useRef(0);

    const slide = useCallback(() => {
        listRef.current.style.transform = `translateX(-${window.innerWidth * indexRef.current}px)`;
    }, []);

    const setWidth = useCallback(() => {
        const width = window.innerWidth;

        children.current.forEach((item, index) => {
            item.style.width = `${width}px`;
            item.style.left = `${width * index}px`
        });

        listRef.current.style.width = `${width * children.current.length}px`;
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
        <section className="hero-slider overflow-hidden relative w-full">
            <ul 
                className={classNames(classes.list, "relative")}
                ref={listRef}>
                <li className="absolute h-full">
                    <div className={classNames(classes.hero, classes.secureHero, `bg-no-repeat bg-center bg-cover flex flex-col 
                        h-full items-center justify-center pb-8`)}>
                        <Title>
                            <span className="text-amber-600">Secure</span> and <span className="text-amber-600">Easy way </span>
                            <br/>to bitcoin
                        </Title>
                        <Link>Learn more</Link>
                    </div>
                </li>
                <li className="absolute h-full">
                    <div className={classNames(classes.hero, classes.exchangeHero, `bg-no-repeat bg-center bg-cover flex flex-col 
                        h-full items-center justify-center pb-8`)}>
                        <Title>
                            <span className="text-amber-600">Bitcoin</span> exchange<br/>you can
                            <span className="text-amber-600">trust</span>
                        </Title>
                        <Link>Our prices</Link>
                    </div>
                </li>
            </ul>
            <Controls childrenList={children} indexRef={indexRef} slideHandler={slide} />
        </section>
    );
};

export default CarouselContainer;