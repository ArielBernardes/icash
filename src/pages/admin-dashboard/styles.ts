import styled from "styled-components";

export const Header = styled.div`
    width: 100vw;
    height: 55px;
    display: flex;
    justify-content: space-between;
    background-color: var(--greenFormBkgd);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--fontLightGray);
    
    h2 {
        color: var(--fontDarkGray)
    }
    h3 {
        margin: 0.5rem;
    }
    span {
        color: var(--greenFormBkgd);
    }
    h4 { 
        margin-bottom: 5vh;
    }
`;

export const Stores = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20vh; 
    img {
        margin: 0.5rem;
        width: 100px;
    }
`;

export const ContainerStore = styled.div`
    display: flex;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--lightGray);
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 250px;
    margin: 1rem;

    span {
        font-size: 24px;
    }
`;

export const ContainerBtn = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        background-color: var(--greenFormBkgd);
        border: none;
        border-radius: 5px;
        padding: 0.5rem;
        margin: 0.5rem;
    }
`;