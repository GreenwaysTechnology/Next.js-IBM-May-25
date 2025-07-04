'use client'
import { useRef, useCallback,useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Modal({ children }) {
    const overlay = useRef(null)
    const wrapper = useRef(null)
    const router = useRouter()

    //hooks for controlling client navigation
    const onDismiss = useCallback(() => {
        router.back()
    }, [router])


    //close the modal diaglog
    const onClick = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss()
            }
        },
        [onDismiss, overlay, wrapper]
    )
    //if i press escape key i need to close the Modal Dialog
    const onKeyDown = useCallback(
        (e) => {
            if (e.key === 'Escape') onDismiss()
        },
        [onDismiss]
    )
    //useEffect  === ComponentDidUpdate
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        //componentWillUnMount hook
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])

    return (
        <div
            ref={overlay}
            className="fixed z-10 left-0 right-10 top-50 bottom-0 mx-auto bg-black/60"
            onClick={onClick}
        >
            {/* This div will show the photo */}
            <div
                ref={wrapper}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
            >
                <h1>Modal</h1>
                {children}
            </div>
        </div>
    )
}