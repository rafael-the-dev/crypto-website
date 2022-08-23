import Header from "src/components/header";
import Footer from "src/components/footer";
import GetStarted from "src/components/get-started";

import LoadingContainer from "../loading";

const LayoutContainer = ({ children }) => {
    
    return (
        <div className="root">
            <LoadingContainer />
            <Header />
            <main className="bg-neutral-900">
                { children }
                <GetStarted />
            </main>
            <Footer />
        </div>
    );
};


export default LayoutContainer;