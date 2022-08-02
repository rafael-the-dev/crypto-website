import { useCallback, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ButtonsContainer = ({ setChildrenLengthRef, indexRef, slideHandler }) => {
    const [ index, setIndex ] = useState(0);
    const [ childrenLength, setChildrenLength ] = useState(0);
    
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
            if((currentIndex + 1) < childrenLength) {
                return currentIndex + 1;
            }

            return currentIndex;
        })
    }, [ childrenLength ]);

    useEffect(() => {
        setChildrenLengthRef.current = value => setChildrenLength(value);
    }, [ setChildrenLengthRef ]);

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
                className={classNames(classes.button, "text-amber-500", { [classes.hidden]: index + 1 >= childrenLength})}
                disabled={index + 1 >= childrenLength}
                onClick={nextHandler}>
                <ArrowForwardIosIcon  className="text-4xl" />
            </IconButton>
        </div>
    );
};

export default ButtonsContainer;