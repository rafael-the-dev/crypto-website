import { useRouter } from "next/router";
import { useEffect } from "react";

const ContactContainer = () => {
    const router = useRouter();
   
    useEffect(() => {
        router.push("/")
    }, [ router ]);

    return <></>;
};

export default ContactContainer;