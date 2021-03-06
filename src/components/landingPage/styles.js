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
        animation: `$fadein ease 5s`,
        animationIterationCount: 1,
        animationFillMode: "forwards",
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
            borderLeft: "3px solid #fff",
            borderBottom: "3px solid #fff",
            transform: "rotateZ(-45deg)",
            animation: "$sdb06 3s infinite",
            boxSizing: "border-box",

        }
    },
    
       
}));