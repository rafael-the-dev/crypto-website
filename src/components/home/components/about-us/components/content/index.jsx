import { useCallback, useMemo, useRef, useState } from "react"

import Button from "./components/button";
import Description from "./components/description";

const ContentContainer = () => {
    const [ selected, setSelected ] = useState("MISSION");

    const ids = useRef({
        advantages: "ADVANTAGES",
        guarantees: "GUARANTEES",
        mission: "MISSION",
    });

    const advantagesDescription = useMemo(() => (
        <Description>
            Our mission as an official partner of Bitcoin Foundation is to help you enter and better understand the world of #1 cryptocurrency and avoid any issues you may encounter.
        </Description>
    ), [])
    const guaranteesDescription = useMemo(() => (
        <Description>
            We are here because we are passionate about open, transparent markets and aim to be a major driving force in widespread adoption, we are the first and the best in cryptocurrency.
        </Description>
    ), [])
    const missionDescription = useMemo(() => (
        <Description>
            Bitcoin is based on a protocol known as the blockchain, which allows to create, transfer and verify ultra-secure financial data without interference of third parties.
        </Description>
    ), [])

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
            { selected === ids.current.advantages && advantagesDescription }
            { selected === ids.current.guarantees && guaranteesDescription }
            { selected === ids.current.mission && missionDescription }
        </div>
    );
};

export default ContentContainer;