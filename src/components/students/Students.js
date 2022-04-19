import React, { useContext } from 'react'
import { useState } from 'react'
// import './Students.css'
import { data } from "./data"
import StudentList from './StudentList'

export default function Students() {
  const [Students, setStudents] = useState(data)
  const [name, setName] = useState("")
  const [BtNo, setBtNo] = useState("")
  const [RollNo, setRollNo] = useState("")



  const ctaHandler = () =>{  
  let Students = {
  name,
  BtNo,
  RollNo
}  
console.log("students", Students)

  }

  return (

    <div>
<h1>Add New Students</h1>

<input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
<input type="text" placeholder='Batch-No' onChange={(e)=>setBtNo(e.target.value)}/>
<input type="text" placeholder='Roll-No' onChange={(e)=>setRollNo(e.target.value)}/>
<button onClick={ctaHandler}>Submit</button>
<hr/>


      <table>
      <h1>List Of Students</h1>
        <tr>
          <th>Sr #</th>
          <th>Student Name</th>
          <th>Batch No</th>
          <th>Roll No</th>
        </tr>
<tr>
  <td>
        {

          Students.map((item, count) => {
return <StudentList count={count} props={item}/>

          })

        }

</td>

</tr>
      </table>
    </div>

  )




}