import React from "react";
import {RepositoryItem} from "./repositoryItem";


export function RepositoryList(): React.ReactElement {
    const data ={ name: 'unfo',description:'negocio muito legal', link:'www.google.com'}
    return (
        <section>
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={data}/>
                <RepositoryItem repository={data}/>
                <RepositoryItem repository={data}/>
            </ul>
        </section>
    )
}