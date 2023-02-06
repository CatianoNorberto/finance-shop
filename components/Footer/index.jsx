import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaGooglePlay } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { BsApple } from "react-icons/bs";

import logo from "../../public/images/visa-removebg.png";

import styles from "./footer.module.scss";

export default function FooterContainer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
            <div className={styles.footerLeftContent}>
                <div className={styles.footerBoxs}>
                    <div className={styles.footerBoxContent}>
                        <h3>About Finance</h3>
                        <Link href="/about">About us</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/Safety">Safety</Link>
                        <Link href="/join">Join the team</Link>
                    </div>
                    <div className={styles.footerBoxContent}>
                        <h3>Individuais</h3>
                        <Link href="/about">About us</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/Safety">Safety</Link>
                        <Link href="/join">Join the team</Link>
                    </div>
                    <div className={styles.footerBoxContent}>
                        <h3>Individuais</h3>
                        <Link href="/about">About us</Link>
                        <Link href="/blog">Blog</Link>
                    </div>
                    <div className={styles.footerBoxContent}>
                        <h3>Individuais</h3>
                        <Link href="/about">About us</Link>
                        <Link href="/blog">Blog faefa</Link>
                        <Link href="/Safety">Safety fafwafee</Link>
                    </div>
                    <div className={styles.footerBoxContent}>
                        <h3>Individuais</h3>
                        <Link href="/about">About us</Link>
                        <Link href="/blog">Blog fgssgdf</Link>
                        <Link href="/Safety">Safety fsfda</Link>
                    </div>
                </div>
                <div className={styles.footerDownload}>
                    <h3>Download the app</h3>
                    <div className={styles.download}>
                        <div className={styles.iconDownload}>
                            <BsApple size={24}/>
                        </div>
                        <div>
                            <p>Download on the</p>
                            <h2>Apple Store</h2>
                        </div>
                    </div>
                    <div className={styles.download}>
                        <div className={styles.iconDownload}>
                            <FaGooglePlay size={24}/>                    
                        </div>
                        <div>
                            <p>GET IT ON</p>
                            <h2>Google Play</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerCopyRightContent}>
                <div className={styles.logo}>
                    <Image src={logo} alt="btso_logo"/>
                    <span>
                        2014 - 2020 @Finance - all rights reserved Finance@
                    </span>
                </div>
                <div className={styles.socialMedia}>
                    <Link 
                      href="/">
                        <FaFacebookF style={{ color: "#A9B8C4"}} size={24}/>
                    </Link>
                    <Link 
                      href="/">
                        <RiTwitterFill style={{ color: "#A9B8C4"}} size={24}/>
                    </Link>
                    <Link 
                      href="/">
                        <AiFillYoutube style={{ color: "#A9B8C4"}} size={24}/>
                    </Link>
                    <Link 
                      href="/">
                        <FaInstagram style={{ color: "#A9B8C4"}} size={24}/>
                    </Link>
                    <Link 
                      href="/">
                        <FaTelegramPlane style={{ color: "#A9B8C4"}} size={24}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}
