import { Button, Typography } from "@mui/material";
import Image from "next/image";
import classNames from "classnames";

import classes from "./styles.module.css"

import Link from "src/components/link";

const Card = ({ description, image, title }) => (
    <article className={classNames(classes.root, "flex flex-col items-stretch mb-8 md:mb-12")}>
        <Link className={classNames(classes.imageContainer, 'relative')} href="/">
            <Image 
                alt={title}
                layout="fill"
                src={image}
            />
        </Link>
        <div className="flex flex-col mt-2">
            <Typography 
                component="h3"
                className="text-white">
                { title }
            </Typography>
            <Typography 
                component="p"
                className="mt-2 opacity-80 text-white">
                { description }
            </Typography>
            <Link className="mt-6" href="/">
                <Button className="bg-amber-600 py-2 px-8 rounded-none text-white hover:bg-amber-700 ">
                    Read more
                </Button>
            </Link>
        </div>
    </article>
);

export default Card;