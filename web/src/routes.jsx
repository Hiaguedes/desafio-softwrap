import React from 'react';
import  { Route} from 'react-router-dom';

import TablePage from './pages/TablePage';

export default function Routes(){


    return(
        <>
        <Route exact path="/" component={TablePage}/>
        </>
    )
}

