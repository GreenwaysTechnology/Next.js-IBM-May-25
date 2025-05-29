import Image from 'next/image'
import RemoteImage from './components/RemoteImage'

export default function PicsPage(){
    return <div>
        <Image src="/window.svg" height={100} width={100} alt='window pic' />
        <RemoteImage/>
    </div>
}