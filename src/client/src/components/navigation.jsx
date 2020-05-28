import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap';


export class Navigation extends Component{
    render(){
        return(
            <Nav className="py-0 justify-content-center fixed-top">
                <NavLink className="mt-3  mr-2 d-inline-block p-4 text-light"
                    to="/customers" 
                    activeStyle={{
                        background: '#EBE1E1',
                        borderTopLeftRadius: '45%',
                        borderTopRightRadius: '45%',
                        border:'1px solid #656472'
                    }}>Kunder
                    </NavLink>
                <NavLink className="mt-3 mr-2 d-inline-block p-4 text-light"
                    to="/products"
                    activeStyle={{
                        background: '#EBE1E1',
                        color: '#656472',
                        borderTopLeftRadius: '45%',
                        borderTopRightRadius: '45%',
                        border:'1px solid #656472'
                    }}>Produkter</NavLink>    
                <NavLink className="mt-3 mr-2 d-inline-block p-4 text-light"
                    to="/inventory"
                    activeStyle={{
                        background: '#EBE1E1',
                        borderTopLeftRadius: '45%',
                        borderTopRightRadius: '45%',
                        border:'1px solid #656472',
                        
                    }}>Lagerstatus</NavLink>
                <NavLink className="mt-3 mr-2 d-inline-block p-4 text-light"
                    to="/reciepts"
                    activeStyle={{
                        background: '#EBE1E1',
                        borderTopLeftRadius: '45%',
                        borderTopRightRadius: '45%',
                        border:'1px solid #656472'    
                    }}
                    >Kvitteringer</NavLink>
                <NavLink className=".display-2 mt-3 mr-2 d-inline-block p-4 text-light"
                    to="/settings"
                    activeStyle={{
                        background: '#EBE1E1',
                        borderTopLeftRadius: '45%',
                        borderTopRightRadius: '45%',
                        border:'1px solid #656472',
                    }}
                    >Innstillinger</NavLink>
            </Nav>  
           
        )
    }
}