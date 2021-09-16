import { Link } from "react-router-dom";
import { PageWrapper } from "./styles";

const iCashTeam = [
  {
    name: "Ariel Bernardes",
    role: "Teach Lead",
    img: "https://media-exp1.licdn.com/dms/image/D4D35AQEyyoBuGCs5Xw/profile-framedphoto-shrink_200_200/0/1631221236388?e=1631901600&v=beta&t=KYENPCzi-5kMYIK67b8BC9riblviWpjnAEzoN6MOAUg",
  },
  {
    name: "Marcos Kuribayashi ",
    role: "Product Owner",
    img: "https://gitlab.com/uploads/-/system/user/avatar/8603970/avatar.png?width=400",
  },
  {
    name: "Jorge William",
    role: "Quality Assurance",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQFb8Aa1_LiWmg/profile-displayphoto-shrink_200_200/0/1629894394125?e=1637193600&v=beta&t=ZSQGpIrtLz-p78oWMJIuBj9lNn1XR3XrB8ncEbGrLr0",
  },
  {
    name: "Pierre Kalil",
    role: "Quality Assurance",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQH55tlX3O-xyA/profile-displayphoto-shrink_200_200/0/1517044129862?e=1637193600&v=beta&t=zRg5LAEc1A0cZACsXgBgdCWGVH98lSibNnzsKlXYRek",
  },
  {
    name: "Luiz Federico",
    role: "Scrum Master",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQHj9DmmHOjC9A/profile-displayphoto-shrink_200_200/0/1573677093690?e=1637193600&v=beta&t=VkFfNDWvZEJvAZX7OV2O2vYZ5yFs34JXoJzDqteMkjg",
  },
];

const Icash = () => {
  return (
    <PageWrapper>
      <div>
        <h1>Quem somos</h1>
        <p>
          iCash nasce para ajudar os comerciantes a alavancarem seus negócios.
          Somos um marketplace, onde lojistas e clientes se encontram para
          vender e comprar. As lojas oferecem ao consumidor parte do dinheiro
          gasto na compra em forma de cashback. O cliente, por sua vez, vai
          acumulando o valor de cada compra, podendo utilizá-lo em toda a rede
          iCash.
        </p>
      </div>

      <h2>Nosso time</h2>
      <ul>
        {iCashTeam.map((dev, index) => (
          <li key={index}>
            <img src={dev.img} alt={dev.name} />
            <span>{dev.name}</span>
            <p>{dev.role}</p>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};

export default Icash;
