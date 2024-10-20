"use client";
import { usePathname } from "next/navigation";
import NavLinks from "../ui/dashboard/nav-links";
import Link from "next/link";
import "./style.css";
const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "ForgetPassword", href: "/forgetPassword"},
];
export default function AuthLayout({
    children,
}: {
    children:React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <div>
            {
                navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <Link href={link.href} key={link.name}
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                            {link.name}
                        </Link>

                    );
                })
            }
            {children}
            <h1>hello</h1>
        </div>
    )
}