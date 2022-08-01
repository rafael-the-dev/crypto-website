import { useCallback, useRef, useState } from "react"

import Button from "./components/button";

const ContentContainer = () => {
    const [ selected, setSelected ] = useState("MISSION");
    const ids = useRef({
        advantages: "ADVANTAGES",
        guarantees: "GUARANTEES",
        mission: "MISSION",
    });

    const clickHandler = useCallback(prop => () => setSelected(prop), [])

    return (
        <div className="mt-6">
            <div className="flex flex-col items-stretch">
                <Button 
                    id={ids.current.mission}
                    onClick={clickHandler(ids.current.mission)}
                    selectedId={selected}>
                    Misson
                </Button>
                <Button 
                    id={ids.current.advantages}
                    onClick={clickHandler(ids.current.advantages)}
                    selectedId={selected}>
                    Our advantages
                </Button>
                <Button 
                    id={ids.current.guarantees}
                    onClick={clickHandler(ids.current.guarantees)}
                    selectedId={selected}>
                    Our guarantees
                </Button>
            </div>
        </div>
    );
};

export default ContentContainer;