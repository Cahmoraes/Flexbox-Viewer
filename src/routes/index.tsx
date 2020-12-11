import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './route'
import Home from '../pages/Home'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
    </Switch>
  )
}
export default Routes