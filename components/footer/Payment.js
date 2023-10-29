import styles from "./styles.module.scss";

export default function Payment() {
  return (
    <div className={styles.footer__paymment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer__flexwrap}>
        <img src="/images/payment/mir.webp" alt="" />
        <img src="/images/payment/pochtabank.webp" alt="" />
        <img src="/images/payment/mastercard.webp" alt="" />
      </div>
    </div>
  );
}
