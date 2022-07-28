import { useCallback, useState } from "react";
import { Button, Collapse } from "@mui/material"

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import Link from "src/components/link"

const SublistContainer = ({ label, list }) => {
    const [ open, setOpen ] = useState(false);

    const toggleState = useCallback(() => setOpen(b => !b), []);

    return (
        <li className="flex flex-col items-center mb-4 last:mb-0 md:mb-0 md:mr-4">
            <Button 
                className="font-normal p-0 text-white  md:text-sm"
                endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                onClick={toggleState}>
                { label }
            </Button>
            <Collapse in={open} unmountOnExit>
                <ul className="flex flex-col items-center pt-3">
                    {
                        list.map((item, index) => (
                            <li className="mb-3 last:mb-0" key={index}>
                                <Link 
                                    className="opacity-80 text-sm text-white uppercase"
                                    href={item.href}>
                                    { item.label }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </Collapse>
        </li>
    );
};

export default SublistContainer;