import {makeStyles} from '@material-ui/core/styles';
export default makeStyles(() => ({
    html: {
      fontFamily: "'Pacifico', cursive",
      textSizeAdjust: "100%",
    },
    
    body: {
      background: "#F2F3EB",
    },
    
    formTitle:{
        textAlign: "center",
    },

    button: {
      overflow: "visible",
      textTransform: "none",
    },    
    
    
    input: {
      lineHeight: "normal",
    },
    
    textarea: {
        overflow: "auto",
        lineHeight: "150%",
        height: "150px",
        resize: "none",
        width: "100%",
    },
    
    container: {
        fontFamily: "'Pacifico', cursive",
        border: "solid 3px #474544",
        maxWidth: "768px",
        margin: "60px auto",
        position: "relative",
        padding: "2% 2% 2% 2%",
        '@media (max-width: 768px)' : {
            margin: "20px auto",
            width: "95%",
        },
    },
    
    form: {
      padding: "37.5px",
      margin: "50px 0",
    },
    
    h1: {
        color: "#474544",
        fontSize: "32px",
        fontWeight: "700",
        letterSpacing: "7px",
        textAlign: "center",
        textTransform: "uppercase",
        
        '@media (max-width: 480px)' : {
            fontSize: "26px",
        },

        '@media (max-width: 420px)' : {
            fontSize: "18px",
        },
    },
    
    underline: {
        borderBottom: "solid 2px #474544",
        margin: "-0.512em auto",
        width: "80px",

        '@media (max-width: 480px)' : {
            width: "68px",
        },

        '@media (max-width: 420px)' : {
            width: "53px",
        },
    },
    
    iconWrapper: {
        margin: "50px auto 0",
        width: "10%",
        marginBottom: "15%",
    },
    
    icon: {
        display: "block",
        fill: "#474544",
        height: "50px",
        margin: "0 auto",
        width: "50px",

        '@media (max-width: 420px)' : {
            height: "35px",
            width: "35px",
        },
    },
    
    email: {
        float: "right",
        width: "45%",
    },
    
    nameInput:{
        fontFamily: "'Pacifico', cursive",
        background: "none",
        border: "none",
        borderBottom: "solid 2px #474544",
        color: "#474544",
        fontSize: "1.000em",
        fontWeight: "400",
        letterSpacing: "1px",
        margin: "0em 0 1.875em 0",
        padding: "0 0 0.875em 0",
        textTransform: "uppercase",
        width: "100%",
        boxSizing: "border-box",
        transition: "all 0.3s",
        "&:focus":{
            outline: "none",
            padding: "0 0 0.875em 0",
        },

        '@media (max-width: 420px)' : {
            fontSize: "0.875em",
        },
    },

    emailInput:{
        fontFamily: "'Pacifico', cursive",
        background: "none",
        border: "none",
        borderBottom: "solid 2px #474544",
        color: "#474544",
        fontSize: "1.000em",
        fontWeight: "400",
        letterSpacing: "1px",
        margin: "0em 0 1.875em 0",
        padding: "0 0 0.875em 0",
        textTransform: "uppercase",
        width: "100%",
        boxSizing: "border-box",
        transition: "all 0.3s",
        "&:focus":{
            outline: "none",
            padding: "0 0 0.875em 0",
        },

        '@media (max-width: 420px)' : {
            fontSize: "0.875em",
        },
    },

    telephoneInput:{
        fontFamily: "'Pacifico', cursive",
        background: "none",
        border: "none",
        borderBottom: "solid 2px #474544",
        color: "#474544",
        fontSize: "1.000em",
        fontWeight: "400",
        letterSpacing: "1px",
        margin: "0em 0 1.875em 0",
        padding: "0 0 0.875em 0",
        textTransform: "uppercase",
        width: "100%",
        boxSizing: "border-box",
        transition: "all 0.3s",
        "&:focus":{
            outline: "none",
            padding: "0 0 0.875em 0",
        },

        '@media (max-width: 420px)' : {
            fontSize: "0.875em",
        },
    },

    messageInput:{
        fontFamily: "'Pacifico', cursive",
        background: "none",
        border: "none",
        borderBottom: "solid 2px #474544",
        color: "#474544",
        fontSize: "1.000em",
        fontWeight: "400",
        letterSpacing: "1px",
        margin: "0em 0 1.875em 0",
        padding: "0 0 0.875em 0",
        textTransform: "uppercase",
        width: "100%",
        boxSizing: "border-box",
        transition: "all 0.3s",
        "&:focus":{
            outline: "none",
            padding: "0 0 0.875em 0",
        },

        '@media (max-width: 420px)' : {
            fontSize: "0.875em",
        },
    },
    
    
    message: {
        float: "none",
    },
    
    name: {
        float: "left",
        width: "45%",
    },
    
    subject: {
      width: "100%",
    },
    
    telephone: {
      width: "100%",
    },
    
    formButton: {
        fontFamily: "'Pacifico', cursive",
        background: "none",
        border: "solid 2px #474544",
        color: "#474544",
        cursor: "pointer",
        display: "inline-block",
        fontSize: "0.875em",
        fontWeight: "bold",
        outline: "none",
        padding: "20px 35px",
        textTransform: "uppercase",
        transition: "all 0.3s",
        "&:hover":{
            background: "#474544",
            color: "#ffe8fc",

        },
        '@media (max-width: 480px)' : {
            padding: "15px 25px",
        },
    },
   
}));