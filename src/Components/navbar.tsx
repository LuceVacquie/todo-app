import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Page } from '../Interface';

interface Props {
    pages: Array<Page>
}

const Navbar:FC<Props> = ({pages}) => {
    return(
        <Container>
            {pages.map((page: {name:string, href: string}) => {
                return(
                    <li key={page.name}>
                        <Link 
                            to={page.href} 
                            style={{ textDecoration: 'none', color:'whitesmoke', paddingRight: '1rem' }}>
                            {page.name}
                        </Link>
                    </li>
                )
            })}
        </Container>
    )
}

//STYLED COMPONENTS
const Container = styled.ul`
    background-color: #282c34;
    flex: 5%;
    display: flex;
    list-style-type:none;
    margin: 0;
    padding: 0;
`;

export default Navbar;

