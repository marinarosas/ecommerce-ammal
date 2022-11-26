import styled from "styled-components";

export const Main = styled.main`
    border: 2px solid red;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    
    section{
        border: 2px solid purple;
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-left: 19px;
        margin-right: 19px;
    }
`
export const TitleSection = styled.div`
    /* border: 2px solid red; */
    margin: 0 18px;

    hr{
        margin-top: 8px;
        margin-bottom: 16px;
    }
`
