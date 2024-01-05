import style from './Footer.module.css';

const Footer = () => {
    return (
        <>
        <div className={style.bgimg}>
        <div className={style.bgdiv}>
            <div className={style.div1}>
                <h2 className={style.h}>CONSULTING SERVICE</h2>
                <p className={style.p}>We are providing wide range of Consulting Services & World wide happy Clients</p>
                <button type="submit" className={style.btn}>START YOUR PROJECT NOW</button>
            </div>
        </div>
        </div>
        <div className={style.middlediv}>
            <h1 className={style.h}>NEWS LETTER</h1>
            <p className={style.p}>Enter your email address for getting updates</p>
            <input type="email" name="" id="" placeholder='Email Address'className={style.inpt} /><button type="submit" className={style.inptbtn}>Subscribe</button>
        </div>
        <div className={style.footerdiv}></div>
        </>
    )
};
export default Footer;