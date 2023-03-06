import Link from "next/link"
import { ReactNode } from "react";
import styles from "./Footer.module.scss"

const Footer = ({isDark}:{isDark:ReactNode}) => {
    return (
        <footer className={isDark? "bg-black py-4":"bg-light py-4"}
        style={{width:"100%",height:"100%",}}>
            <div className="container text-center">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className={isDark? "nav-link active text-white":"nav-link active"} aria-current="page" href="/">ホーム</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={isDark? "nav-link active text-white":"nav-link active"} aria-current="page" href="/background">経歴</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={isDark? "nav-link active text-white":"nav-link active"} aria-current="page" href="/skill">スキル</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={isDark? "nav-link active text-white":"nav-link active"} aria-current="page" href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;