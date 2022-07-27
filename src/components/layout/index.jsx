import Header from "src/components/header";

const LayoutContainer = ({ children }) => {
    
    return (
        <div className="root">
            <Header />
            { children }
        </div>
    );
};


export default LayoutContainer;