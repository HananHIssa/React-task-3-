
import styles from './Navbar.module.css';
function Navbar() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className='row'>
          <div className={styles.logoContainer}>
{        /*   <img src="assets/img/public/logo.svg" alt="Logo" />
  */}        
      <a href="#">Ecommerce</a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#" className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </nav>
          <div className={styles.authContainer}>
            <a href="#" className={styles.login}>
            SignIn
            </a>
            <a href="#" className={styles.register}>
            SignUp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
