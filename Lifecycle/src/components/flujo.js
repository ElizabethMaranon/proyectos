import React, { Component } from 'react';

export default class Flujo extends Component {
    constructor() {// 1º
        super();
        this.state = {};
        console.log("constructor");
    }
    static getDerivedStateFromProps() {// 2º
        console.log("getDerivedStateFromProps");
    }
    componentDidMount() { // 4º
        console.log("componentDidMount");
    }
    shouldComponentUpdate() {// 5º tras actualizar
        console.log("shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate() {// 7º, tras actualizar
        console.log("getSnapshotBeforeUpdate");
        return true;
    }
    componentDidUpdate() {// 8º, tras actualizar
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {// Último
        console.log("componentWillUnmount");
    }
    handleClick = () => {
        console.log("button clicked");
        this.setState({ pageTitle: "flujo" });
    };
    handleKeyUp = e => {
        this.setState({ inputDetails: e.target.value });
    };
    render() { // 3º, 6º tras actualizar
        console.log("render");
        return (
            <div>
                <h1>Flujo</h1>
                <input type="text" onKeyUp={e => this.handleKeyUp(e)} />
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}


