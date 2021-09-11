import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    #root {
        height: 100vh;
        display: grid;
        grid-template-areas: 
        'header header header'
        'menu menu menu'
        'sidebar content content' 
        'footer footer footer';
        grid-template-columns: 1fr 1fr 1fr;
        /* grid-template-rows: 200px 100px minmax(400px, 500px) 100px; */
        grid-template-rows: 2fr 1fr 5fr 1fr;
        grid-gap: 10px;
        background-color: #F8F8F8;
    }

    @media (max-width: 560px) {
        #root {
            grid-template-areas: 
            'header header header'
            'menu menu menu'
            'sidebar sidebar sidebar'
            'content content content' 
            'footer footer footer';
            grid-template-rows: 200px 100px 150px minmax(500px, auto) 100px;
        }

        main {
            padding: 10px;
        }
    }

    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }
`

export const Sidebar = styled.aside`
    grid-area: sidebar;
    background-color: #181818;
    padding: 10px;
    color: #F8F8F8;
`

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    color: rgb(179, 178, 178);    
`

export const Item = styled.li`
    display: ${(props) => props.display};
    margin: 10px;
    cursor: ${(props) => props.cursor};
` 

export const Post = styled.article`
`

export const Link = styled.a`
    text-decoration: none;
    color:rgb(115, 115, 240);
    transition: 0.2s;

    :visited {
        text-decoration: none;
        color:rgb(115, 115, 240);
        transition: 0.2s;
    }

    :hover {
        color:rgb(68, 68, 235);
    }
`

export const Menu = styled.nav`
    grid-area: menu;
    background-color: #181818;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
    grid-area: header;
    background-color: #b4d2e7;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.footer`
    grid-area: footer;
    background-color: #b4d2e7;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.main`
    grid-area: content;
    background-color: #F8F8F8;
    overflow-y: scroll;

    /* custom scrollbar, doesn't work on firefox tho */
    ::-webkit-scrollbar {
    width: 15px;
    }

    ::-webkit-scrollbar-track {
    background: #181818;
    }

    ::-webkit-scrollbar-thumb {
    background: rgb(115, 115, 240);
}
`

export const Image = styled.img`
    width: 300px;
    height: auto;
    margin: 0 auto;
`

export const H1 = styled.h1``
export const H2 = styled.h2``
export const H3 = styled.h3``
export const H4 = styled.h4``
export const H5 = styled.h5``
export const H6 = styled.h6``

export const Paragraph = styled.p`
    margin: 16px 0;
`

