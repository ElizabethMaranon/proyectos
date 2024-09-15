import React from "react";
import { Switch, Route } from "react-router-dom";
import Discussion from './discussion';
import Normas from './normas';
import Flujo from './flujo';

export default function () {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Discussion} />
                <Route exact path="/normas" component={Normas} />
                <Route exact path="/flujo" component={Flujo} />
            </Switch>
        </div>
    );
}

