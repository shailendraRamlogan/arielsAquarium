import useStyles from './styles';
import NavigationBar from '../navigationBar/navigationBar';
import homeImg from '../../assets/images/cover.jpg';
import secondImage from '../../assets/images/R.jpg';
const LandingPage = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.body}>
            <NavigationBar/>
            <img src={homeImg} alt="home" className={classes.homeImg}/>
            <h3 className={classes.logo}>Welcome to Ariel's Aquarium</h3>
            <p className={classes.logoSubtext}>Come in, let us show you around !</p>
            <div className={classes.scrollButton}>
                <a href="#section2" className={classes.beginButton}><span></span></a>
            </div>
            <div id="section2" className={classes.sectionTwo}> 
                
                <img src={secondImage} alt="test"/>
            </div>
        
        </div>
    );
}

export default LandingPage;