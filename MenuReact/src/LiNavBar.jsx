import { useState } from "react"

export function SectionNav({ label, Icon }) {

  const [navBar, setNavBar] = useState(false)
  console.log(navBar)

  const handleClick = () => {
    setNavBar(true)
    console.log("Estas haciendo click")
  }

  return (
    <ul >
      <li onClick={handleClick}>
        {Icon && <Icon />}
        {label}
      </li>
    </ul>

  )
}   
