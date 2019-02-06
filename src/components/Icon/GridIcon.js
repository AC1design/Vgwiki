import React from 'react'

const Grid = props => (
    <svg width={20} height={20} {...props}>
        <title>{'Group 39'}</title>
        <g fill="#FFF" fillRule="evenodd">
            <rect width={9} height={9} rx={2} />
            <rect x={11} width={9} height={9} rx={2} />
            <rect y={11} width={9} height={9} rx={2} />
            <rect x={11} y={11} width={9} height={9} rx={2} />
        </g>
    </svg>
)

export default Grid
