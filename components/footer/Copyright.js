import Link from "next/link";
import styles from "./styles.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

export default function Copyright({ country }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const selectedLanguage = i18n.language;

  const translation = selectedLanguage === 'en'
    ? require('../../public/locales/en/translation.json')
    : require('../../public/locales/ru/translation.json');

  const data = [
    {
      name: t("privacy"),
      link: "",
    },
    {
      name: t("policy"),
      link: "",
    },
    {
      name: t("cookie"),
      link: "",
    },
    {
      name: t("terms"),
      link: "",
    },
    {
      name: t("notice"),
      link: "",
    },
  ];

  return (
    <div className={styles.footer__copyright}>
      <section>{t("copyright")}</section>
      <section>
        <ul>
          {data.map((link, index) => (
            <li key={index}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> {country.name}
            </a>
          </li>
        </ul>
      </section>
      <section>
        <button onClick={() => changeLanguage("en")} className="language-button">
          <img src="/images/flags/usa.png" alt="English" /> EN
        </button>
        <button onClick={() => changeLanguage("ru")} className="language-button">
          <img src="/images/flags/russia.png" alt="Русский" /> RU
        </button>
      </section>
    </div>
  );
}
