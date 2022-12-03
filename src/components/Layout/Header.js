import NavigateHeader from "../UI/NavigateHeader";
import Entry from "./Entry";

const Header = (props) => {
  return (
    <>
      <NavigateHeader />
      <section  >
        <Entry slides={props.slides} />
      </section>
    </>
  );
};
export default Header;
