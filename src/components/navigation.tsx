import { FaPhone, FaInstagram, FaWeixin } from "react-icons/fa";
import SocialIcon from "../atoms/social-icon";

interface Props {
  telephone: string;
}

export default function Nav({ telephone }: Props) {
  return (
    <ul className="flex justify-end gap-2">
      <SocialIcon
        icon={<FaInstagram />}
        title="Instagram"
        url="https://instagram.com/kungfureading"
      />
      <SocialIcon
        icon={<FaWeixin />}
        title="Weibo"
        url="weixin://dl/chat?{Yipin-Joanna521}"
      />
      <SocialIcon icon={<FaPhone />} title="Call" url={`tel:${telephone}`} />
    </ul>
  );
}
