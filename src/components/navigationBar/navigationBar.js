import useStyles from './styles';
const NavigationBar = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.body}>
            <nav className={classes.navigationBar}>
                <ul className={classes.menuList}>
                    <li><a href="#0">Home</a></li>
                    <li><a href="#0">About</a></li>
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
                    <li><a href="#0">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationBar;