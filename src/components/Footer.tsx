import { Montserrat } from "next/font/google";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <div className="footer__logo">
          <svg
            width="207"
            height="68"
            viewBox="0 0 62 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4949 9.17676H58.8308V45.8765H9.17682V13.4948C9.17682 11.1111 11.1112 9.17676 13.4949 9.17676Z"
              fill="white"
            />
            <path
              d="M12.4135 48.5725H58.8308C60.3234 48.5725 61.5267 47.3616 61.5267 45.8766V4.85877C61.5267 2.17807 59.3486 0 56.6679 0H11.3321C5.08724 0 0 5.08724 0 11.3321V55.5865C0 62.433 5.56703 68 12.4135 68H58.8308C60.3234 68 61.5267 66.7891 61.5267 65.3041C61.5267 63.819 60.3158 62.6081 58.8308 62.6081H12.4135C8.54474 62.6081 5.39949 59.4629 5.39949 55.5941C5.39949 51.7254 8.54474 48.5801 12.4135 48.5801V48.5725ZM11.3321 5.39948H56.1272V43.173H12.4135C9.80894 43.173 7.39478 43.9803 5.39949 45.3587V11.3321C5.39949 8.05734 8.06496 5.39187 11.3321 5.39187V5.39948Z"
              fill="white"
            />
            <path
              d="M58.8231 58.2901H12.4135C10.9208 58.2901 9.71753 57.0792 9.71753 55.5941C9.71753 54.1091 10.9284 52.8982 12.4135 52.8982H58.8231C60.3158 52.8982 61.5191 54.1091 61.5191 55.5941C61.5191 57.0792 60.3082 58.2901 58.8231 58.2901Z"
              fill="white"
            />
            <path
              d="M46.958 19.9683H51.2684C51.8657 19.9683 52.3499 19.4841 52.3499 18.8868V14.5764C52.3499 13.9791 51.8657 13.495 51.2684 13.495H46.958C46.3607 13.495 45.8766 13.9791 45.8766 14.5764V18.8868C45.8766 19.4841 46.3607 19.9683 46.958 19.9683Z"
              fill="#2B3252"
            />
            <path
              d="M36.1667 19.9683H40.4771C41.0744 19.9683 41.5585 19.4841 41.5585 18.8868V14.5764C41.5585 13.9791 41.0744 13.495 40.4771 13.495H36.1667C35.5694 13.495 35.0852 13.9791 35.0852 14.5764V18.8868C35.0852 19.4841 35.5694 19.9683 36.1667 19.9683Z"
              fill="#2B3252"
            />
            <path
              d="M25.3677 19.9683H29.6782C30.2754 19.9683 30.7596 19.4841 30.7596 18.8868V14.5764C30.7596 13.9791 30.2754 13.495 29.6782 13.495H25.3677C24.7705 13.495 24.2863 13.9791 24.2863 14.5764V18.8868C24.2863 19.4841 24.7705 19.9683 25.3677 19.9683Z"
              fill="#2B3252"
            />
            <path
              d="M14.5763 19.9683H18.8868C19.484 19.9683 19.9682 19.4841 19.9682 18.8868V14.5764C19.9682 13.9791 19.484 13.495 18.8868 13.495H14.5763C13.9791 13.495 13.4949 13.9791 13.4949 14.5764V18.8868C13.4949 19.4841 13.9791 19.9683 14.5763 19.9683Z"
              fill="#2B3252"
            />
          </svg>
          <h3 className={montserrat.className}> COMPANY NAME </h3>
        </div>
        <span className={montserrat.className} style={{ fontSize: "14px" }}>
          {" "}
          &copy; 2023 All Rights Reserved{" "}
        </span>
      </div>
      <div className="footer__center">
        <div className="footer__links">
          <Link
            href="/services"
            className={montserrat.className}
            style={{ color: "white" }}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={montserrat.className}
            style={{ color: "white" }}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={montserrat.className}
            style={{ color: "white" }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={montserrat.className}
            style={{ color: "white" }}
          >
            Contact
          </Link>
        </div>
        <div className="footer__socials">
          <svg
            width="85"
            height="35"
            viewBox="0 0 85 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1H25.01C29.43 1 33.01 4.58 33.01 9V25.01C33.01 29.43 29.43 33.01 25.01 33.01H9C4.58 33.01 1 29.43 1 25.01V9C1 4.58 4.58 1 9 1Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.4101 16C23.8201 18.73 22.4201 21.42 19.9501 22.66C17.4801 23.9 14.5001 23.42 12.5401 21.47C10.5901 19.52 10.1101 16.53 11.3501 14.06C12.5901 11.59 15.2801 10.2 18.0101 10.6C20.8001 11.01 22.9901 13.2 23.4101 16Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M59.02 1H75.03C79.45 1 83.03 4.58 83.03 9V25.01C83.03 29.43 79.45 33.01 75.03 33.01H59.02C54.6 33.01 51.02 29.43 51.02 25.01V9C51.02 4.58 54.6 1 59.02 1Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60.3902 33.0199H60.0002C57.6302 33.0199 55.4502 31.8499 54.1602 29.8799C55.7702 31.6899 57.9902 32.7999 60.3902 33.0199ZM70.7502 33.0199H66.9602V19.8999H63.1702V16.1499H66.9602V13.3399C66.9602 10.7599 69.0902 8.6499 71.7002 8.6499H76.4402V12.3999H71.7002C71.1802 12.3999 70.7502 12.8199 70.7502 13.3399V16.1499H75.9702L75.0202 19.8999H70.7502V33.0199ZM73.9102 33.0199H73.5002C75.9102 32.8099 78.1402 31.6999 79.7602 29.8799C78.4702 31.8499 76.2902 33.0199 73.9202 33.0199H73.9102Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="form">
        <form>
          <div className="inputs">
            <input
              type="text"
              placeholder="Name"
              className={`input ${montserrat.className}`}
              style={{
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "8px",
                fontSize: "14px",
                backgroundColor: "#2b3252",
                opacity: "0.7",
                lineHeight: "17px",
                color: "#ffff",
                height: "42px",
                width: "50%",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              className={`input ${montserrat.className}`}
              style={{
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "8px",
                fontSize: "14px",
                backgroundColor: "#2b3252",
                lineHeight: "17px",
                color: "#ffff",
                opacity: "0.7",
                height: "42px",
                width: "50%",
              }}
            />
          </div>
          <div className="textarea">
            <textarea
              placeholder="Text"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "8px",
                fontSize: "14px",
                backgroundColor: "#2b3252",
                lineHeight: "17px",
                color: "#ffff",
                width: "100%",
                height: "120px",
                opacity: "0.7",
              }}
            />
            <button type="submit" className="form__button">
              {" "}
              Send{" "}
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
