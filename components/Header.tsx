import Link from "next/link";
import { motion } from "framer-motion"
import { ReactNode, useCallback, useState } from "react";
import styles from "./Header.module.scss"
import { useRouter } from "next/router";


const Header = () => {
    const router=useRouter();
    const handleLoginPage=()=>{
        router.push(`/account/login`)
    }
    const handleRegisterPage=()=>{
        router.push(`/account/register`)
    }
    const handleLogout=()=>{
        if(localStorage){
            localStorage.removeItem("username")
        }
    }
    return (
        <>
            <header className="text-white bg-black font-bold h-20">
                <nav>
                    {/* {localStorage?
                        !localStorage.getItem("username") || localStorage.getItem("username")===""?
                        <ul>
                            <li><button onClick={handleLoginPage}>ログイン</button></li>
                            <li><button onClick={handleRegisterPage}>登録</button></li>
                        </ul>
                        :
                        <ul>
                            <li><button onClick={handleLogout}>ログアウト</button></li>
                        </ul>
                    :""} */}
                </nav>
            </header>
        </>
    );
}

export default Header;