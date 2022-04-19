import React from 'react'

export default function StudentsList({props, count}) {
  return (
    <div>
        
        <tr>
            <td>{count}</td>
            <td>{props.name}</td>
            <td>{props.BtNo}</td>
            <td>{props.RollNo}</td>
        </tr>
        

    </div>
  )
}
