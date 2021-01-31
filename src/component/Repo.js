import React from 'react'

const Repo = ({repo}) => {
    return (
    <li className="list-group-item list-group-item-light"><i className="fab fa-black-tie"><a href={repo.html_url} className="card-link ml-4"> {repo.name}</a></i></li>
    )
}

export default Repo;