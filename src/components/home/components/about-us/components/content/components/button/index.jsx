import { Button } from "@mui/material";
import classNames from "classnames";

const ButtonContainer = ({ children, id, onClick, selectedId }) => (
    <Button 
        className={classNames("border border-solid py-2 rounded-none sm:border-0 sm:border-r sm:py-0 sm:text-base sm:first:pl-0 sm:px-6 sm:last:border-0", 
        { "border-y-0 first:border-b-0 last:border-t-0": id === "ADVANTAGES" },
        id === selectedId ? "bg-amber-600 border-amber-600 text-white hover:bg-amber-600 sm:bg-transparent sm:hover:sm:bg-transparent sm:border-gray-500 sm:text-amber-600 sm:font-bold" : "bg-transparent border-gray-500 text-gray-400" )}
        onClick={onClick}>
        { children }
    </Button>
);

export default ButtonContainer;