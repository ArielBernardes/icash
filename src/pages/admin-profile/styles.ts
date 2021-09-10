import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    img {
        width: 30px;
        height: 30px;
    }
`;

export const Containerfull = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--fontLightGray);
    
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

export const Header = styled.div`
    position: absolute;
    z-index: -2;
    width: 100vw;
    height: 320px;
    left: 0;
    top: -97px;
    background-color: var(--greenFormBkgd);
    clip-path: polygon(0% 0%, 0% 100%,100% 65%, 100% 0%);

`;

export const BtnAvatar = styled.button`
    border: none;
    background-color: transparent;
    color: var(--white);

`;

export const Avatar = styled.div`
    
    img {
        
        border-radius: 100%;
    }
`;

export const BtnProfile = styled.div`
    background-color: var(--lightGray);
    color: var(--fontDarkGray);
    width: 100vw;
    border: none;
    padding: 30px 10px;
    margin: 0.2rem;

`;

