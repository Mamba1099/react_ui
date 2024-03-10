import {useBoolean} from "@chakra-ui/react"

export default function App() {
  const [flag, setFlag] = useBoolean()

  return (
    <>
    <p>Boolean state: {flag.toString()}</p>
    <button onClick={setFlag.toggle}>Click me to change state</button> {/*toggle is function to negate the boolean value*/}
    </>
  )

}

