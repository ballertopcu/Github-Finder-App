import React from 'react'
import loading from './loading1.gif'


const Loading = () => {
    return (
       
            <React.Fragment>
            <img src={loading} alt="Loading..." style={{width:"350px",display:"block",margin:"auto"}}/>
            </React.Fragment>
        
    )
}

export default Loading;