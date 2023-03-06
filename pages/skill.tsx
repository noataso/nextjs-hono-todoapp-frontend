import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '@/styles/Home.module.scss'

import Nodejs from "../Images/Nodejs.png"
import Mongodb from "../Images/Mongodb.png";
import Firebase from "../Images/Firebase.png";
import Java from "../Images/Java.png";
import Postgresql from "../Images/Postgresql.png";
import Python from "../Images/Python.png";
import Github from "../Images/Github.png";
import Mysql from "../Images/Mysql.png";
import Prisma from "../Images/Prisma.png"
import Bootstrap from "../Images/Bootstrap.png"
import Nextjs from "../Images/Nextjs.png"
import React from "../Images/React.png"
import Materialui from "../Images/Materialui.png"
import Sass from "../Images/Sass.png"
import Django from "../Images/Django.png"
import Html from "../Images/Html.png"
import Css from "../Images/Css.png"
import Javascript from "../Images/Javascript.png"
import Ruby from "../Images/Ruby.png"

import Image from "next/image";
import { motion } from "framer-motion"
import { useState } from "react";

const skill = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isDark,setIsDark]=useState(false);
    const handleToggleDark=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setIsDark(!isDark);
    }
    return (
        <>
            <div className={isDark? `${styles.darkTheme}`:`null`}
            style={{transition:"1s"}}></div>
            <Header isDark={isDark} />
            <input className={styles.toggler} onChange={(e)=>handleToggleDark(e)} type="checkbox" id="switch" name="mode" />
            <label htmlFor="switch" className={styles.switch}></label>
            <motion.div
            className='m-4 p-4 bg-black text-white'
            style={{borderRadius:"10px",height:"100%"}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
                <h1 className="mb-4">プログラミング経験</h1>
                <h2 className="mt-3">プログラミング言語</h2>
                <div className="row">
                    <div className="container mt-3 col-3">
                        <h3>HTML</h3>
                        <Image src={Html} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                        <h3>CSS</h3>
                        <Image src={Css} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                        <h3>Javascript</h3>
                        <Image src={Javascript} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                </div>
                <div className="row">
                    <div className="container mt-3 col-3">
                        <h3>Java</h3>
                        <Image src={Java} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                        <h3>Python</h3>
                        <Image src={Python} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                        <h3>Ruby</h3>
                        <Image src={Ruby} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                </div>
                <div className="row">
                    <div className="container mt-3 col-3">
                        <h3>Sass</h3>
                        <Image src={Sass} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                    </div>
                    <div className="container mt-3 col-3">
                    </div>
                </div>
                <h2 className="mt-3">データベース</h2>
                <div className="row">
                    <div className="container mt-3 col-3">
                        <h3>Firebase</h3>
                        <Image src={Firebase} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                        <h3>Mysql</h3>
                        <Image src={Mysql} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                        <h3>Mongodb</h3>
                        <Image src={Mongodb} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                </div>
                <div className="row">
                    <div className="container mt-3 col-3">
                        <h3>Postgresql</h3>
                        <Image src={Postgresql} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                        <h3>Prisma</h3>
                        <Image src={Prisma} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                    </div>
                </div>
                <h2 className="mt-3">フレームワーク</h2>
                <div className="row">
                    <div className="container mt-3 col-3">
                        <h3>Node.js</h3>
                        <Image src={Nodejs} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                        <h3>Nextjs</h3>
                        <Image src={Nextjs} style={{ width: "150px", height: "150px",borderRadius:"50%" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                        <h3>React</h3>
                        <Image src={React} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                </div>
                <div className="row">
                    <div className="container mt-3 col-3">
                        <h3>Django</h3>
                        <Image src={Django} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                        <h3>Bootstrap</h3>
                        <Image src={Bootstrap} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                        <h3>Materialui</h3>
                        <Image src={Materialui} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                </div>
                <h2 className="mt-3">その他</h2>
                <div className="row">
                    <div className="container mt-3 col-3">
                        <h3>Github</h3>
                        <Image src={Github} style={{ width: "150px", height: "150px" }} alt={""} />
                    </div>
                    <div className="container mt-3 col-3">
                    </div>
                    <div className="container mt-3 col-3">
                    </div>
                </div>
            </motion.div>
            <Footer isDark={isDark} />
        </>
    );
}

export default skill;