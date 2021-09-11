import styled from "styled-components";

export const ContainerReporter = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.29);
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 70vh;
  background-color: #fff;
  box-shadow: 2px 2px 5px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow-y: scroll;

  svg {
    position: absolute;
    top: 5px;
    right: 5px;
    color: var(--orangeCore);
  }

  h2 {
    padding: 10px 0;
  }
`;

export const Graphic = styled.div`
  width: 70%;
  height: 400px;
`;

export const ReporterWritten = styled.div`
  width: 70%;
  height: 300px;
  margin-top: 100px;

  li {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
  }
`;

export const ColorRed = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 2px;
  background-color: rgb(255, 99, 132);
`;

export const ColorBlue = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 2px;
  background-color: rgb(54, 162, 235);
`;

export const ColorGreen = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 2px;
  background-color: rgb(45, 116, 116);
`;
