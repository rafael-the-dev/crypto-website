import { Button } from "@mui/material";
import classNames from "classnames";

const ButtonContainer = ({ children, id, onClick, selectedId }) => (
    <Button 
        className={classNames("border border-solid py-2 rounded-none ", 
        { "border-y-0 first:border-b-0 last:border-t-0": id === "ADVANTAGES" },
        id === selectedId ? "bg-amber-600 border-amber-600 text-white hover:bg-amber-600" : "bg-transparent border-gray-500 text-gray-400" )}
        onClick={onClick}>
        { children }
    </Button>
);

export default ButtonContainer;