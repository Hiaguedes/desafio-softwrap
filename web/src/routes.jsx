import React from 'react';
import  { Route} from 'react-router-dom';

import Inputs from './pages/Inputs/Inputs';

export default function Routes(){


    return(
        <>
        <Route exact path="/" component={Inputs}/>
        </>
    )
}

