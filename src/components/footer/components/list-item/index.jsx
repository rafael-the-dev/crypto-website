import Link from "src/components/link";

const ListItem = ({ children, href }) => (
    <li className="list-item mb-2">
        <Link
            className="opacity-90 text-white uppercase" 
            href={href}>
            { children }
        </Link>
        <style jsx>
            {
                `
                    .list-item {
                        width: 50%;
                    }

                    @media screen and (min-width: 768px) {
                       .list-item {
                            width: 100%;
                       }
                    }
                `
            }
        </style>
    </li>
);

export default ListItem;