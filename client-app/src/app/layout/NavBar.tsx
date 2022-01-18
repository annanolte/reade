import React, { Component } from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/bookmark-icon.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reade
                </Menu.Item>
                <Menu.Item name='Books' />
                <Menu.Item>
                    <Button positive content='Create Book' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}