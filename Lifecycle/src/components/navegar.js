import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {
    return (
      <div>
        <div>
          <NavLink exact to="/">
            Discussion
          </NavLink>
        </div>
  
        <div>
          <NavLink to="/normas">Normas</NavLink>
        </div>
  
        <div>
          <NavLink to="/flujo">Flujo</NavLink>
        </div>
      </div>
    );
  }
  
  