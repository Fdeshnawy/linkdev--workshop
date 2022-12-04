import classes from "./ThingsWeDo.module.scss";
import LeftSide from "./LeftSide";
import { useState ,useEffect} from "react";
// Display the Title and descriptionns for Things we do.

const ThingsWeDo = () => {
  // Api things is set by Nodejs and express to 
  //create json file and uploaded on Render to get the Link
  // Fetch ,Map
// So instead I created a dummy api for backend to create 
  const [api, setApi] = useState([]);

  const fetchDataList = () => {
    return fetch("https://thingswedo.getsandbox.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log([data]);
        setApi([data]);
      });
  };

  useEffect(() => {
    fetchDataList();
  }, []);

  return (
    <section className={classes.things}>
      <div className={classes.leftSec}>
        <LeftSide />
      </div>
      <div className={classes.deliver}>
        <h2 className={classes["deliver--txt"]}>We Deliver</h2>
        <h2 className={classes["deliver--txt"]}> Digital Productivity</h2>
        <p className={classes["deliver--p"]}>
          We craft technology solutions that digitally bond and transform the
          productivity of our customers and their citizens, workers, consumers
          and partners.
        </p>
      </div>
    </section>
  );
};
export default ThingsWeDo;
