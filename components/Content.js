import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

function Content({ results }) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex 3xl:flex-wrap 3xl:justify-center">
            {results.map((result) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </FlipMove>
    )
}

export default Content
