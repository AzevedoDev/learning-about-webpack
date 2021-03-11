import React from 'react';
import './styles/global.scss'
import {RepositoryList} from "./components/repositoryList";

export default function App():React.ReactElement {
    return(
        <div>
            <RepositoryList/>
        </div>
    )
}