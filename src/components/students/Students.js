import React, { useContext } from 'react'
import { useState } from 'react'
import './Students.css'
import { data } from "./data"
import StudentList from './StudentList'

export default function Students() {
  const [Students, setStudents] = useState(data)

  return (

    <div>
      <table>
        <tr>
          <th>Sr #</th>
          <th>Student Name</th>
          <th>Batch No</th>
          <th>Roll No</th>
        </tr>
<tr>
  <td>
        {

          Students.map((item) => {
return <StudentList props={item}/>

          })

        }

</td>

</tr>
      </table>
    </div>

  )




}