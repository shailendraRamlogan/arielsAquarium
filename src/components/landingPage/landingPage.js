import useStyles from './styles';
import NavigationBar from '../navigationBar/navigationBar';
import homeImg from '../../assets/images/home.jpg'
const LandingPage = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.body}>
            <NavigationBar/>
            <img src={homeImg} alt="home" className={classes.homeImg}/>
        </div>
    );
}

export default LandingPage;