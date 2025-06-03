
import React, { Suspense } from "react"

//simulate delay using timers with promise
//simulate delay using timers with promise
const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, import('../components/greeter'))
    })
})

const Greeter = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})
export default function DashboardPage() {
    return <div>
        {/* Static Content */}
        <h1>Header-Static</h1>
        <Suspense fallback={<h1>🌀 Loading Welcome....</h1>}>
            <Welcome/>
        </Suspense>
        <Suspense fallback={<h1>🌀 Loading Greeter....</h1>}>
            <Greeter/>
        </Suspense>
        <h2>Footer-Static</h2>
    </div>
}