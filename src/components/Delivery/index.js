import React from 'react'
import {
    DeliveryContainer,
    DeliveryH1,
    DeliveryP,
    DeliveryProcess,
    Item,
    Edit,
    Truck,
    PizzaSlice,
    ItemH2,
    ItemP,
    DeliveryButton
} from './DeliveryElements'

const Delivery = () => {
    return (
        <>
            <DeliveryContainer id='delivery'>
                <DeliveryH1>The Best Food Delivery Services</DeliveryH1>
                <DeliveryP>How it Works</DeliveryP>
                <DeliveryProcess>
                    <Item>
                        <Edit />
                        <ItemH2>Place your Order</ItemH2>
                        <ItemP>Order your food at home through your computer, tablet or mobile. You can order weekly menus and each week you will have your tuppers.</ItemP>
                    </Item>
                    <Item>
                        <PizzaSlice />
                        <ItemH2>Place your Order</ItemH2>
                        <ItemP>Order your food at home through your computer, tablet or mobile. You can order weekly menus and each week you will have your tuppers.</ItemP>
                    </Item>
                    <Item>
                        <Truck />
                        <ItemH2>Place your Order</ItemH2>
                        <ItemP>Order your food at home through your computer, tablet or mobile. You can order weekly menus and each week you will have your tuppers.</ItemP>
                    </Item>
                </DeliveryProcess>
                <DeliveryButton>Place your Order</DeliveryButton>
            </DeliveryContainer>

        </>
    )
}

export default Delivery
