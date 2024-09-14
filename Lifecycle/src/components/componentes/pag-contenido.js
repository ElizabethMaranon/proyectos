import React from "react";
import { Switch, Route } from "react-router-dom";

import Discussion from './componentes/discussion';
import Normas from './componentes/normas';
import Flujo from './componentes/flujo';

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

