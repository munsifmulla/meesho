import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from '../pages/landing'
import Listing from '../pages/listing'

class Routes extends Component{
    render(){
        return (

            <Router>
                <div>
                    <Route path="/" exact component={Landing} />
                    <Route path="/:tag" component={Listing} />
                </div>
          </Router>
        )
    }
}

export default Routes