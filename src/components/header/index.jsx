import { useCallback, useMemo, useState } from "react"
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

const Header = () => {
    const [ open, setOpen ] = useState(false);
    const [ openSearch, setOpenSearch ] = useState(false);

    const toggleOpen = useCallback(() => setOpen(b => !b), []);

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
        <IconButton className="md:p-0 md:ml-4 lg:ml-6">
            { openSearch ? <CloseIcon className="text-red-700 hover:text-red-500" /> : <SearchIcon className="text-white hover:text-amber-700" /> }
        </IconButton>
    ), [ openSearch ]);

    return (
        <header>
            <div className="bg-neutral-900 flex items-center justify-between py-3 px-5 md:bg-neutral-800
                md:flex-col md:py-6">
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
                    <div className="flex mt-6">{ buttons }</div>
                </Hidden>
            </div>
            <Hidden mdUp >
                { navigation }
            </Hidden>
            <div className="bg-neutral-800 flex justify-between py-2 px-5 md:justify-center md:bg-neutral-900
                sm:flex-col sm:items-center sm:py-6 md:flex-row md:py-2">
                <Hidden mdDown>{ navigation }</Hidden>
                <Hidden mdDown>{ cartLink }</Hidden>
                <Hidden mdDown>{searchButton}</Hidden>
                <Hidden smDown mdUp>{ bitcoinStats }</Hidden>
                <Hidden mdUp><div className="flex justify-between w-full sm:mt-4 sm:w-auto">{ buttons }</div></Hidden>
            </div>
        </header>
    );
};

export default Header;