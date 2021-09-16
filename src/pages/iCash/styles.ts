import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: var(--grayHome);
  margin: auto;
  padding: 20px;

  div {
    text-align: center;
    margin-bottom: 20px;

    h1 {
      margin: 20px;
      color: var(--orangeCore);
    }

    p {
      color: var(--grayStandOut);
      line-height: 20px;
    }
  }

  h2 {
    color: var(--orangeCore);
    text-align: center;
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 5px;

      span {
        color: var(--orangeCore);
        font-weight: 600;
      }

      img {
        width: 20%;
        border-radius: 50%;
        border: 2px solid var(--orangeCore);
      }

      p {
        color: var(--grayStandOut);
      }
    }
  }

  @media only screen and (min-width: 768px) {
    width: 30%;
  }
`;
