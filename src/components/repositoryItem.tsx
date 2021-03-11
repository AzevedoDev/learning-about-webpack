import React from "react";

type RepositoryItem = {
    repository: {
        name: string
        description: string
        link: string
    }
}

export function RepositoryItem({repository: {name, description, link}}: RepositoryItem): React.ReactElement {
    return <li>
        <strong>{name}</strong>
        <p>{description}</p>
        <a href={link}>ACESSAR</a>
    </li>;
}