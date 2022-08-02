import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Button, Hidden, IconButton } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import classes from "./styles.module.css";
import Logo from "public/logo-dark.png";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

import Link from "src/components/link";
import Buttons from "./components/buttons";
import Navigation from "./components/navigation";
import BitcoinStats from "./components/bitcoin-stats";
import SearchForm from "./components/search-form";

const Header = () => {
    const [ open, setOpen ] = useState(false);
    const [ openSearch, setOpenSearch ] = useState(false);

    const headerRef = useRef(null);
    const firstRowRef = useRef(null);
    const secondRowRef = useRef(null);
    const toggleSearchRef = useRef(null);

    const toggleOpen = useCallback(() => setOpen(b => !b), []);
    const toggleSearch = useCallback(() => toggleSearchRef.current?.(), []);

    const logo = useMemo(() => <Image alt="logo" src={Logo} />, []);
    const buttons = useMemo(() => <Buttons />, []);
    const navigation = useMemo(() => <Navigation closeHandler={toggleOpen} open={open} />, [ open, toggleOpen ]);
    const bitcoinStats = useMemo(() => <BitcoinStats />, [])
    
    const cartLink = useMemo(() => (
        <Link className="flex items-center md:ml-4 lg:ml-6" href="/">
            <ShoppingCartIcon  className={classNames(classes.cartIcon, "md:text-white md:hover:text-amber-700")} />
        </Link>
    ), []);

    const searchButton = useMemo(() => (
        <IconButton 
            className="md:p-0 md:ml-4 lg:ml-6"
            onClick={toggleSearch}>
            { openSearch ? <CloseIcon className="text-red-700 hover:text-red-500" /> : <SearchIcon className="text-white hover:text-amber-700" /> }
        </IconButton>
    ), [ openSearch ]);

    const searchForm = useMemo(() => <Hidden mdDown><SearchForm toggleRef={toggleSearchRef} /></Hidden>, [])
    
    const hasClass = useCallback(({ element, classname }) => element.classList.contains(classname), []);

    const scrollHandler = useCallback(() => {
        if(window.scrollY > 80) {
            if(!hasClass({ element: headerRef.current, classname: classes.headerFixed }))
                headerRef.current.classList.add(classes.headerFixed);
        } else {
            if(headerRef.current.classList.contains(classes.headerFixed))
                headerRef.current.classList.remove(classes.headerFixed);
        }

        if(window.innerWidth >= 768) {
            if(!hasClass({ element: firstRowRef.current, classname: "hidden" })) {
                firstRowRef.current.classList.add("hidden");
                firstRowRef.current.classList.add("md:flex");
            }

            if(hasClass({ element: secondRowRef.current, classname: "hidden" }))
                secondRowRef.current.classList.remove("hidden");
        } else {
            if(hasClass({ element: firstRowRef.current, classname: "hidden" }))
                firstRowRef.current.classList.remove("hidden");

            if(!hasClass({ element: secondRowRef.current, classname: "hidden" })) {
                secondRowRef.current.classList.add("hidden");
                secondRowRef.current.classList.add("md:flex");
            }
        }
    }, []);

    const resizeHandler = useCallback(() => {
        if(window.scrollY <= 80) {
            if(hasClass({ element: secondRowRef.current, classname: "hidden" }))
                secondRowRef.current.classList.remove("hidden");

            if(hasClass({ element: firstRowRef.current, classname: "hidden" }))
                firstRowRef.current.classList.remove("hidden");
        }
    }, []);

    /*useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        window.addEventListener("resize", resizeHandler);

        const currentWindow = window;

        return () => {
            if(currentWindow) {
                currentWindow.removeEventListener("scroll", scrollHandler);
                currentWindow.removeEventListener("resize", resizeHandler);
            }
        };
    }, [ scrollHandler ]);*/

    return (
        <header 
            className={classNames(classes.header)}
            ref={headerRef}>
            <div className="bg-neutral-900 flex items-center justify-between py-3 px-5 md:bg-neutral-800
                md:flex-col md:py-6 lg:flex-row"
                ref={firstRowRef}>
                { logo }
                <Hidden mdUp>
                    <IconButton 
                        className="bg-amber-600 rounded-none text-white hover:bg-amber-700"
                        onClick={toggleOpen}>
                        { open ? <CloseIcon /> : <MenuIcon /> }
                    </IconButton>
                </Hidden>
                <Hidden mdDown>{ bitcoinStats }</Hidden>
                <Hidden mdDown>
                    <div className="flex mt-6 lg:mt-0 lg:ml-6">{ buttons }</div>
                </Hidden>
            </div>
            <Hidden mdUp >
                { navigation }
            </Hidden>
            <div className="bg-neutral-800 flex justify-between py-2 px-5 md:justify-center md:bg-neutral-900
                sm:flex-col sm:items-center sm:py-6 md:flex-row md:py-2"
                ref={secondRowRef}>
                <Hidden mdDown>{ navigation }</Hidden>
                <Hidden mdDown>{ cartLink }</Hidden>
                <Hidden mdDown>{searchButton}</Hidden>
                <Hidden smDown mdUp>{ bitcoinStats }</Hidden>
                <Hidden mdUp><div className="flex justify-between w-full sm:mt-4 sm:w-auto">{ buttons }</div></Hidden>
            </div>
            { searchForm }
        </header>
    );
};

export default Header;