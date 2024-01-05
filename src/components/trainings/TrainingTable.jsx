import tableStyle from "./TrainingTable.module.css"
import {Button, Table} from "react-bootstrap"
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from "react";
import axios from "axios";

const TableTraining=({
  data,
  setData,
  setEdit,
  reset,
  setShow,
  refetch,
  setRefetch,
})=>{

  // const [showtable,settable]= useState(false)
  useEffect(() => {
    
    //setLoading(true);
    axios
      .get("http://localhost:5000/softcadia/training/traininglist")
      .then((res) => {
        setData(res.data);
        setRefetch(!refetch)
        //setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [refetch]);

  const onEdit = (value) => {
    reset(value);
    setEdit(true);
  };

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:5000/softcadia/training/trainingdelete/${id}`)
      .then((res) => {
        if (res) {
          return setRefetch(!refetch);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };



  return(
    <>
    <div className={tableStyle.bgdiv} >
      
    <div className={tableStyle.t}>
      
    <Table striped bordered hover>
        <thead>
          <tr>
          <th>#</th>
              <th>Title</th>
              <th>Training Offered By</th>
              <th>Summary</th>
              <th>Details</th>
             

          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
             console.log(value.title)
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.offered}</td>
                <td>{value.summary}</td>
                <td>{value.details}</td>
                
                <td>
                  {" "}
                  <Button
                    variant="primary"
                    onClick={() => {
                      setShow(true);
                      onEdit(value);
                    }}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="primary"
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      onDelete(value._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
        
        
      </div>

    </div>
    </>
  )
}

export default TableTraining