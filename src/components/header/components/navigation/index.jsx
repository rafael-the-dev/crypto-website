import classNames  from "classnames";
import { Typography } from "@mui/material";
import Link from "src/components/link"

import classes from "./styles.module.css";

import SubList from "./components/sub-list";

const Navigation = ({ open }) => {
    const list = [
        { label: "Home", href: "/" },
        { label: "About us", href: "about" },
        { label: "Services", href: "services" },
        { label: "pricing", href: "pricing" },
        { label: "Blog", list: [
            { label: "Blog 1", href: "/" },
            { label: "Blog 2", href: "/" },
            { label: "Blog 3", href: "/" },
        ] },
        { label: "Pages", list: [
            { label: "Register page", href: "/" },
            { label: "Login page", href: "/" },
            { label: "Shopping cart", href: "/" },
            { label: "Shopping checkout", href: "/" },
            { label: "FAQ page", href: "/" },
            { label: "404 page", href: "/" },
        ] },
        { label: "Contact", href: "contact" }
    ];

    const genetateList = () => list.map((item, index) => (
        item.list ? <SubList key={index} { ...item } /> : (
            <li 
                key={index} 
                className="mb-4 last:mb-0 md:mb-0 md:mr-4 md:last:mr-0">
                <Link 
                    className="text-white uppercase md:text-sm"
                    href={item.href}>
                    { item.label }
                </Link>
            </li>
        )
    ));

    return (
        <>
            <nav className={classNames(classes.transition, "relative md:h-auto", 
            open ? "overflow-visible h-auto" : "h-0 overflow-hidden")}>
                <ul  
                    className={classNames("absolute bg-neutral-900 flex flex-col items-center w-full z-20",
                    classes.transition, open ? "h-auto py-6": "h-0",
                    "md:relative md:flex-row md:py-6")}>
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