import styles from "./footer.module.css";
import { LuBuilding2 } from "react-icons/lu";
import { RiContactsBookFill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaMailBulk } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { GiCrossedSlashes } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.titleContainer}>
      <div class={styles.wave}>
      <div class={styles.wave1} id="wave1"></div>
      <div class={styles.wave2} id="wave2"></div>
      <div class={styles.wave3} id="wave3"></div>
      <div class={styles.wave4} id="wave4"></div>
    </div>

        <h1 className={styles.title}>© 2024 [Company Name]. All rights reserved.</h1>
        {/* <div className={styles.break4}></div> */}
        {/* <h1 className={styles.title}>About Us</h1>
        <div className={styles.break4}></div>
        <h1 class={styles.title}>About Us</h1> */}
      </div>
      <div className={styles.lineWithBreak}>
        <div className={styles.line}></div>
        <div className={styles.break}></div>
        <div className={styles.line}></div>
        <div className={styles.break}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.titleContainer}>
        
        <ul>
          <li>
            <a href className="text-gray-700">
                Home
            </a>
          </li>
          <li>
            <a href className="text-gray-700">
              Product Tour
            </a>
          </li>
          <li>
            <a href className="text-gray-700">
              Customers
            </a>
          </li>
          <li>
            <a href className="text-gray-700">
              Contact us
            </a>
          </li>
          <li>
            <a href className="text-gray-700">
            About Us
            </a>
          </li>
        </ul>
        <div className={styles.break2}></div>
        <ul>
          <li>
            <a href className="text-gray-700">
            FAQs
            </a>
          </li>
          <li>
            <a href className="text-gray-700">
              Our Inspiration
            </a>
          </li>
          <li>
            <a href className="text-gray-700">
              Electrician
            </a>
          </li>
          <li>
            <a href className="text-gray-700">
              Plumber
            </a>
          </li>
          <li>
            <a href className="text-gray-700">
              Techinician
            </a>
          </li>
        </ul>
        <div className={styles.break3}></div>
        <ul>
          <li>
            <a href className="text-gray-700">
              Gardener
            </a>
          </li>
          <li>
            <a href className="text-gray-700">
              Our Inspiration
            </a>
          </li>
          <li>
            <a href className="text-gray-700">
            Business Hours
<br />
Monday to Friday: 9:00 AM - 6:00 PM
<br />
Saturday: 10:00 AM - 4:00 PM
<br />
Sunday: Closed
            </a>
          </li>
          {/* <li>
            <a href className="text-gray-700">
              Allen system
            </a>
          </li>
          <li>
            <a href className="text-gray-700">
              Lead with Allen
            </a>
          </li> */}
        </ul>
      </div>
      <hr />
      <div className={styles.titleContainer}>
        
        <CiHeart className="w-24 h-24 text-gray-800 mr-5" />
        <div className={styles.break5}></div>
        <LuBuilding2 className="w-20 h-20 text-gray-800 mr-5" />

        <p className="text-gray-800">
        123, Civil Lines,<br /> Near Anand Bhawan,<br /> Prayagraj, Uttar Pradesh - 211001


        </p>
        <div className={styles.break5}></div>
        <RiContactsBookFill className="w-20 h-20 text-gray-800 mr-5" />
        <p className="text-gray-800">
          +91-744-3556677,
          <br />
          +91-744-2757575
          <br />
          (08:00 AM to 08:00 PM)
        </p>
        <div className={styles.break5}></div>
        <TfiHeadphoneAlt className="w-20 h-20 text-gray-800 mr-5" />
        <p className="text-gray-800">
          Get Support
          <br />
          Click here
        </p>
        <div className={styles.break5}></div>
        <FaMailBulk className="w-20 h-20 text-gray-800 mr-5" />
        <p className="text-gray-800">
          Send us a Message
          <br />
          info@servicer.in
        </p>
      </div>
      <hr />
      <div className={styles.titleContainer}>
        <div className={styles.break7}></div>
        <div className={styles.hx}>
          <a href>Terms of Use</a>
        </div>
        <div className={styles.hx}>|</div>
        <div className={styles.hx}>
          <a href> Privacy Policy</a>
        </div>
        <div className={styles.hx}>|</div>
        <div className={styles.hx}>
          <a href>Payment Terms</a>
        </div>
        <div className={styles.hx}>|</div>
        <div className={styles.hx}>
          <a href>Refund & Cancellation</a>
        </div>
        <div className={styles.hx}>|</div>
        <div className={styles.hx}>
          <a href>Disclaimer</a>
        </div>
        <div className={styles.hx}>|</div>
        <div className={styles.hx}>
          <a href>Public Notice</a>
        </div>
      </div>
      <hr />
      <div className={styles.titleContainer}>
        <p>
        [Your Company Name]
        <br />
(CIN: U74999UP2021PTC123456)
<br />
Registered & Corporate Office: “[Office Name/Building],” 123, Civil Lines, Near Anand Bhawan, Prayagraj, Uttar Pradesh - 211001
        </p>
        <div className={styles.break6}></div>
        <a href>
          <FaFacebook className="h-14 w-14 text-gray-800" />
        </a>
        <GiCrossedSlashes className="h-14 w-14 text-gray-800" />
        <a href>
          <FaLinkedin className="h-14 w-14 text-gray-800" />
        </a>
        <GiCrossedSlashes className="h-14 w-14 text-gray-800" />
        <a href>
          <FaTelegramPlane className="h-14 w-14 text-gray-800" />
        </a>
        <GiCrossedSlashes className="h-14 w-14 text-gray-800" />
        <a href>
          <FaWhatsapp className="h-14 w-14 text-gray-800" />
        </a>
        <GiCrossedSlashes className="h-14 w-14 text-gray-800" />
        <a href>
          <BsTwitterX className="h-14 w-14 text-gray-800" />
        </a>
        <GiCrossedSlashes className="h-14 w-14 text-gray-800" />
        <a href>
          <IoLogoInstagram className="h-14 w-14 text-gray-800" />
        </a>
        <GiCrossedSlashes className="h-14 w-14 text-gray-800" />
        <a href>
          <FaYoutube className="h-14 w-14 text-gray-800" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
