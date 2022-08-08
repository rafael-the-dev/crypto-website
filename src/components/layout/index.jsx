import Header from "src/components/header";
import Footer from "src/components/footer";
import GetStarted from "src/components/get-started";

const LayoutContainer = ({ children }) => {
    
    return (
        <div className="root">
            <Header />
            <main>
                { children }
                <GetStarted />
            </main>
            <Footer />
        </div>
    );
};


export default LayoutContainer;