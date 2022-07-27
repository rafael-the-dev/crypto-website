import { Button, IconButton } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

import classes from "./styles.module.css";
import Logo from "public/logo-dark.png";

import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

    return (
        <header>
            <div className="bg-neutral-900 flex items-center justify-between py-3 px-5">
                <Image 
                    alt="logo"
                    src={Logo}
                />
                <IconButton className="bg-amber-600 rounded-none text-white">
                    <MenuIcon />
                </IconButton>
            </div>
            <div className="bg-neutral-800 flex justify-between py-2 px-5">
                <Button 
                    className={classNames(classes.button, `border-amber-600 py-2 text-amber-600 rounded-none hover:bg-amber-600 hover:text-white hover:border-amber-600`)}
                    variant="outlined">
                    Sign in
                </Button>
                <Button 
                    className={classNames(classes.button, `bg-amber-600 py-2 text-white rounded-none hover:bg-amber-700`)}
                    variant="contained">
                    Register
                </Button>
            </div>
        </header>
    );
};

export default Header;