import React from "react";

import {Button, Span,Container,Text,Title} from './LandingPage'


//  <Image src='https://wallpapercave.com/wp/BFFsnBO.jpg' /> 
function LandingPage(){
    return(
    <Container>
        <Text>
            <Title> V-Gamming</Title>
        </Text>
        <Button  to={'/Api'}><Span>Start</Span></Button>

    </Container>
    )

}

export default LandingPage;