import React from 'react';

export const RemoveIcon = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 47.971 47.971"
        width="16px"
        height="16px"
        onClick={props.onClick}
        style={{
            cursor: 'pointer',
            position: 'absolute',
            right: '20px',
            top: '40%'
        }}
    >
        <g>
            <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#FFFFFF" />
        </g>
    </svg>
)

export default RemoveIcon;
