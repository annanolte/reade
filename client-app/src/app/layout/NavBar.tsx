import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/bookmark-icon.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reade
                </Menu.Item>
                <Menu.Item as={NavLink} to='/books' name='Books' />
            </Container>
        </Menu>
    )
}