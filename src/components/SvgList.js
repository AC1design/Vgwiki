import React from 'react'

const SvgComponent = props => (
    <svg viewBox="0 0 60.123 60.123" width={20} height={20} {...props}>
        <g fill="#FFF">
            <path d="M57.124 51.893H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 33.062H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 14.231H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6z" />
            <circle cx={4.029} cy={11.463} r={4.029} />
            <circle cx={4.029} cy={30.062} r={4.029} />
            <circle cx={4.029} cy={48.661} r={4.029} />
        </g>
    </svg>
)

export default SvgComponent