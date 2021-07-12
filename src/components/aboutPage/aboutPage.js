import useStyles from './styles';
import NavigationBar from '../navigationBar/navigationBar';

import secondImage from '../../assets/images/R.jpg';
const AboutPage = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.body}>
            <NavigationBar/>
            <h3 className={classes.logo}>About</h3>
            <div className={classes.scrollButton}>
                <a href="#section2" className={classes.beginButton}><span></span></a>
            </div>
            <div id="section2" className={classes.sectionTwo}> 
                
                <img src={secondImage} alt="test" className={classes.secondImage}/>
            </div>
        
        </div>
    );
}

export default AboutPage;