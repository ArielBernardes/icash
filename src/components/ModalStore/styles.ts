import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index:10;
    top:0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--darkGray);
`;

export const BtnClose = styled.button`
    background-color: transparent;
    border: none;

    img {
        margin: 1rem;
        width: 30px;
        height: 30px;
    }

`;

export const FormStore = styled.form`
    display: flex;
    flex-direction: column;
`;