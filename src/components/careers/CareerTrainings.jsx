import style from './CareerTrainings.module.css'
import { Button, Card } from 'react-bootstrap';
import { FcSearch } from "react-icons/fc";
import { GrFormLocation } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
import axios from 'axios';
import { useEffect, useState } from 'react';

const CareerTraining = () => {
    const [data , setData] = useState([])
    const [query , setQuery] = useState([])
    const [searchInput, setSearchInput] = useState('');
    // const [filterproduct , setFilterproduct] = useState(data)

    const handleinputsearch = (e) => {
        const inputval = e.target.value;
        setSearchInput(inputval)
        const filtered = data.filter(t=>t.title.toLowerCase().includes(inputval.toLowerCase())
            );
            setQuery(filtered)
    }

    useEffect(()=>{
        axios.get("http://localhost:5000/softcadia/training/traininglist").then((res)=>{
            setData(res.data)
            setQuery(res.data)
       }).catch((err)=>{
   alert(err);
       })
    },[]);

    const currentdate = new Date().toLocaleDateString();
    // const current= new Date().toJSON();
    

   

    return(
        <>
        <div className={style.maindiv}>
            
        
            <div className={style.main1div}>
            <div>
                <input type="search" name="" className={style.searchinpt} value={searchInput} onChange={handleinputsearch} /> <button type="submit"><FcSearch /> Search jobs now</button>
                {/* <FcSearch /> */}
            </div>
            <div className={style.scroller}>
                {data.map((value , index)=>{
                    return(
                        <Card key={index}>
                        <Card.Header as="h5">JOBS</Card.Header>
                        <Card.Body>
                          <Card.Title>{value.title}</Card.Title>
                          <Card.Text>
                            {value.offered} <span><IoMdTime />{currentdate} </span>
                          </Card.Text>
                          <Card.Text>
                            {value.duration} {""} {value.details}
                          </Card.Text>
                          <Card.Text> <GrFormLocation/>
                            {value. location} 
                          </Card.Text>
                          <Button variant="primary">Apply Now</Button>
                        </Card.Body>
                      </Card>
                    )
                })}
           
    
            </div>
            </div>
            
        </div>
        </>
    )
};

export default CareerTraining