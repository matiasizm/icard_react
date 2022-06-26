import React from 'react'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import routes from './routes'
import {map} from 'lodash'

console.log(routes);

export function Navigation() {
  console.log("routes-->",routes);
  return(
  <BrowserRouter>
    <Routes>
      {map(routes,(route,index)=>(
        <Route 
        key={index}
        path={route.path}
        element = {
          <route.layout>
            <route.component />
          </route.layout>
        }
        />
      ))}
    </Routes>
  </BrowserRouter>
    );

}
