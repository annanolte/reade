import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/bookmark-icon.png' alt='logo' style={{ marginBottom: 12 }} />
                    Reade
                </Header>
                <Header as='h2' inverted content='Welcome to Reade' />
                <Button as={Link} to='/books' size='huge' inverted>
                    Go to Books!
                </Button>
            </Container>
        </Segment>
    )
}