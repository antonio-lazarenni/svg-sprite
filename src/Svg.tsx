import React, { FC } from 'react';

interface Props {
    id: string
}

const Svg:FC<Props> = ({ id, ...props }) =>
    <svg viewBox="0 0 40 40" width="60" height="60" id="cardProviderLogo" {...props} >
        <use href={id}></use>
    </svg>

export default Svg;