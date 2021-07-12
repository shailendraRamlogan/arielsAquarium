import {makeStyles} from '@material-ui/core/styles';
export default makeStyles(() => ({
    body: {
        fontFamily: "Lexend Exa, sans-serif",
    },

    homeImg:{
        width: "100%",
        height: "100vh",
        
    },
    logo:{
        fontFamily: "'Pacifico', cursive",
        textAlign: "center",
        textTransform: "capitalize",
        fontSize: "7rem",
        color:"#ffe8fc",
        position: "absolute",
        width: "100%",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -100%)",
        animation: `$fadein ease 5s`,
        animationIterationCount: 1,
        animationFillMode: "forwards",
    },


    "@keyframes fadein":{
        "0%":{ opacity: "0", },
        "100%":{ opacity: "1", }
    }
    
       
}));