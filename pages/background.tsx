import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '@/styles/Home.module.scss'
import { motion } from "framer-motion"
import { useState } from "react";

const background = () => {
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
                <h1 className="mb-4">経歴</h1>
                <h2>アルバイト経験</h2>
                <p>塾講師を1年ほど、コンビニを合計1年半ほどやっていました。塾講師は集団式で、主に受験をする小学生や中学生を見ていました。コンビニでは、品出しや前陳、接客スキルを養うことができました。</p>
                <h2>部活動・サークル活動</h2>
                <p>中学生の時から陸上競技を続けていて、今年で11年目になります。</p>
                <h2>高校</h2>
                <p>2015年4月~2018年3月 保善高等学校(卒業)</p>
                <h2>大学</h2>
                <p>2018年4月~2022年3月 東京理科大学理工学部機械工学科(卒業)</p>
                <h2>大学院</h2>
                <p>2022年4月~2024年3月 東京理科大学大学院理工学研究科機械工学専攻(卒業見込)</p>
            </motion.div>
            <Footer isDark={isDark} />
        </>
    );
}

export default background;