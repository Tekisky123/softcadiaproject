import { Carousel } from "react-bootstrap";
import style  from './Carousel.module.css';

const CarouselImg = () => {
    return(
        <>
        <div >
         <Carousel data-bs-theme="dark"  >
      <Carousel.Item>
        <img
        
          className="d-block w-100"
          src="banner1.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 className={style.h1}>  NUMBER ONE</h1>
        <h5 className={style.h5}>BUSINESS CONSULTANCY</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className={style.h1}>  NUMBER ONE</h1>
          <h5 className={style.h5}>BUSINESS CONSULTANCY</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className={style.h1}>  NUMBER ONE</h1>
          <h5 className={style.h5}>BUSINESS CONSULTANCY</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
        </>
    )
};

export default CarouselImg