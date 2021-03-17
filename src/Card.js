import React from 'react'

export default function Card({news, index}) {
    return (
        <div>
            <img style={{width: "100vw", height: "60vh"}} src= {news[index].urlToImage} alt=""/>
            <h1>{news[index].title}</h1>
            <h2>{news[index].author}</h2>
            <h3>{news[index].source.name}</h3>
            <p>{news[index].description}</p>
        </div>
    )
}
