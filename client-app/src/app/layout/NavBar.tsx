import { observer } from 'mobx-react-lite';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Dropdown, Icon, Item, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer(function NavBar() {
    const {userStore: {user, logout}} = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/bookmark-icon.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reade
                </Menu.Item>
                <Menu.Item as={NavLink} to='/books' name='Books' />
                <Menu.Item as={NavLink} to='/errors' name='Errors' />
                <Menu.Item as={NavLink} to='/search' name='Search' />
                <Menu.Item position='right'>
                    <Icon name='user' size='large' />
                    <Dropdown pointing='top left' text={user?.username}>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={logout} text='Logout' icon='power'></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
})