import { useCallback, useMemo, useState } from "react"
import { Button, Hidden, IconButton } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import classes from "./styles.module.css";
import Logo from "public/logo-dark.png";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Buttons from "./components/buttons";
import Navigation from "./components/navigation"

const Header = () => {
    const [ open, setOpen ] = useState(false);

    const logo = useMemo(() => <Image alt="logo" src={Logo} />, []);
    const buttons = useMemo(() => <Buttons />, []);

    const toggleOpen = useCallback(() => setOpen(b => !b), []);

    return (
        <header>
            <div className="bg-neutral-900 flex items-center justify-between py-3 px-5">
                { logo }
                <IconButton 
                    className="bg-amber-600 rounded-none text-white hover:bg-amber-700"
                    onClick={toggleOpen}>
                    { open ? <CloseIcon /> : <MenuIcon /> }
                </IconButton>
            </div>
            <Hidden mdUp >
                <Navigation open={open} />
            </Hidden>
            <div className="bg-neutral-800 flex justify-between py-2 px-5">
                <Hidden smUp>{ buttons }</Hidden>
            </div>
        </header>
    );
};

export default Header;