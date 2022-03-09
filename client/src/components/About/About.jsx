import React, { useEffect, useState } from "react";
import { useLocation  } from "react-router";
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer.jsx";
import html from '../../Assets/html.svg'
import css from '../../Assets/css.svg'
import js from '../../Assets/JS.svg'
import react from '../../Assets/react.svg'
import redux from '../../Assets/redux.svg'
import styledComponents from '../../Assets/styled-components.svg'
import express from '../../Assets/expressjs.svg'
import postgresql from '../../Assets/postgresql.svg'
import nodejs from '../../Assets/node.svg'

import {Container,ContainerText,ContainerTech,ContainerAllTech
    ,ContainerEnd,TextEnd,Title,ImgTech,TitleTech} from './Abaout.js'


const frontend = [{
        name: 'JavaScript',
        link: 'https://www.javascript.com/',
        img: js
    },{
        name: 'HTML',
        link: 'https://en.wikipedia.org/wiki/HTML',
        img: html
    },{
        name: 'CSS',
        link: 'https://www.w3.org/Style/CSS/Overview.en.html',
        img: css 
    },{
        name: 'React Js',
        link: 'https://es.reactjs.org/',
        img: react 
    },{
        name: 'Redux',
        link: '',
        img: redux 
    },{
        name: 'Styled Components',
        link: 'https://styled-components.com/',
        img: styledComponents 
    }
]

const backend = [{
    name: 'Node Js',
    link: 'https://nodejs.org/es/',
    img: nodejs
},{
    name: 'Express',
    link: 'https://expressjs.com/',
    img: express
},{
    name: 'Sequelize',
    link: 'https://sequelize.org/',
    img: 'https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg'
},{
    name: 'Postgresql',
    link: 'https://www.postgresql.org/',
    img: postgresql
}
]

function Filters (props){
    return (
        <Container>
            <ContainerText>
                <Title>About <strong>V-Gamming</strong></Title>
                <p>V-Gaming is a video game app, where you can find more than 600,000 games through the 
                <a href="https://rawg.io" target="_blank" rel="noopener noreferrer">rawg.io</a> Api that provides the data(This is the reason for slow loading...)</p>
                {/* <img src="https://progsoft.net/images/rawg-a0000d4d894baa1981be32e163d549bfbb537fb3.jpg" alt="Rawg.io"/> */}
                <p>The app is an individual project from the Soy Henry bootcamp, in which I studied the Full Stack web developer career.</p>
                <p>In this project is where I apply all the knowledge learned in the bootcamp, using only React without other libraries in the Front-End, that is, the app is made with 100% css. </p>
                <p>Use the following technologies:</p>
                <div>
                    <ContainerEnd>
                        <TextEnd>Front-End</TextEnd>
                        <ContainerAllTech>
                        {frontend.map(t=>(
                            <ContainerTech href={t.link} target="_blank" rel="noopener noreferrer">
                                <ImgTech src={t.img}/>
                                <TitleTech>{t.name}</TitleTech>
                            </ContainerTech>
                        ))}
                        </ContainerAllTech>
                    </ContainerEnd>
                    <ContainerEnd>
                        <TextEnd>Back-End</TextEnd>
                        <ContainerAllTech>
                            {backend.map(t=>(
                                <ContainerTech href={t.link} target="_blank" rel="noopener noreferrer">
                                    <ImgTech src={t.img}/>
                                    <TitleTech>{t.name}</TitleTech>
                                </ContainerTech>
                            ))}
                        </ContainerAllTech>
                            
                    </ContainerEnd>
                </div>
            </ContainerText>
            
            <Footer/>
        </Container>
    ) 
}

export default Filters ;
