import styled from "styled-components";

export const ProductCardContainer = styled.article`
    border: 1px solid blue;
    margin: 8px 0;
    border-radius: 16px;
    /* img{
        border-radius: 16px 16px 0 0 ;
    } ou*/
    overflow: hidden;
`
export const NameRating = styled.div`
    border: 2px solid pink;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PriceButton = styled.div`
    border: 2px solid green;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;

    button{
        padding: 4px;
    }
`

