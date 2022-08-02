import { useCallback, useEffect, useState } from "react";
import { Collapse, IconButton } from "@mui/material";
import classNames from "classnames"

import CloseIcon from '@mui/icons-material/Close';

import classes from "./styles.module.css";

const SearchFormContainer = ({ toggleRef }) => {
    const [ open, setOpen ] = useState(false);

    const toggleOpen = useCallback(() => setOpen(b => !b), [])

    useEffect(() => {
        toggleRef.current = toggleOpen;
    }, [ toggleOpen, toggleRef]);
    console.log(open)
    return (
        <div
            className="relative w-full z-10">
            <form 
                className={classNames(classes.form, "absolute flex items-center py-4 px-6 w-full",
                { [classes.formShow]: open })}>
                <input 
                    className="bg-transparent border-0 grow opacity-80 outline-none py-1 text-white text-center text-base"
                    placeholder="type your keyword and press enter"
                />
                <IconButton 
                    className="ml-3 opacity-70 text-white"
                    onClick={toggleOpen}>
                    <CloseIcon />
                </IconButton>
            </form>
        </div>
    );
};

export default SearchFormContainer;