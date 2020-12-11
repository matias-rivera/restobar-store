import React from 'react'
import ImgForm from '../../images/pizza.jpg'
import {
    NewsletterContainer,
    Title,
    Subtitle,
    FormContainer,
    Image,
    Form,
    FormTitle,
    FormSubtitle,
    FormGroup,
    FormLabel,
    FormInput,
    FormButton,
    FormError
} from './NewsletterElements'

const Newsletter = () => {
    return (
        <NewsletterContainer>
            <Subtitle>Do you want to know more about us?</Subtitle>
            <Title>SUBSCRIBE, EVERY WEEK WE HAVE OFFERS FOR YOU</Title>
            <FormContainer>
                <Image src={ImgForm} alt='Place'/>
                <Form>
                    <FormTitle>Subscribe to our list</FormTitle>
                    <FormSubtitle>Newsletter</FormSubtitle>
                    <FormError></FormError>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormInput/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Name</FormLabel>
                        <FormInput/>
                    </FormGroup>
                    <FormButton>Subscribe</FormButton>
                </Form>
            </FormContainer>
        </NewsletterContainer>
    )
}

export default Newsletter
