import style from "./Content1.module.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Content1 = () => {
  return (
    <>
      <div className={style.maindiv}>
        <h1 className={style.heading}>WHY SOFTCADIA?</h1>
        <div className={style.line}></div>
        <p className={style.para}>
          People in our Organization Our individuals help define us. Our
          capacity to always surpass our clients' expectations is made possible
          by their commitment. We are problem solvers and industry specialists,
          and we are truly engaged in your success. Softcadia has a long history
          of providing outstanding customer support. We offer low-cost,
          high-impact technology solutions and business transformation via an
          onshore strategy that guarantees a highly responsive and consistent
          experience for our customers in a market driven by service providers
          racing to the bottom.
        </p>
        <div className={style.btndiv}>
        <button type="submit" className={style.btn}>Read More  <ArrowRightAltIcon/></button>
        </div>
      </div>
    </>
  );
};

export default Content1;
