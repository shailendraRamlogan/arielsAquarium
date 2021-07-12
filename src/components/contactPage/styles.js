import {makeStyles} from '@material-ui/core/styles';
import homeImg from '../../assets/images/home.jpg';
export default makeStyles(() => ({

    body: {
        fontFamily: "Lexend Exa, sans-serif",
        backgroundImage: `url(${homeImg})`,
        backgroundSize: "100% ",
        backgroundPositionY:"7%",
    },

    homeImg:{
        height: "100vh",
        width: "100%",
    },

    logo:{
        fontFamily: "'Pacifico', cursive",
        textAlign: "center",
        textTransform: "capitalize",
        fontSize: "7rem",
        color:"#ffe8fc",
        position: "absolute",
        width: "100%",
        height: "20%",
        overflow: "hidden",
        
        backgroundSize: "100% ",
        top: "15%",
        left: "50%",
        transform: "translate(-50%, -100%)",
    },


    "@keyframes fadein":{
        "0%":{ opacity: "0", },
        "100%":{ opacity: "1", }
    },

    "@keyframes sdb06": {
        "0%": {
          transform: "rotateY(0) rotateZ(-45deg) translate(0, 0)",
          opacity: 0,
        },
        "50%": {
          opacity: 1,
        },
        "100%": {
          transform: "rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px)",
          opacity: 0,
        }
      },
      

    logoSubtext:{
        fontFamily: "'Pacifico', cursive",
        textAlign: "center",
        textTransform: "capitalize",
        fontSize: "2rem",
        color:"#ffe8fc",
        position: "absolute",
        width: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -100%)",
    },

    beginButton:{
        position:  "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "& span": {
            position: "absolute",
            top: 0,
            left: "50%",
            width: "50px",
            height: "50px",
            marginLeft: "-12px",
            borderLeft: "1px solid #fff",
            borderBottom: "1px solid #fff",
            transform: "rotateZ(-45deg)",
            animation: "$sdb06 1.5s infinite",
            boxSizing: "border-box",

        }
    },

    separator:{
        backgroundColor:"#ffe8fc",
        paddingBottom:"2%",
        marginLeft: "10%",
        marginRight: "10%",
    },


    formContainer:{
        backgroundColor:"#ffe8fc",
        paddingTop:"2%",
        paddingBottom:"2%",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "15%",
        alignItems: "center",
        alignContent: "center",
        borderRadius: "10px",
    },

    formHeading:{
        textAlign: "center",
    },

    contactForm:{
        alignItems: "center",
        alignContent:"center",
        alignSelf:"center",
        textAlign: "center",
    },

    mapContainer:{
        backgroundColor:"#ffe8fc",
        paddingBottom:"2%",
        paddingTop:"2%",
        marginTop: "10%",
    },
    
    maps:{
        
        width: "80%",
        height: "450px",
        marginLeft: "10%",
    }
       
}));