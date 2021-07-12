import useStyles from './styles';
import { Link } from 'react-router-dom';

const NavigationBar = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.body}>
            <div className={classes.navContainer}>
            </div>
            <nav className={classes.navigationBar}>
                <ul className={classes.menuList}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>
                    <a href="#0">Clients</a>
                    <ul>
                        <li><a href="#0">Burger King</a></li>
                        <li><a href="#0">Southwest Airlines</a></li>
                        <li><a href="#0">Levi Strauss</a></li>
                    </ul>
                    </li>
                    <li>
                    <a href="#0">Services</a>
                    <ul>
                        <li><a href="#0">Print Design</a></li>
                        <li><a href="#0">Web Design</a></li>
                        <li><a href="#0">Mobile App Development</a></li>
                    </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            
        </div>
    );
}

export default NavigationBar;