import React from 'react'
import Thumbnail from './Thumbnail'

function Content({ results }) {
    return (
        <div>
            {results.map((result) => (
                <Thumbnail key={result.id} result={result} />
            ))
            }
        </div>
    )
}

export default Content
