import React from 'react'

const Note =( {content,...props}) => {
  return (
    <div style={{
        position:'absolute',
        left:0,
        right:0,
        background:'lightyellow',
        width:'20%',
        height:'20%',
        border:'2px solid green',
        padding:'5px',
        userSelect:'none',
        cursor:'move',
    }}>
        {/* {...props} */}
      🔍{content} 
      {/* window + semicoln for emoji */}
    </div>
  )
}

export default Note
