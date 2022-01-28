import React,{useState}  from "react";

import {SiLinkedin} from 'react-icons/si';
import {VscGithubInverted} from 'react-icons/vsc';

import {Container,ContainerIcons} from './Footer';


function Footer (){
    const [bgColour, setBgColour] = useState("#fcfcfc");
    const [dgColour, setdgColour] = useState("#fcfcfc");

    
    const fontStyles = {color: `${bgColour}`, fontSize: '40px'}
    const fontStyle = {color: `${dgColour}`, fontSize: '40px'}


    return (
        <Container> 
            
            <ContainerIcons>

                <a href="https://www.linkedin.com/in/pablo-alejandro-kazalukian-02661721b/" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin 
                    style={fontStyles}
                    onMouseEnter={() => setBgColour("#dd163b")}
                    onMouseLeave={() => setBgColour("#fcfcfc")}/>
                </a>

                <a href="https://github.com/PabloKazalukian/PI-Videogames" target="_blank" rel="noopener noreferrer">
                    <VscGithubInverted 
                        style={fontStyle}
                        onMouseEnter={() => setdgColour("#dd163b")}
                        onMouseLeave={() => setdgColour("#fcfcfc")}
                    />
                </a>
            </ContainerIcons>
            <hr />
            <p> Developed by <a href="https://github.com/PabloKazalukian" target="_blank" rel="noopener noreferrer">Pablo Kazalukian</a></p>
        </Container>
    )

}



export default Footer