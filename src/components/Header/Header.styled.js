import styled from "styled-components";

export const HeaderContainer = styled.header`
    /* border: 2px solid black; */
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;

    button{
        background-color: #518FD8;
        border: none;
        width: 50px;
        height: 42px;
        margin: 0 4px;
        border-radius: 16px;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }

        :active{
            filter: brightness(0.95);
        }
    }
`

export const ButtonGroup = styled.div`
    /* border: 2px solid purple; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
`
export const Logo = styled.a`
    /* border: 2px solid blue; */
    margin-left: 19px;
    font-size: 20px;
    padding: 8px;
`
export const InputSearch = styled.div`
    /* border: 2px solid green; */
    display: flex;
    align-items: center;
    padding: 8px;
    input{
        width: 788px;
        height: 40px;
        border-radius: 8px;
        border: none;
        background-color: white;
    }
    
    input::placeholder{
        padding: 8px;
    }


`
