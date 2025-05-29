import Image from "next/image";

export default function RemoteImage(){
    return <div>
         <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Picture of something" width={500} height={500} />
    </div>
}