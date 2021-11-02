import React, { useState } from 'react';

export const LikeButton = () => {
    const [ faved, setFaved ] = useState(false);

    const handleClick = () => setFaved((prevFaved) => !prevFaved);

    return (
        <span
            onClick={handleClick}
            role="switch"
        >{faved ? '👍' : '👎' }</span>
    );
}