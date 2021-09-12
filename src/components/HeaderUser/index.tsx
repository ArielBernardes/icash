import { ContainerHeader, User, HeaderOrange } from "./styles";

const HeaderUser = () => {
  return (
    <ContainerHeader>
      <HeaderOrange />
      <User src="https://i.pravatar.cc/150" alt="avatar" />
    </ContainerHeader>
  );
};

export default HeaderUser;
