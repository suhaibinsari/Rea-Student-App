import React from 'react'

export default function StudentsList({props}) {
  return (
    <div>
        
        <tr>
            <td>{props.name}</td>
            <td>{props.BtNo}</td>
            <td>{props.RollNo}</td>
            <td>{props.rollNo}</td>
        </tr>
        

    </div>
  )
}
