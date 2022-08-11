import { useCallback, useState } from "react";
import { Button, Collapse } from "@mui/material";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import Link from "src/components/link"
import classNames from "classnames";

const SublistContainer = ({ label, list }) => {
    const [ open, setOpen ] = useState(false);

    const toggleState = useCallback(() => setOpen(b => !b), []);
    const clickHandler = useCallback(() => setOpen(false), []);

    return (
        <li className="flex flex-col items-center mb-4 text-white hover:text-amber-600 last:mb-0 md:mb-0 md:mr-4 md:items-stretch lg:mr-6">
            <Button 
                className="font-normal p-0 text-inherit  md:text-sm"
                endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                onClick={toggleState}>
                { label }
            </Button>
            <Collapse 
                className={classNames("md:relative")}
                in={open} 
                unmountOnExit>
                <ul className={classNames("flex flex-col items-center pt-3 md:absolute md:bg-neutral-900",
                "md:h-auto md:items-start md:left-0 md:py-6 md:top-0  md:z-20 md:w-max"
                )}>
                    {
                        list.map((item, index) => (
                            <li 
                                className="mb-3 text-white last:mb-0 md:mb-0 md:py-2 md:px-4 md:w-full hover:bg-neutral-800 hover:text-amber-600" key={index}>
                                <Link 
                                    className="opacity-80 text-inherit text-sm uppercase"
                                    href={item.href}
                                    onClick={clickHandler}>
                                    { item.label }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </Collapse>
            <div onClick={toggleState} className={classNames( open ? "bg-black opacity-0 fixed h-screen w-screen z-10 hidden left-0 top-0 md:block" : "hidden")}></div>
        </li>
    );
};

export default SublistContainer;