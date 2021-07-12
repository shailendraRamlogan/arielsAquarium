import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    body: {
        fontFamily: "Lexend Exa, sans-serif",
    },

    navContainer:{
        width: "100%",
        height: "8vh",
        background: "black",
        position: "fixed",
        zIndex: 1,
        
    },
      
    navigationBar: {
        opacity:1,
        position: "fixed",
        top: "15px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "inlineBlock",
        marginTop:"0%",
        borderRadius: "30px",
        animation: "slide-in 1s ease-out",
        zIndex:2,

    },
      
    menuList: {
        position: "relative",
        display: "flex",
        flex: "1 1 auto",
        margin: 0,
        padding: "0 30px",
        listStyleType: "none",
        
        

        "& li": {
            border: "2px solid transparent",
            borderRadius: "5px",
            padding: "10px",
            transition: "background 0.2s",
            fontWeight: "500",
            letterSpacing: "2px",
            fontFamily: "'Pacifico', cursive",

            "& a": {
                width: "100%",
                color: "white",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s",
            },

            "&:not(:last-child)": {
                marginRight: "40px",
            },
            
            "& ul": {
                visibility: "hidden",
                opacity: 0,
                position: "absolute",
                display: "block",
                margin: "12px -12px",
                padding: 0,
                background: "black",
                
                transition: "opacity 0.2s, visibility 0.2s",
                listStyleType: "none",
                "& li": {
                    margin: "-2px 0 0 -2px",
                    width: "calc(100% - 20px)",
                    lineHeight: 1.7,

                    "& a":{
                        color: "#2375d8",
                    },
                },
            },

            "&:hover": {
                background: "transparent",
                border: "2px solid #ea9ef3",
                borderRight: "2px solid #ea9ef3",
                borderBottom: "2px solid #ea9ef3",

                "& a": {
                    color: "#ea9ef3",
                },

                "& ul":{
                    visibility: "visible",
                    opacity: 1,
                    boxShadow: "0px 3px 5px 2px blur",
                    

                },

            },
        },
    },

    "@keyframes slide-in": {
    "0%": {
        top: "-50px",
    },
    "40%": {
        top: "20px",
    },
    "70%": {
        top: "10px",
    },
    "100%": {
        top: "15px",
    }
    }
}));