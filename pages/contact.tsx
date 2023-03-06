import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '@/styles/Home.module.scss'
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const contact = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const nameRef=useRef<HTMLInputElement>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const contentRef=useRef<HTMLTextAreaElement>(null);

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
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
            <motion.form
            onSubmit={(e)=>handleSubmit(e)}
            className="container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
                <h1 className={isDark? "form-label mt-3 mb-4 text-white":"form-label mt-3 mb-4"}>お問い合わせ</h1>
                <label htmlFor="name" className={isDark? "form-label mt-2 text-white":"form-label mt-2"}>お名前</label>
                <input type="text" className="form-control" id="name" ref={nameRef} placeholder="お名前" />
                <label htmlFor="contact" className={isDark? "form-label mt-2 text-white":"form-label mt-2"}>内容</label>
                <textarea name="content" className="form-control" id="content" ref={contentRef} placeholder="内容"></textarea>
                <button type="submit" className="btn btn-primary mt-3 mb-5">送信</button>
            </motion.form>
            <Footer isDark={isDark} />
        </>
    );
}

export default contact;