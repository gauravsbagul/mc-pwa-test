import React from 'react';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.status.danger,
        '&$checked': {
            color: theme.status.danger,
        },
    },
    checked: {},
}));


export const CartItem=() => {
    
    const classes=useStyles();
    console.log('Log: ~> file: CartItem.js ~> line 20 ~> CartItem ~> classes', classes)
    
    
    return (
        //same css used Menu.css => menuItem
        <div className="menuItem d-flex col-12 p-md-4 m-2 col-md-4">
            <div className="pl-1 pr-3">
                <i class="bi bi-x-circle" onClick={()=>window.alert("hello")} style={{fontSize:"22px",cursor:"pointer"}}/>
            </div>
            <div className="w-100">
                <div>
                    <span className="name">Americano</span>
                    <span className="rewards ml-1">
                        <span>+1</span>
                        <img src="./image/burger.png" height="30px" width="30px" alt="icon" />
                    </span>
                    <span className="price float-right">150&#8377;</span>
                </div>
                <div>
                    <span className="offer">15% Off Drinks</span>
                    <span className="offerPrice float-right">120&#8377;</span>
                </div>
            </div>
            <hr />
        </div>
    );
}


