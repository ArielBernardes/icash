import React, { useState } from "react";
import {
  ContainerModal,
  ContainerReporter,
  Graphic,
  ReporterWritten,
  ColorRed,
  ColorBlue,
  ColorGreen,
} from "./styles";
import { Bar } from "react-chartjs-2";
import { FaRegWindowClose } from "react-icons/fa";

const data = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "# Total de Pedidos",
      data: [12, 19, 14, 15, 8, 9],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "# Pedidos Finalizados",
      data: [8, 10, 11, 7, 4, 5],
      backgroundColor: "rgb(54, 162, 235)",
    },
    {
      label: "# Cashback fornecido",
      data: [3, 4, 5, 2, 1, 3],
      backgroundColor: "rgb(45, 116, 116)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ModalReport = () => {
  const [isModal, setIsModal] = useState(false);

  const handleClose = () => {
    setIsModal(false);
    console.log(isModal);
  };
  return (
    <ContainerReporter>
      <ContainerModal>
        <button onClick={handleClose}>
          <FaRegWindowClose />
        </button>
        <h2>Relatórios da loja: {"loja1"}</h2>
        <Graphic>
          <Bar data={data} options={options} />
        </Graphic>
        <ReporterWritten>
          <ul>
            <li>
              <ColorRed /> Total de Pedidos: aqui vai os dados vindos da api
            </li>
            <li>
              <ColorBlue />
              Total de Pedidos finalizados: aqui vai os dados vindos da api
            </li>
            <li>
              <ColorGreen />
              Cashback gerado: aqui vai os dados vindos da api
            </li>
          </ul>
        </ReporterWritten>
      </ContainerModal>
    </ContainerReporter>
  );
};

export default ModalReport;
