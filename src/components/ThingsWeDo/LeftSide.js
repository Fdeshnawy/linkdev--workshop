import trans from "../../assests/Transformation.png";
import Envi from "../../assests/Enovision.png";
import Dynnam from "../../assests/Dynamic365.png";
import serv from "../../assests/Services.png";
import craft from '../../assests/CarftyMind.png';
import classes from './LeftSide.module.scss'
import { BsArrowRight } from 'react-icons/bs';
function LeftSide(){
    return(
       <>
       
       <div className={classes.square}>
            <div>
            <div className={classes.craft}>
                <div className={classes.over}>
                <p className={classes.modern}> <BsArrowRight/> Read more</p>
                </div>
                <img className={classes['img--serv']} src={craft} alt='' />
        
            </div>
            <div className={classes.craft}>
            <div className={classes.over}>
            <p className={classes.modern}> <BsArrowRight/> Read more</p>
                </div>
                <img className={classes['img--serv']} src={serv} alt='' />
            
            </div>
            </div>
        
       </div>

       <div className={classes.squareTwo}>
            <div>
            <div className={classes.craft}>
                <div className={classes.over}>
                <p className={classes.modern}> <BsArrowRight/> Read more</p>
                </div>
                <img className={classes['img--serv']} src={Envi} alt='' />
   
            </div>
            <div className={classes.craft}>
            <div className={classes.over}>
            <p className={classes.modern}> <BsArrowRight/> Read more</p>
                </div>
                <img className={classes['img--serv']} src={Dynnam} alt='' />

            </div>
            </div>
            <div className={classes.squareThree}>
      <div>
      <div className={classes.craft}>
                <div className={classes.over}>
                <p className={classes.modern}> <BsArrowRight/> Read more</p>
                </div>
                <img className={classes['img--serv']} src={trans} alt='' />
 
            </div>
            <div className={classes.craft}>
                
            </div>
      </div>
       </div>
       </div>
   
       </>

    )
}

export default LeftSide;