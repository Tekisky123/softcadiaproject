import style from './Cards.module.css'

const Cards = () => {
    const cards = [
        {
            image : "christie.jpg",
            content :"Excellent service.",
            Ratings : '⭐️⭐️⭐️⭐️⭐️',
            name:"DR. CHRISTIE"
            
        },
        {
            image : "garland.jpg",
            content :"The service provided is of high quality.",
           Ratings : '⭐️⭐️⭐️⭐️',
            name:"DR. CHRISTIE"
            
        },
        {
            image : "lamere.jpg",
            content :"Softcadia is really great. Top quality services and very friendly.",
           Ratings : '⭐️⭐️⭐️⭐️⭐️',
            name:"DR. LAMERE"
            
        },
        {
            image : "jessica.jpg",
            content :"I was able to grab my dream job with the help of softcadia. ",
           Ratings : '⭐️⭐️⭐️',
            name:"DR. JASSICA"
            
        },
        {
            image : "jasmin.jpg",
            content :"highly satisfied.",
           Ratings : '⭐️⭐️⭐️⭐️⭐️',
            name:"DR. JASMIN"
            
        },

    ] 
    return(
        <>

       <div className={style.cardcontainer}>
        {cards.map((value , index)=>{
            return (
                <div className={style.carddiv} key={index}>
                <img src={value.image} alt="" className={style.img} />
                <h3>{value.name}</h3>
                <p>  {value.content}</p>
                <p> Ratings : {value.Ratings}</p>
                <h6>by : {value.name}</h6>
            </div>
            )
        })}
        </div>
        </>
    )
};

export default Cards;

{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16" className={style.star}>
<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg> */}

{/* <div className={style.carddiv}>
<img src='christie.jpg' alt="" className={style.img} />
<h2>DR. CHRISTIE</h2>
<p>
Excellent service
</p>
<p>
    Ratings : ⭐️⭐️⭐️⭐️⭐️
</p>

<h6>by <br /> DR. CHRISTIE</h6>

</div> */}