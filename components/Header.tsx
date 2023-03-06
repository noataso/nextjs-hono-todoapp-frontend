import Link from "next/link";
import { motion } from "framer-motion"
import { ReactNode, useCallback, useState } from "react";
import styles from "./Header.module.scss"


const Header = ({isDark}:{isDark:ReactNode}) => {
    const [isShow,setIsShow]=useState(false);
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }
    return (
        <>
        <nav className={isDark? "navbar navbar-expand-lg bg-black":"navbar navbar-expand-lg navbar-light bg-light"}
        style={{transition:"1s"}}>
            <div className="container-fluid">
                <h2>
                    <Link className={isDark? "navbar-brand text-white ms-3":"navbar-brand ms-3"} href="/">私のポートフォリオ</Link>
                </h2>
                <button className={isDark? "navbar-toggler bg-white":"navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                onClick={()=>setIsShow(isShow=>!isShow)}
                style={{position:"absolute",zIndex:"20",right:"10px",top:"10px"}}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
                        <motion.li
                        className="nav-item"
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}>
                        <Link className={isDark? "nav-link active text-white":"nav-link active"} aria-current="page" href="/">ホーム</Link>
                        </motion.li>
                        <motion.li
                        className="nav-item"
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}>
                        <Link className={isDark? "nav-link active text-white":"nav-link active"} aria-current="page" href="/background">経歴</Link>
                        </motion.li>
                        <motion.li
                        className="nav-item"
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}>
                        <Link className={isDark? "nav-link active text-white":"nav-link active"} aria-current="page" href="/skill">スキル</Link>
                        </motion.li>
                        <motion.li
                        className="nav-item"
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}>
                        <Link className={isDark? "nav-link active text-white":"nav-link active"} aria-current="page" href="/contact">お問い合わせ</Link>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </nav>
        <motion.div style={{position:"fixed",height:"100vh",width:"100%",top:"0",left:"0",
        backgroundColor:"rgba(0,0,0,0.5)",opacity:"",textAlign:"center",zIndex:"2"}}
        variants={variants}
        animate={isShow? "open":"closed"}>
            <ul className="navbar-nav"
            style={{top:"50%",transform:"translateY(50%)"}}>
                <motion.li
                className="nav-item text-danger"
                style={{fontSize:"2rem",fontWeight:"bold"}}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}>
                <Link className="nav-link active" aria-current="page" href="/">ホーム</Link>
                </motion.li>
                <motion.li
                className="nav-item text-danger"
                style={{fontSize:"2rem",fontWeight:"bold"}}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}>
                <Link className="nav-link active" aria-current="page" href="/background">経歴</Link>
                </motion.li>
                <motion.li
                className="nav-item text-danger"
                style={{fontSize:"2rem",fontWeight:"bold"}}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}>
                <Link className="nav-link active" aria-current="page" href="/skill">スキル</Link>
                </motion.li>
                <motion.li
                className="nav-item text-danger"
                style={{fontSize:"2rem",fontWeight:"bold"}}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}>
                <Link className="nav-link active" aria-current="page" href="/contact">お問い合わせ</Link>
                </motion.li>
            </ul>
        </motion.div>
        </>
    );
}

export default Header;