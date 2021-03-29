import React from 'react'
import ImgPlace from '../../images/place-small.jpg'
import { 
    AboutContainer, 
    TextContainer, 
    TextDescription, 
    TextH1, 
    TextQuote, 
    TextSub,
    Image 
} from './AboutElements'


const About = () => {
    return (
        <AboutContainer id='about'>
            <Image src={ImgPlace} alt='Red Shark Place'/>
            <TextContainer>
                <TextSub>Food Delivery</TextSub>
                <TextH1>Red Shark Restobar</TextH1>
                <TextQuote>"The secret of our dishes is made up of the quality of the products, the value of what is homemade without haste, and the love we put into our stoves."</TextQuote>
                <TextDescription>Hay muchas variaciones de los pasajes de Lorem Ipsum. Hay muchas variaciones de los pasajes de Lorem Ipsum dispo  Hay muchas variaciones de los pasajes de Lorem Ipsum dispo</TextDescription>
                <TextDescription>Hay muario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc.</TextDescription>
            </TextContainer>
        </AboutContainer>
    )
}

export default About
