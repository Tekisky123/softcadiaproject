import { Button, Card } from "react-bootstrap";
import style from "./CareerJobs.module.css";
import { FcSearch } from "react-icons/fc";
import { GrFormLocation } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";

import axios from "axios";
import { useEffect, useState } from "react";

const CareerJobs = () => {
  const [data, setData] = useState([]);
  const [selectedcategories, setSelectedcategories] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/softcadia/job/joblist")
      .then((res) => {
        setData(res.data);
        // setSelectedcategories(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const currentdate = new Date().toLocaleDateString();

  const handlecheckboxchange = (category) => {
    if (searchItem) {
      setSearchItem("");
    }

    if (selectedcategories.includes(category)) {
      setSelectedcategories(selectedcategories.filter((c) => c !== category));
    } else {
      setSelectedcategories([...selectedcategories, category]);
    }
  };

  const handlesearchchange = (e) => {
    setSearchItem(e.target.value);
    setSelectedcategories([]);
  };

  const filterdata = selectedcategories.length
    ? data.filter(
        (item) =>
          selectedcategories.includes(item.remote) ||
          selectedcategories.includes(item.employee)
      )
    : data.filter(
        (item) =>
          item.title.toLowerCase().includes(searchItem.toLowerCase()) ||
          item.skills.toLowerCase().includes(searchItem.toLowerCase())
      );

  return (
    <>
      <div className={style.maindiv}>
        <div className={style.radio}>
          <h2>Advanced Search</h2>
          <form>
            <h4>Remote Options</h4>
            {[
              "Remote Only",
              "Exclude Remote",
              "Work From Home Available",
              "Full-time",
              "Part-time",
              "Contract",
              "Third Party",
            ].map((category) => (
              <label key={category}>
                <input
                  type="checkbox"
                  name="remote"
                  value={category}
                  checked={selectedcategories.includes(category)}
                  onChange={() => handlecheckboxchange(category)}
                />
                {category}
              </label>
            ))}

            <br />
          </form>
        </div>
        <div className={style.main1div}>
          <div className={style.main2div}>
            <input
              type="search"
              name=""
              className={style.searchinpt}
              value={searchItem}
              onChange={handlesearchchange}
              placeholder="Search jobs now"
            />
          </div>
          <div className={style.scroller}>
            {/* filteredData|| */}
            {filterdata.map((value, index) => {
              return (
                <Card key={index} >
                  <Card.Header as="h5">JOBS</Card.Header>
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>
                      {value.employee}{" "}
                      <span>
                        <IoMdTime />
                        {currentdate}{" "}
                      </span>
                    </Card.Text>
                    <Card.Text>{value.skills}</Card.Text>
                    <Card.Text>{value.remote}</Card.Text>
                    <Card.Text>
                      {" "}
                      <GrFormLocation />
                      {value.joblocation}
                    </Card.Text>
                    <Button variant="primary">Apply Now</Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerJobs;
