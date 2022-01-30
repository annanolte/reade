import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer(function NavBar() {
    const {userStore: {user, logout}} = useStore();
    return (
        <Menu borderless inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/reade-logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Reade
                </Menu.Item>
                <Menu.Item as={NavLink} to='/books' name='Search' icon='search'/>
                <Menu.Item as={NavLink} to='/browse' name='Browse' icon='book'/>
                <Menu.Item position='right'>
                    <Icon name='user' size='large' />
                    <Dropdown pointing='top right'>
                        <Dropdown.Menu>
                            <Dropdown.Header>Hi, {user?.username}!</Dropdown.Header>
                            <Dropdown.Item as={NavLink} to={`/profile/${user?.username}`} text='My Bookshelf' icon='bookmark'/>
                            <Dropdown.Item onClick={logout} text='Logout' icon='power'></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
})