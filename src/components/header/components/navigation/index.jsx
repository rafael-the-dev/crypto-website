import classNames  from "classnames";
import Link from "src/components/link";
import { useRouter } from "next/router";
import { useMemo } from "react"

import classes from "./styles.module.css";

import SubList from "./components/sub-list";

const Navigation = ({ closeHandler, open }) => {
    const { pathname } = useRouter();

    const list = useMemo(() => [
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
        { label: "Contact", href: "/" }
    ], []);

    const getPathname = (href) => {
        return href === "/" ? href : `/${href}`;
    };

    const genetateList = () => list.map((item, index) => (
        item.list ? <SubList key={index} { ...item } /> : (
            <li 
                key={index} 
                className={classNames( pathname === getPathname(item.href) ? "text-amber-600" : "text-white",
                    "mb-4 hover:text-amber-600 last:mb-0 md:mb-0 md:mr-4 md:last:mr-0 lg:mr-6")}>
                <Link 
                    className="text-inherit uppercase md:text-sm"
                    href={item.href}
                    onClick={closeHandler}>
                    { item.label }
                </Link>
            </li>
        )
    ));

    return (
        <>
            <nav className={classNames(classes.transition, "relative md:h-auto md:overflow-visible", 
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
            <div onClick={closeHandler} className={classNames( open ? "bg-black opacity-30 fixed h-screen w-screen z-10 md:hidden" : "hidden")}></div>
        </>
    );
};

export default Navigation;