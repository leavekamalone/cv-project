import React from 'react'

export default function Edu(props) {
    const { fullEdu} = props;

    return (
        <div class="border">
            
                <h1 className="col-4 mx-auto mt-4">{fullEdu[0]}</h1>
                <h1 className="col-4 mx-auto mt-4">{fullEdu[1]}</h1>
                 <h2 className="col-4 mx-auto mt-4">{fullEdu[2]}</h2>
                 <h2 className="col-4 mx-auto mt-4">{fullEdu[3]}</h2>
        
            
        </div>
    )
}
