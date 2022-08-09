import classNames from "classnames";

const Hero = ({ children }) => {

    return (
        <section 
            className={classNames("before-after-border bg-cover bg-center bg-no-repeat flex items-center justify-center hero")}>
            { children }
            <style jsx>
                {
                    `
                        .hero {
                            background-image: linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .5)), url(/backgrounds/bg-banner.jpg);
                            height: 280px;
                        }
                    `
                }
            </style>
        </section>
    );
};

export default Hero;