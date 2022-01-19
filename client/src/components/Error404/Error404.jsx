import React from "react";

import {Load,Text,ButtonReturn,ButtonClear,Error} from '../Loading/Loading';


function Loading (props){

    

    return (
        <Load>
            <Text>Error-404</Text>
            {
                props?.clear?
                    <ButtonClear onClick={props.refresh}>Clear</ButtonClear>
                :
                <Error>
                    <Text>Page Not Found</Text>
                    <ButtonReturn to={'/api'}>Back to Home</ButtonReturn>
                </Error>
            }

        </Load>
    )

}



export default Loading