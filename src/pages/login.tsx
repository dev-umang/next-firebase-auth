import styles from "../../styles/auth.module.scss";

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  const FormHeader = (
    <div>
      <h1>Log In</h1>
      <hr />
    </div>
  );
  return (
    <section className={styles.jumboWrapper}>
      <div className="row m-0 d-flex">
        <div className={`${styles.image} col-6`}></div>
        <div className={`${styles.formWrapper} col-6`}>
          <div className={styles.formContainer}>{FormHeader}</div>
        </div>
      </div>
    </section>
  );
}
