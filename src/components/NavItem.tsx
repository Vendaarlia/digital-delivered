import Link from "next/link";

interface NavItemProps {
    text: string;
    href: string;
    active?: boolean; // Opsional, jika properti ini tidak selalu disertakan
}

const NavItem: React.FC<NavItemProps> = ({ text, href, active }) => {
    return (
        <Link href={href}>
            <a className={`nav_link`}>{text}</a>
        </Link>
    );
};

export default NavItem;
