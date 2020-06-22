import * as React from 'react';

export const Loader = ({size = 14}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z" />
  </svg>
);

export const Docs = ({size = 14}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export const Coffee = ({size = 14}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
    <line x1="6" y1="1" x2="6" y2="4"></line>
    <line x1="10" y1="1" x2="10" y2="4"></line>
    <line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>
);

export const Twitter = ({size = 14}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.6823 7.78828L11.7299 8.56683L10.9351 8.4715C8.04202 8.10606 5.51452 6.86673 3.36854 4.7853L2.31939 3.75253L2.04915 4.51519C1.47689 6.21529 1.8425 8.01072 3.03472 9.21827C3.67056 9.8856 3.5275 9.98093 2.43066 9.58371C2.04915 9.4566 1.71533 9.36127 1.68354 9.40894C1.57226 9.52016 1.95377 10.966 2.2558 11.538C2.6691 12.3325 3.5116 13.111 4.43358 13.5718L5.2125 13.9372L4.29052 13.9531C3.40033 13.9531 3.36854 13.969 3.46391 14.3027C3.78184 15.3355 5.03764 16.4318 6.4365 16.9084L7.42207 17.2421L6.56367 17.7506C5.29198 18.4814 3.79773 18.8945 2.30349 18.9263C1.58816 18.9422 1 19.0058 1 19.0534C1 19.2123 2.93934 20.1021 4.06797 20.4516C7.45386 21.4844 11.4756 21.0395 14.4959 19.2759C16.6419 18.0207 18.7879 15.5261 19.7893 13.111C20.3298 11.824 20.8703 9.47249 20.8703 8.34439C20.8703 7.6135 20.918 7.51817 21.8081 6.64429C22.3327 6.13585 22.8255 5.57974 22.9209 5.42085C23.0798 5.11896 23.0639 5.11896 22.2532 5.38907C20.9021 5.86574 20.7113 5.80218 21.3789 5.08719C21.8717 4.57875 22.4599 3.6572 22.4599 3.38709C22.4599 3.33942 22.2214 3.41886 21.9512 3.56186C21.6651 3.72075 21.0292 3.95908 20.5523 4.10208L19.6939 4.37219L18.915 3.84786C18.4858 3.56186 17.8818 3.24409 17.5639 3.14875C16.7531 2.92631 15.5132 2.95809 14.782 3.21231C12.795 3.92731 11.5392 5.77041 11.6823 7.78828Z" />
  </svg>
);

export const Weibo = ({size = 14}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.4536 4.78683C19.9645 3.29695 17.7684 2.72977 15.7413 3.11918C15.272 3.20947 14.9748 3.62709 15.0749 4.04753C15.175 4.47079 15.6349 4.73886 16.1041 4.64856C17.5463 4.37203 19.1073 4.77554 20.1647 5.8337C21.2221 6.89186 21.5099 8.33377 21.0563 9.59791C20.9092 10.0099 21.1595 10.4501 21.6162 10.5827C22.073 10.7153 22.561 10.4896 22.708 10.0804V10.0776C23.3462 8.30273 22.9427 6.27389 21.4536 4.78683Z" />
    <path d="M19.1645 6.84186C18.4118 6.08174 17.3023 5.79189 16.2803 5.99301C15.8618 6.07287 15.5958 6.45145 15.6834 6.83298C15.7742 7.21452 16.1862 7.45705 16.6015 7.37423C17.1011 7.27663 17.6462 7.4186 18.0128 7.78831C18.3794 8.16097 18.48 8.66673 18.321 9.11038C18.1912 9.48008 18.4119 9.87937 18.8206 10.0006C19.2294 10.1189 19.6642 9.91782 19.7972 9.54515C20.1184 8.63715 19.9172 7.60197 19.1645 6.84186Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8774 12.4948C9.05532 12.0595 6.99711 12.8921 6.20574 14.3616C5.39841 15.8603 6.18021 17.5255 8.01824 18.0689C9.92647 18.6327 12.173 17.768 12.9548 16.1524C13.727 14.569 12.7633 12.9418 10.8774 12.4948ZM10.7083 14.8904C10.5743 15.1007 10.2775 15.2 10.0478 15.1124C9.81802 15.0277 9.74782 14.791 9.87865 14.5865C10.0127 14.382 10.2967 14.2827 10.5232 14.3645C10.753 14.4405 10.836 14.6771 10.7083 14.8904ZM7.72477 16.8506C8.32149 17.0989 9.11606 16.8623 9.48622 16.3218C9.84999 15.7755 9.65853 15.1533 9.05862 14.9166C8.46509 14.6888 7.69924 14.9225 7.33227 15.4483C6.96211 15.9771 7.13762 16.6052 7.72477 16.8506Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.3058 11.1483L17.3135 11.1506C18.5601 11.5255 19.9475 12.4322 19.9445 14.0306C19.9445 16.6724 16.016 20 10.1097 20C5.60577 20 1 17.8814 1 14.3997C1 12.5775 2.18965 10.4705 4.23633 8.4856C6.97222 5.83223 10.1636 4.62325 11.3622 5.78864C11.8896 6.30304 11.9406 7.18943 11.602 8.2502C11.4222 8.78203 12.1174 8.48851 12.1174 8.48851C14.3289 7.59049 16.2587 7.53818 16.9629 8.51466C17.3405 9.03778 17.3045 9.76724 16.9569 10.6129C16.7994 10.9991 17.0044 11.0595 17.3058 11.1483ZM10.1245 18.7503C6.5286 19.0962 3.42413 17.5181 3.19039 15.2309C2.95666 12.9408 5.68356 10.8077 9.27648 10.4618C12.8724 10.116 15.9769 11.6941 16.2076 13.9812C16.4444 16.2713 13.7174 18.4074 10.1245 18.7503Z"
    />
  </svg>
);

export const Wechat = ({size = 14}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.71737 14.7754C9.71737 17.8891 12.6917 20.4129 16.3601 20.4129C17.0936 20.4129 17.8013 20.3113 18.4606 20.1242C18.4985 20.1141 18.5739 20.0912 18.5739 20.0912L20.9738 21.3333L20.3321 19.2926L20.3932 19.254C21.9775 18.2242 23 16.6017 23 14.7754C23 11.6629 20.0267 9.13908 16.3601 9.13908C12.6917 9.13908 9.71737 11.6629 9.71737 14.7754ZM17.7374 12.8336C17.7374 12.3287 18.1546 11.9182 18.6697 11.9182C19.1853 11.9182 19.6024 12.3287 19.6024 12.8336C19.6024 13.3407 19.1853 13.7517 18.6697 13.7517C18.1546 13.7517 17.7374 13.3407 17.7374 12.8336ZM14.0482 11.9182C13.5337 11.9182 13.1154 12.3287 13.1154 12.8336C13.1154 13.3407 13.5337 13.7517 14.0482 13.7517C14.5638 13.7517 14.9815 13.3407 14.9815 12.8336C14.9815 12.3287 14.5638 11.9182 14.0482 11.9182Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.3 8.64474C16.4112 8.64474 16.5213 8.64586 16.6308 8.652C16.0519 5.45013 12.7935 3 8.86106 3C4.51918 3 1 5.98741 1 9.67238C1 11.8332 2.20956 13.7539 4.08554 14.9731L4.15763 15.0194L3.39821 17.4338L6.23997 15.965C6.23997 15.965 6.32912 15.9907 6.3737 16.0041C7.15457 16.2247 7.99213 16.3442 8.86106 16.3442C9.03826 16.3442 9.21435 16.3369 9.38935 16.328C9.22811 15.8203 9.13951 15.287 9.13951 14.7363C9.13951 11.3713 12.3467 8.64474 16.3 8.64474ZM11.5966 6.29018C12.2063 6.29018 12.7 6.77495 12.7 7.37422C12.7 7.97293 12.2063 8.45938 11.5966 8.45938C10.9863 8.45938 10.4932 7.97293 10.4932 7.37422C10.4932 6.77495 10.9863 6.29018 11.5966 6.29018ZM5.02163 7.37422C5.02163 7.97293 5.5158 8.45938 6.12554 8.45938C6.73527 8.45938 7.23054 7.97293 7.23054 7.37422C7.23054 6.77495 6.73527 6.29018 6.12554 6.29018C5.5158 6.29018 5.02163 6.77495 5.02163 7.37422Z"
    />
  </svg>
);

export const Copy = ({size = 14}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.125 2C21.1605 2 22 2.83945 22 3.875V15.125C22 16.1605 21.1605 17 20.125 17H8.875C7.83945 17 7 16.1605 7 15.125V3.875C7 2.83945 7.83945 2 8.875 2H20.125ZM8.875 18.25C7.15187 18.25 5.75 16.8481 5.75 15.125V7H3.875C2.83945 7 2 7.83945 2 8.875V20.125C2 21.1605 2.83945 22 3.875 22H15.125C16.1605 22 17 21.1605 17 20.125V18.25H8.875Z" />
  </svg>
);

export const Globe = ({size = 14}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.05493 11H7.05009C7.2743 8.23681 8.1991 5.58442 9.72571 3.28983C6.16881 4.21597 3.46801 7.26324 3.05493 11ZM12 3.5508C10.3303 5.70194 9.30879 8.28683 9.05759 11H14.9424C14.6912 8.28683 13.6697 5.70194 12 3.5508ZM14.9424 13C14.6912 15.7132 13.6697 18.2981 12 20.4492C10.3303 18.2981 9.30879 15.7132 9.05759 13H14.9424ZM7.05009 13H3.05493C3.46801 16.7368 6.16881 19.784 9.72571 20.7102C8.1991 18.4156 7.2743 15.7632 7.05009 13ZM14.2743 20.7102C15.8009 18.4156 16.7257 15.7632 16.9499 13H20.9451C20.532 16.7368 17.8312 19.784 14.2743 20.7102ZM20.9451 11H16.9499C16.7257 8.23681 15.8009 5.58442 14.2743 3.28983C17.8312 4.21597 20.532 7.26324 20.9451 11ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
    />
  </svg>
);

export const Warning = ({size = 14}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.201 17.799 1.5 12 1.5C6.201 1.5 1.5 6.201 1.5 12C1.5 17.799 6.201 22.5 12 22.5ZM24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12Z"
    />
    <path d="M13.032 14.3565H10.959L10.6665 5.6445H13.326L13.032 14.355V14.3565ZM11.997 15.7215C12.417 15.7215 12.753 15.8445 13.0065 16.092C13.2645 16.3395 13.395 16.6575 13.395 17.043C13.395 17.4225 13.2645 17.736 13.005 17.9835C12.753 18.231 12.4155 18.3555 11.9955 18.3555C11.5815 18.3555 11.2455 18.231 10.986 17.9835C10.731 17.736 10.605 17.4225 10.605 17.043C10.605 16.662 10.7325 16.3485 10.986 16.101C11.244 15.8475 11.5815 15.7215 11.9955 15.7215H11.997Z" />
  </svg>
);
