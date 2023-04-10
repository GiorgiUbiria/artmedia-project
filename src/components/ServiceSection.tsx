import React from "react";

import styles from "./ServiceSection.module.css";

function ServiceSection() {
  return (
    <section id="services__section">
      <h2 className={styles.services__header}> Services </h2>
      <section className={styles.services}>
        <figure className={styles.first}>
          <svg
            width="150"
            height="160"
            viewBox="0 0 150 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Service Name"
            role="img"
          >
            <circle cx="76" cy="90" r="70" fill="#F0F1F1" />
            <circle cx="75" cy="75" r="75" fill="#F8F8FA" />
            <path
              className="path"
              d="M97.5083 62.4199V78.2992C97.5083 87.7959 92.0816 91.8657 83.9416 91.8657H56.8391C55.4516 91.8657 54.1258 91.7426 52.8924 91.4651C52.1216 91.3417 51.3816 91.1259 50.7033 90.8792C46.0783 89.1526 43.2725 85.1442 43.2725 78.2992V62.4199C43.2725 52.9233 48.6991 48.8534 56.8391 48.8534H83.9416C90.8483 48.8534 95.8125 51.7825 97.1383 58.4734C97.3541 59.7067 97.5083 60.9708 97.5083 62.4199Z"
              stroke="#2B3252"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M106.762 71.6703V87.5496C106.762 97.0462 101.335 101.116 93.195 101.116H66.0925C63.8108 101.116 61.745 100.808 59.9567 100.13C56.2875 98.773 53.79 95.9671 52.8958 91.4655C54.1292 91.743 55.455 91.8661 56.8425 91.8661H83.945C92.085 91.8661 97.5117 87.7962 97.5117 78.2996V62.4203C97.5117 60.9712 97.3884 59.6763 97.1417 58.4738C103 59.7071 106.762 63.8387 106.762 71.6703Z"
              stroke="#2B3252"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M70.3702 78.5147C74.8658 78.5147 78.5102 74.8703 78.5102 70.3747C78.5102 65.8791 74.8658 62.2346 70.3702 62.2346C65.8746 62.2346 62.2301 65.8791 62.2301 70.3747C62.2301 74.8703 65.8746 78.5147 70.3702 78.5147Z"
              stroke="#2B3252"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M52.7383 63.5917V77.1584"
              stroke="#2B3252"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M88.0169 63.5925V77.1593"
              stroke="#2B3252"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h4>Service Name</h4>
        </figure>
        <figure className={styles.second}>
          <svg
            width="150"
            height="160"
            viewBox="0 0 150 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Service Name"
            role="img"
          >
            <circle cx="76" cy="90" r="70" fill="#F0F1F1" />
            <circle cx="75" cy="75" r="75" fill="#F8F8FA" />
            <path
              className="path"
              d="M81.9736 87.3273H66.5569"
              stroke="#2B3252"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M77.0351 45.7642L76.9426 45.98L68.0009 66.7309H59.2134C57.1167 66.7309 55.1126 67.1625 53.2934 67.9334L58.6892 55.045L58.8126 54.7367L59.0284 54.2434C59.0901 54.0584 59.1517 53.8734 59.2442 53.7192C63.2834 44.3767 67.8467 42.2492 77.0351 45.7642Z"
              stroke="#2B3252"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M93.6541 67.3477C92.2666 66.9161 90.7866 66.7311 89.3066 66.7311H68.0008L76.9425 45.9802L77.035 45.7644C77.4975 45.9186 77.9291 46.1344 78.3916 46.3194L85.2058 49.1869C88.9983 50.7594 91.65 52.3936 93.2533 54.3669C93.5616 54.7369 93.8083 55.0761 94.0241 55.4769C94.3016 55.9086 94.5175 56.3402 94.6408 56.8027C94.7641 57.0802 94.8566 57.3577 94.9183 57.6044C95.7508 60.1944 95.2575 63.3702 93.6541 67.3477Z"
              stroke="#2B3252"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M104.359 81.7782V87.7907C104.359 88.4074 104.328 89.0241 104.297 89.6407C103.711 100.402 97.6987 105.828 86.2903 105.828H62.2403C61.5003 105.828 60.7603 105.767 60.0512 105.674C50.2462 105.027 45.0045 99.7849 44.357 89.9799C44.2645 89.2707 44.2028 88.5307 44.2028 87.7907V81.7782C44.2028 75.5807 47.9645 70.2466 53.3295 67.9341C55.1795 67.1632 57.1528 66.7316 59.2495 66.7316H89.3428C90.8537 66.7316 92.3336 66.9474 93.6903 67.3482C99.8261 69.2291 104.359 74.9641 104.359 81.7782Z"
              stroke="#2B3252"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M58.6892 55.0449L53.2934 67.9333C47.9284 70.2458 44.1667 75.5799 44.1667 81.7774V72.7433C44.1667 63.9866 50.395 56.6791 58.6892 55.0449Z"
              stroke="#2B3252"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M104.349 72.742V81.7761C104.349 74.9928 99.8473 69.227 93.6807 67.377C95.284 63.3686 95.7465 60.2236 94.9757 57.6028C94.914 57.3253 94.8215 57.0478 94.6982 56.8011C100.433 59.7611 104.349 65.8353 104.349 72.742Z"
              stroke="#2B3252"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h4>Service Name</h4>
        </figure>
        <figure className={styles.third}>
          <svg
            width="150"
            height="160"
            viewBox="0 0 150 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Service Name"
            role="img"
          >
            <circle cx="76" cy="90" r="70" fill="#F0F1F1" />
            <circle cx="75" cy="75" r="75" fill="#F8F8FA" />
            <path
              className="path"
              d="M105.833 84.25V65.75C105.833 50.3333 99.6666 44.1666 84.25 44.1666H65.75C50.3333 44.1666 44.1666 50.3333 44.1666 65.75V84.25C44.1666 99.6666 50.3333 105.833 65.75 105.833H84.25C99.6666 105.833 105.833 99.6666 105.833 84.25Z"
              stroke="#2B3252"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M67.6617 91.3419C71.2718 91.3419 74.1983 88.4153 74.1983 84.8052C74.1983 81.1951 71.2718 78.2686 67.6617 78.2686C64.0516 78.2686 61.125 81.1951 61.125 84.8052C61.125 88.4153 64.0516 91.3419 67.6617 91.3419Z"
              stroke="#2B3252"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M74.1982 84.8049V61.9575"
              stroke="#2B3252"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="path"
              d="M78.4841 58.8745L85.699 61.2794C87.4565 61.8652 88.8749 63.8385 88.8749 65.6885V67.6002C88.8749 70.0977 86.9324 71.4852 84.5891 70.6835L77.3742 68.2786C75.6167 67.6928 74.1982 65.7194 74.1982 63.8694V61.9578C74.1982 59.4911 76.11 58.0728 78.4841 58.8745Z"
              stroke="#2B3252"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h4> Service Name </h4>
        </figure>
      </section>
    </section>
  );
}

export default ServiceSection;
