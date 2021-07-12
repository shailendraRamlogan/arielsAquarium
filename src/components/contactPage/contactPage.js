import useStyles from './styles';
import NavigationBar from '../navigationBar/navigationBar';
import ContactForm from './contactForm/contactForm';

const ContactPage = ()=>{
    const classes = useStyles();
    return(
        <div className={classes.body}>
            <NavigationBar/>
            <h3 className={classes.logo}>Contact Us</h3>
            <div className={classes.separator}></div>
            <div className={classes.formContainer}>
                <ContactForm/>
            </div>
            <div id="section2" className={classes.mapContainer}> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.408138897943!2d-61.549131684667564!3d10.22862927186113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3591b6afda3059%3A0x159ec006bc3406b9!2sAriel&#39;s%20Aquarium%20%26%20Pet%20Supplies!5e0!3m2!1sen!2stt!4v1626119378614!5m2!1sen!2stt" title="gmap" className={classes.maps} allowFullScreen="" loading="lazy"></iframe>
            </div>
        
        </div>
    );
}

export default ContactPage;