import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
    }
`

export const Form = styled.form``

export const Paragraph = styled.p``

export const Label = styled.label``

export const Input = styled.input`
    border-radius: 0px;
    border: 1px solid #e5edf6;
    padding: 10px 5px;
    margin: 10px;
    ::placeholder {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #67798c;

    }
`

export const Button = styled.button`
    background-color: palegoldenrod;
    border-radius: 10px;
    border: 0px;
    padding: 10px;
    margin: 0 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    cursor: pointer;
`

export const UserMsg = styled.div`
    margin-top: 20px;
`

export const Table = styled.table`
    margin: 0 auto;
    margin-top: 50px;
    width: 900px;
    border-collapse: collapse;

    th {
        width: 150px;
        background-color: #e5edf6;
        padding: 10px;
    }

    td {
        max-width: 150px;
        word-wrap: break-word;
        padding: 10px;
    }

    td:last-child {
        border-right: 0px;
    }
`

export const THead = styled.thead`  
`

export const TBody = styled.tbody`
`

export const Th = styled.th`
    width: 150px;
    background-color: #e5edf6;
`

export const Tr = styled.tr`
    :nth-child(even) {
        background-color: #e5edf6;
    }
`

export const Td = styled.td`
`

export const Img = styled.img`
    width: 130px;
    height: auto;
`