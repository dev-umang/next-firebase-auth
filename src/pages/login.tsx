import { ChangeEvent } from "react";
import styles from "../../styles/auth.module.scss";
import UkButton from "../common/components/UIComponents/FormComponents/UkButton/UkButton";
import UkInput from "../common/components/UIComponents/FormComponents/UkInputField/ukInputField";

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
  };

  const FormHeader = (
    <div>
      <h1 style={{ color: "#4a4cf6" }}>Log In</h1>
      <hr />
    </div>
  );
  return (
    <section className={styles.jumboWrapper}>
      <div className="row m-0 d-flex">
        <div className={`${styles.image} col-6`}></div>
        <div className={`${styles.formWrapper} col-6`}>
          <div className={styles.formContainer}>
            {FormHeader}
            <div className={styles.formBody}>
              <UkInput
                type="text"
                onChange={handleChange}
                placeholder="User Name"
                className="w-100 my-3"
                inputClass="w-100"
              />

              <UkInput
                type="password"
                onChange={handleChange}
                placeholder="Password"
                className="w-100 my-3"
                inputClass="w-100"
                name="password"
              />

              <UkButton label="Log In" /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
