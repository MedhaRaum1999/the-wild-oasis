import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  function handleClick() {
    logout();
  }

  return (
    <ButtonIcon disabled={isLoading} onClick={handleClick}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
