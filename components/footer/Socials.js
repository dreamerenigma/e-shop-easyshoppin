import styles from "./styles.module.scss";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { BsYoutube, BsPinterest, BsDiscord } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassnikiSquare } from "react-icons/fa";
import { BiLogoFigma } from "react-icons/bi";

export default function Socials() {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h3>STAY CONNECTED</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/r3duct" target="_blank">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://ok.ru/m.yastrebova" target="_blank">
              <FaOdnoklassnikiSquare />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC-LXe9myi8QXh2M5UYNl1oQ" target="_blank">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="https://ru.pinterest.com/r3duct" target="_blank">
              <BsPinterest />
            </a>
          </li>
          <li>
            <a href="https://vk.com/r3duct" target="_blank">
              <SlSocialVkontakte />
            </a>
          </li>
          <li>
            <a href="https://discord.com/invite/HFNtGGWHDK" target="_blank">
              <BsDiscord />
            </a>
          </li>
          <li>
            <a href="https://www.figma.com/team_invite/redeem/IHhVbYADhWDiftybuzpjBl" target="_blank">
              <BiLogoFigma />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
