import React from 'react'
import './Frame.css'

const Frames = props => (
    <div className='farmesgridgroup'>
        
            {['Ylva', 'Adagio', 'Alpha', 'Anka', 'Ardan', 'Baptiste', 'Baron', 'Blackfeather',
                'Catherine', 'Celeste', 'Churnwalker', 'Flicker', 'Fortress', 'Glaive', 'Grace', 'Grumpjaw',
                'Gwen', 'Idris', 'Inara', 'Joule', 'Kensei', 'Kestrel', 'Kinetic', 'Koshka',
                'Krul', 'Lance', 'Lorelai', 'Lyra', 'Magnus', 'Malene', 'Ozo', 'Petal',
                'Phinn', 'Reim', 'Reza', 'Ringo', 'Rona', 'Samuel', 'Saw', 'Silvernail',
                'Skaarf', 'Skye', 'Taka', 'Tony', 'Varya', 'Vox', 'Yates',].map((text, index) => (
                    <a href={`/${text}`}> 
<img className='farmesgrid' style={{ overflow: 'visible' }} src={'https://vgproassets.nyc3.cdn.digitaloceanspaces.com/heroes/' + `${text.toLowerCase()}` + '.png'}></img>
          </a>      ))}
    </div>
               
)

export default Frames