import { MyClient } from "./components/MyClient";
import MyServer from "./components/MyServer";

export default function MyClientPage() {
    return <>
        <MyClient>
            {/* Pass server Component as Prop so that server component never looses
        server rendering */}
            <MyServer />
        </MyClient>
    </>
}