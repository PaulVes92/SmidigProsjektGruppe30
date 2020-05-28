import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap';


export class Navigation extends Component{
    render(){
        return(
            <Nav className="justify-content-center fixed-top">
                <NavLink className="mt-3 mr-2 d-inline-block p-4 text-dark"
                    to="/customers" 
                    activeStyle={{
                        background: '#fcf6f3',
                        borderTopLeftRadius: '25%',
                        borderTopRightRadius: '25%',
                        borderBottomColor: 'black'
                    }}>Kunder
                    </NavLink>
                <NavLink className="mt-3 mr-2 d-inline-block p-4 text-dark"
                    to="/products"
                    activeStyle={{
                        background: '#fcf6f3',
                        borderTopLeftRadius: '25%',
                        borderTopRightRadius: '25%'
                    }}>Produkter</NavLink>    
                <NavLink className="mt-3 mr-2 d-inline-block p-4 text-dark"
                    to="/inventory"
                    activeStyle={{
                        background: '#fcf6f3',
                        borderTopLeftRadius: '25%',
                        borderTopRightRadius: '25%'
                        
                    }}>Lagerstatus</NavLink>
                <NavLink className="mt-3 mr-2 d-inline-block p-4 text-dark"
                    to="/reciepts"
                    activeStyle={{
                        background: '#fcf6f3',
                        borderTopLeftRadius: '25%',
                        borderTopRightRadius: '25%'    
                    }}
                    >Kvitteringer</NavLink>
                <NavLink className="mt-3 mr-2 d-inline-block p-4 text-dark"
                    to="/settings"
                    activeStyle={{
                        background: '#fcf6f3',
                        borderTopLeftRadius: '25%',
                        borderTopRightRadius: '25%'
                    }}
                    >Innstillinger</NavLink>
            </Nav>  
           
        )
    }
}