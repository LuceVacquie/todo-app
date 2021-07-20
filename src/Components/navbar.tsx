import React, { FC } from 'react';
import styled from 'styled-components';
import { Page } from '../Interface';

const Container = styled.div`
    background-color: #282c34;
`;

const Navbar = (props: {pages: Array<Page>}) => {
    return(
        <Container>
            {pages.map((page: {name:string, href: string}) => {
                return(
                    <li key={page.name}>
                        <a href={page.href}>{page.name}</a>
                    </li>
                )
            })}
        </Container>
    )
}

export default Navbar;