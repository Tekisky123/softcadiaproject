import style from "./Content2.module.css";

const Content2 = () => {
  return (
    <>
      <div className={style.maindiv}>
        <div className={style.divhead}>
          <p className={style.p}>SERVICES</p>
        </div>
        <div className={style.maindiv1}>
          <img src="business-img.png" alt="" className={style.img1} />
          <h5 className={style.h5}>Business Consulting</h5>
          <p className={style.p1}>
            From issue identification through project completion, we use our
            industry expertise and experience to assist our customers in
            achieving their strategic objectives. We can help you with anything
            from an extra pair of hands for an in-flight project to a full-scale
            execution partner.
          </p>
        </div>

        <div className={style.maindiv2}>
          <img src="client-img.png" alt="" className={style.img1} />
          <h5 className={style.h5}>Client Collaborations</h5>
          <p className={style.p1}>
            We serve a broad variety of customers in the health sciences,
            consumer goods, and retail sectors as trusted advisors. Our
            commitment to excellent customer service and providing the best
            solutions has won us the highest client satisfaction rating in the
            business.
          </p>
        </div>
        <div className={style.maindiv3}>
          <img src="technical-img.png" alt="" className={style.img1} />
          <h5 className={style.h5}>Technical Improvements</h5>
          <p className={style.p1}>
            We provide well-designed technical development solutions for
            enterprise, supply chain, quality, laboratory, data warehousing,
            customer relationship, and trade promotion management systems across
            a broad variety of platforms, applications, and technologies.
          </p>
        </div>
        <div className={style.maindiv4}>
          <img src="execution-img.png" alt="" className={style.img1} />
          <h5 className={style.h5}>Execution Testing</h5>
          <p className={style.p1}>
            In today's interconnected world, a single technological breakdown
            may create a cascade of problems for your company. Softcadia testing
            development and execution services ensure that your landscape
            maintains a constant level of technical excellence.
          </p>
        </div>
      </div>
    </>
  );
};
export default Content2;
