import Link from "next/link";
import Image from "next/image";
import { AiOutlineQrcode, AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Button from "components/Button";
import Logo from "../../public/images/visa-removebg.png";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <>
      <div className={styles.headerContents}>
        <div className={styles.logo}>
          <Image src={Logo} alt="finance_logo"/>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/prices">Prices</Link>
            </li>
            <li>Individuais
              <MdOutlineKeyboardArrowDown
                style={{
                  marginLeft: 6
                }}
              />
            </li>
            <li>Companies
              <MdOutlineKeyboardArrowDown
                style={{
                  marginLeft: 6
                }}
              />
            </li>
            <li>About
              <MdOutlineKeyboardArrowDown
                style={{
                  marginLeft: 6
                }}
              />
            </li>
            <li>Support
              <MdOutlineKeyboardArrowDown
                style={{
                  marginLeft: 6
                }}
              />
            </li>
          </ul>
        </div>
        <div className={styles.menuactive}>
          <div className={styles.menuAcliveContent}>
            <div className={styles.menuApp}>
              <AiOutlineQrcode 
                style={{
                  marginRight: 12, 
                  color: "#A9B8C4"
                }} 
                size={24} 
              />
              <div className={styles.menuAppContent}>
                <p>Dowload app
                  <MdOutlineKeyboardArrowDown
                    style={{
                      marginLeft: 6
                    }}
                  />
                </p>
              </div>
            </div>
            <div className={styles.menuApp}>
              <AiOutlineGlobal 
                style={{
                  marginRight: 12, 
                  color: "#A9B8C4"
                }} 
                size={24} 
              />
              <div className={styles.menuAppContent}>
                <p>ESMX
                  <MdOutlineKeyboardArrowDown
                    style={{
                      marginLeft: 6
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className={styles.buttonActive}>
            <Button title="Create an account"/>
            {/* <button className={styles.button}>
              <Link href="/registration">Create an account</Link>
            </button> */}
            <Link href="/signup">Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}

 
