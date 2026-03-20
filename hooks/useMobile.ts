import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
export default function useMobile() {
    const isMobile = useMediaQuery("(max-width: 640px)");
    return isMobile;
}
