

import Description from "src/components/description";
import Title from "src/components/title";
import Card from "./components/card";

const Blogs = () => (
    <section className="bg-neutral-900 flex flex-col items-center px-5 py-12">
        <Title>
            Bitcoin<br className="sm:hidden" /><span className="text-amber-600 sm:ml-3">news</span>
        </Title>
        <Description hasBars>
            Discover latest news about Bitcoin on our blog
        </Description>
        <div className="flex flex-col flex-wrap items-stretch justify-between mt-8 sm:px-5 md:flex-row md:px-0">
            <Card
                description="incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud..."
                image="/blog/blog-post-1.jpg"
                title="How cryptocurrency begun and its impact to financial transactions" 
            />
            <Card
                description="incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud..."
                image="/blog/blog-post-2.jpg"
                title="Cryptocurrency - who are involved with it? Words about members" 
            />
            <Card
                description="incididunt ut labore et dolore magna aliqua. Ut enim aminim veniam, quis nostrud..."
                image="/blog/blog-post-3.jpg"
                title={<>Risks amp; Rewards of invisting in Bitcoin.<br/>Pros and cons</>}
            />
        </div>
    </section>
);

export default Blogs;