import classNames  from "classnames";
import { Typography } from "@mui/material";
import Link from "src/components/link"

import classes from "./styles.module.css"

const Navigation = ({ open }) => {
    const list = [
        { label: "Home", href: "/" },
        { label: "About us", href: "about" },
        { label: "Services", href: "services" },
        { label: "pricing", href: "pricing" },
        { label: "Blog", list: [
            { label: "Blog 1" },
            { label: "Blog 2"},
            { label: "Blog 3"},
        ] },
        { label: "Contact", href: "contact" }
    ];

    const genetateList = () => list.map((item, index) => (
        item.list ? <></> : (
            <li 
                key={index} 
                className="mb-4 last:mb-0">
                <Link 
                    className="text-white uppercase"
                    href={item.href}>
                    { item.label }
                </Link>
            </li>
        )
    ));

    return (
        <>
            <nav className={classNames(classes.transition, "relative ", open ? "" : "h-0 overflow-hidden")}>
                <ul  
                    className={classNames("absolute bg-neutral-900 flex flex-col items-center w-full z-20",
                    classes.transition, open ? "h-fit py-6": "h-0")}>
                    {
                        genetateList()
                    }
                </ul>
            </nav>
            <div className={classNames( open ? "bg-black opacity-30 fixed h-screen w-screen z-10 md:hidden" : "hidden")}></div>
        </>
    );
};

export default Navigation;