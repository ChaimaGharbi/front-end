import styles from "./LoginComponent.module.css";

export function LoginComponent(props) {
  return (
    <div className={`${styles.wrapper} ${styles.fadeInDown}`}>
      <div id={styles.formContent}>
        <form>
          <input
            type="email"
            id="login"
            className={`${styles.fadeIn} ${styles.first} ${styles.forrm}`}
            name="login"
            placeholder="email"
            required
          />
          <input
            type="password"
            id="password"
            className={`${styles.fadeIn} ${styles.second} ${styles.forrm}`}
            name="login"
            placeholder="password"
            required
          />
          <input
            type="submit"
            className={`${styles.fadeIn} ${styles.third} ${styles.forrm1}`}
            value="Log In"
          />
        </form>

        <div id={styles.formFooter}>
          <p>
            Not a member?{"  "}
            <a className={styles.underlineHover} href="signup">
              Register
            </a>
          </p>
          <p>Commerçant?{"  "}
            <a className={styles.underlineHover} href="#">Login here</a> 
          </p>
        </div>
      </div>
    </div>
  );
}
