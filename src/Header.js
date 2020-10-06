import React from 'react'

export default function Header(props) {
    const { fullHeader} = props;

    return (
        <div>
            
                <h1 className="col-4 mx-auto mt-4">{fullHeader[0]}</h1>
                <h2 className="col-4 mx-auto mt-4">{fullHeader[1]}</h2>
                 <h2 className="col-4 mx-auto mt-4">{fullHeader[2]}</h2>
        
            
        </div>
    )
}
