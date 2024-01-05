import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const TableJobs = ({
  data,
  setData,
  setEdit,
  reset,
  setShow,
  refetch,
  setRefetch,
  
}) => {
  // console.log(data)
  useEffect(() => {
    
    //setLoading(true);
    axios
      .get("http://localhost:5000/softcadia/job/joblist")
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
      .delete(`http://localhost:5000/softcadia/job/jobdelete/${id}`)
      .then((res) => {
        if (res) {
          return setRefetch(!refetch);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Skills</th>
            <th>Company</th>
            <th>JobLocation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.skills}</td>
                <td>{value.company}</td>
                <td>{value.joblocation}</td>
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
    </>
  );
};
export default TableJobs;

// axios
// .post(`http://localhost:5000/softcadia/job/jobedit/${value._id}`, data)
// console.log(value._id)
// .then((res) => {
//   if (res) {
//     setShow(!show)
//     reset(value);
//     setEdit({});
//   }
// });

// if (value.id === edit.id) {
//   return (
//     <tr>
//       <td>{index + 1}</td>
//       <td colSpan="5">
//         <form action="" onSubmit={handleSubmit(onEdit)}>
//           <td>
//             <input type="text" {...register("title")} />
//           </td>
//           <td>
//             <input
//               type="text"
//               name="skills"
//               {...register("skills")}
//             />
//           </td>
//           <td>
//             <input
//               type="text"
//               name="company"
//               {...register("company")}
//             />
//           </td>
//           <td>
//             <input
//               type="text"
//               name="joblocation"
//               {...register("joblocation")}
//             />
//           </td>
//           <Button variant="primary" onClick={() => onEdit(value)}>
//             Edit
//           </Button>{" "}
//           <Button
//             variant="primary"
//             style={{ backgroundColor: "red" }}
//           >
//             Delete
//           </Button>
//         </form>
//       </td>
//     </tr>
//   );
// } else {
//   return (
//     <tr>
//       <td>{index + 1}</td>
//       <td>{value.title}</td>
//       <td>{value.skills}</td>
//       <td>{value.company}</td>
//       <td>{value.joblocation}</td>
//       <td>
//         {" "}
//         <Button variant="primary" onClick={() => onEdit(value)}>
//           Edit
//         </Button>{" "}
//         <Button
//           variant="primary"
//           style={{ backgroundColor: "red" }}
//         >
//           Delete
//         </Button>
//       </td>
//     </tr>
//   );
// }
