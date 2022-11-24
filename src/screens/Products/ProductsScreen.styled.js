import styled from "styled-components";

export const Main = styled.main`
    border: 2px solid red;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    section{
        border: 2px solid purple;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        margin-left: 19px;
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
