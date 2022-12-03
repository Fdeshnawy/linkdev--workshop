import NavigateHeader from "../UI/NavigateHeader";
import CasouselSlide from "./CasouselSlide";
//Combines the Nav bar with Bannner
const Header = (props) => {
  return (
    <>
      <NavigateHeader />
      <section  >
        <CasouselSlide slides={props.slides} />
      </section>
    </>
  );
};
export default Header;
