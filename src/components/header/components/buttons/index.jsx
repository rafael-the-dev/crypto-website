import Button from "@mui/material/Button"
import classNames from "classnames"

import classes from "./styles.module.css"

const ButtonsContainer = () => (
    <>
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
    </>
);

export default ButtonsContainer;