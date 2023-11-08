import { BiUser } from 'react-icons/bi';
import styles from './styles.module.scss';
import { SiMinutemailer } from "react-icons/si";
import { IoEye, IoEyeOff, IoKeyOutline } from 'react-icons/io5';
import { ErrorMessage, useField } from 'formik';
import { useState } from 'react';

export default function LoginInput({ icon, placeholder, ...props }) {
  const [field, meta] = useField(props);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div
      className={`${styles.input} ${
        meta.touched && meta.error ? styles.error : ''
      }`}
    >
      {icon == 'user' ? (
        <BiUser />
      ) : icon == 'email' ? (
        <SiMinutemailer />
      ) : icon == 'password' ? (
        <IoKeyOutline />
      ) : (
        ''
      )}
      <input
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
        type={
          icon === 'password'
            ? isPasswordVisible
              ? 'text'
              : 'password'
            : field.type
        }
      />
      {icon === 'password' && (
        <button type="button" onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <IoEye /> : <IoEyeOff />}
        </button>
      )}
      {meta.touched && meta.error && (
        <div className={styles.error__popup}>
          <span></span>
          <ErrorMessage name={field.name} />
        </div>
      )}
    </div>
  );
}
