import React from 'react'

const SvgComponent = props => (
    <svg width={24} height={26} {...props}>
        <title>{'Polygon'}</title>
        <path
            d="M13.5 25.134l8.258-4.768a3 3 0 0 0 1.5-2.598V8.232a3 3 0 0 0-1.5-2.598L13.5.866a3 3 0 0 0-3 0L2.242 5.634a3 3 0 0 0-1.5 2.598v9.536a3 3 0 0 0 1.5 2.598l8.258 4.768a3 3 0 0 0 3 0z"
            fill="#FFF"
            fillRule="evenodd"
        />
    </svg>
)

export default SvgComponent