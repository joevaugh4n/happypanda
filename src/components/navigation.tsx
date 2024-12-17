import { FaWhatsapp, FaInstagram, FaWeixin } from "react-icons/fa"
import SocialIcon from "../atoms/social-icon"

export default function Nav() {

    return (
        <ul className='flex lg:gap-4 gap-2'>
            <SocialIcon icon={<FaWhatsapp />} title='WhatsApp' url='test' />
            <SocialIcon icon={<FaInstagram />} title='Instagram' url='test' />
            <SocialIcon icon={<FaWeixin />} title='Weibo' url='test' />
        </ul>
    )

}