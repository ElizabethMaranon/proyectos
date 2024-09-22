import React, { Component } from 'react';
import portfolioItems from './portfolio-items';
import PortfolioItems from './portfolio-items';

export default class PortfolioContenedor extends Component {
    constructor() {
        super()
        console.log("Console log en terminal o consola")
    }

        portfolioItems() {
            const datos = [1, 2, 3, 4];
            return datos.map(item => {
                return <h1>{item}</h1>
            });
        }
        render() {
            return (
                <div>
                    <h2>Contenedor portfolio</h2>
                    <globalThis.portfolioItems />
                </div>

            );
        }
    }