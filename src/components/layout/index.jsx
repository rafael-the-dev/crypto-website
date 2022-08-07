import Header from "src/components/header";
import Footer from "src/components/footer";

const LayoutContainer = ({ children }) => {
    
    return (
        <div className="root">
            <Header />
            { children }
            <Footer />
        </div>
    );
};


export default LayoutContainer;