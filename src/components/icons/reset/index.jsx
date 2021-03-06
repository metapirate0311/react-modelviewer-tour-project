import React from 'react'

const ResetIcon = React.memo(({fill = 'rgba(255,255,255,.95'}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width="40" 
      height="40" 
      viewBox="0 0 40 40">
      <g transform="translate(-1856 -970)">
        <circle fill={fill} cx="20" cy="20" r="20" transform="translate(1856 970)"/>
        <path fill="#434343" d="M15.125-13.125a.334.334,0,0,1,.391-.062.342.342,0,0,1,.234.344v4.469A.331.331,0,0,1,15.375-8H10.906a.342.342,0,0,1-.344-.234.334.334,0,0,1,.063-.391l1.719-1.719A5.978,5.978,0,0,0,8-12.125a5.9,5.9,0,0,0-4.328,1.8A5.9,5.9,0,0,0,1.875-6a5.9,5.9,0,0,0,1.8,4.328A5.9,5.9,0,0,0,8,.125a5.84,5.84,0,0,0,4.063-1.562.36.36,0,0,1,.531.031l.625.625a.312.312,0,0,1-.031.531A7.5,7.5,0,0,1,8,1.75,7.47,7.47,0,0,1,2.516-.516,7.452,7.452,0,0,1,.25-5.984a7.478,7.478,0,0,1,2.281-5.484A7.46,7.46,0,0,1,8-13.75a7.393,7.393,0,0,1,5.469,2.281Z" transform="translate(1868 996)"/>
      </g>
    </svg>
  )
})

export {ResetIcon}