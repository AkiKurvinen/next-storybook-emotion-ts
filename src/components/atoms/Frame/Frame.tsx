import styled from '@emotion/styled'
import { css } from '@emotion/react';
import React from 'react';
import Image from 'next/image'

const frame_styles = css`
    border: solid thin black;
`
interface Frameprops{
    src: string
}
 
export const StyledFrame = ({src}:Frameprops) => {
    return(
        <Image
        src={src}
        width={640}
        height={426}
        alt="Picture of the bird"
      />
    )
}
export const Frame = styled(StyledFrame)`
${frame_styles}
`