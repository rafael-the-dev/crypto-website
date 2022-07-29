import { useCallback, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ButtonsContainer = ({ childrenList, indexRef, slideHandler }) => {
    const [ index, setIndex ] = useState(0);

    const slide = useCallback(() => {
        listRef.current.style.transform = `translateX(-${window.innerWidth * index}px)`;
    }, []);

    const previousHandler = useCallback(() => {
        setIndex(currentIndex => {
            if((currentIndex - 1) >= 0) {
                return currentIndex - 1;
            }

            return currentIndex;
        })
    }, [  ]);

    const nextHandler = useCallback(() => {
        setIndex(currentIndex => {
            if((currentIndex + 1) < childrenList.current.length) {
                return currentIndex + 1;
            }

            return currentIndex;
        })
    }, [  ]);

    useEffect(() => {
        indexRef.current = index;
        slideHandler();
    }, [ index, indexRef, slideHandler ])

    return (
        <div className={classNames(classes.heroButtons, 'absolute flex justify-between sm:px-4 w-full')}>
            <IconButton 
                className={classNames(classes.button, "text-amber-500", { [classes.hidden]: index - 1 < 0})}
                disabled={index - 1 < 0}
                onClick={previousHandler}>
                <ArrowBackIosIcon className="text-4xl" />
            </IconButton>
            <IconButton 
                className={classNames(classes.button, "text-amber-500", { [classes.hidden]: index + 1 >= childrenList.current.length})}
                disabled={index + 1 >= childrenList.current.length}
                onClick={nextHandler}>
                <ArrowForwardIosIcon  className="text-4xl" />
            </IconButton>
        </div>
    );
};

export default ButtonsContainer;