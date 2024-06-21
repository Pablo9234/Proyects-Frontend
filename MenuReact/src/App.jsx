import { SectionNav } from './LiNavBar.jsx'
import { GrGallery } from "react-icons/gr";
import { MdInfoOutline } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { FaBoxes } from "react-icons/fa";

export function App() {
  
  return (
    <ul className='NavBar' id='OnlyHome'>
      <SectionNav
        Icon={TiThMenu} />

      <SectionNav
        label="Products"
        Icon={FaBoxes}
      />
      <SectionNav
        label="Buy Now"
        Icon={GiReceiveMoney}
      />
      <SectionNav
        label="About Us"
        Icon={MdInfoOutline}
      />
      <SectionNav
        label="Gallery"
        Icon={GrGallery}
      />
    </ul>


  )
}

