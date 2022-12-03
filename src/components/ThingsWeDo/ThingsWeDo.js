import classes from "./ThingsWeDo.module.scss";
import LeftSide from "./LeftSide";
const ThingsWeDo = () => {

    
      async function addHandler(backend) {
        const response = await fetch('https://react-http-6b4a6.firebaseio.com/movies.json', {
          method: 'POST',
          body: JSON.stringify(backend),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
      }

 return(
    <section className={classes.things}>
    <div className={classes.leftSec}>
       <LeftSide 
       />
    </div>
    <div className={classes.deliver}>
    <h2 className={classes['deliver--txt']}>We Deliver</h2>
      <h2 className={classes['deliver--txt']}> Digital Productivity</h2>
      <p className={classes['deliver--p']}>
        We craft technology solutions that digitally bond and transform the
        productivity of our customers and their citizens, workers, consumers and
        partners.
      </p>

    </div>
  </section>

 )

};
export default ThingsWeDo;
