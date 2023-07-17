type Props = {
  id: string;
  style?: any;
};

const SvgSelector = ({ id, style }: Props) => {
  switch (id) {
    case "logo":
      return (
        <svg
          width="88"
          height="28"
          viewBox="0 0 88 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...style}
        >
          <path
            d="M18.3867 3.2091C18.1274 2.60431 17.7569 2.04889 17.2506 1.54284C16.769 1.04913 16.201 0.666506 15.5589 0.394967C14.9044 0.13577 14.0154 0 12.904 0H0V17.0576H13.4844C14.6081 17.0576 15.5095 16.9219 16.164 16.6503C16.7937 16.3788 17.3494 15.9961 17.831 15.5148C18.2879 15.0581 18.6583 14.5027 18.9671 13.8238C19.4239 12.7253 19.4733 11.6145 19.0905 10.4913C18.7201 9.35577 18.1274 8.56584 17.3 8.13384C17.6334 7.87465 17.9298 7.52905 18.1891 7.07237C18.4484 6.61569 18.6213 6.04793 18.7077 5.36908C18.7942 4.69023 18.6954 3.96201 18.3867 3.2091ZM12.3483 4.08544C13.0522 4.08544 13.6573 4.5668 13.6573 5.29502C13.6573 6.02324 13.0522 6.46758 12.3483 6.46758H5.13691V4.08544H12.3483ZM12.9287 12.9598H5.13691V10.5654H12.9287C13.6696 10.5654 14.2623 10.9974 14.2623 11.7749C14.2623 12.4785 13.6326 12.9598 12.9287 12.9598Z"
            fill="black"
          />
          <path
            d="M28.6425 0L20.2703 17.0576H25.9876L27.0002 15.0087H36.0268L37.0394 17.0576H42.732L34.3598 0H28.6425ZM28.9759 10.911L31.5073 5.81342L33.977 10.911H28.9759Z"
            fill="black"
          />
          <path
            d="M63.699 12.9598H52.7336L63.699 4.08544V0H44.5837V4.08544H55.5614L44.5837 12.9598V17.0576H63.699V12.9598Z"
            fill="black"
          />
          <path
            d="M73.9105 0L65.5384 17.0576H71.2557L72.2682 15.0087H81.2949L82.3074 17.0576H88L79.6278 0H73.9105ZM74.244 10.911L76.7754 5.81342L79.245 10.911H74.244Z"
            fill="black"
          />
          <path
            d="M5.94385 23.3249C5.86002 23.1294 5.74026 22.9498 5.5766 22.7863C5.42092 22.6267 5.23729 22.503 5.02972 22.4152C4.81815 22.3314 4.53074 22.2875 4.17147 22.2875H3.92311e-06V27.8017H4.35909C4.72234 27.8017 5.01375 27.7578 5.22532 27.67C5.4289 27.5822 5.60853 27.4586 5.76421 27.3029C5.91191 27.1553 6.03167 26.9758 6.13146 26.7563C6.27916 26.4012 6.29513 26.0421 6.17138 25.679C6.05163 25.3119 5.86002 25.0566 5.59256 24.9169C5.70034 24.8331 5.79615 24.7214 5.87998 24.5738C5.9638 24.4261 6.01969 24.2426 6.04763 24.0232C6.07558 23.8037 6.04364 23.5683 5.94385 23.3249ZM3.99184 23.6082C4.21937 23.6082 4.41497 23.7638 4.41497 23.9992C4.41497 24.2346 4.21937 24.3783 3.99184 24.3783H1.66061V23.6082H3.99184ZM4.17945 26.477H1.66061V25.7029H4.17945C4.41896 25.7029 4.61057 25.8426 4.61057 26.094C4.61057 26.3214 4.40699 26.477 4.17945 26.477Z"
            fill="black"
          />
          <path
            d="M9.289 22.2875L6.58254 27.8017H8.43076L8.75809 27.1394H11.6761L12.0035 27.8017H13.8437L11.1372 22.2875H9.289ZM9.39678 25.8147L10.2151 24.1668L11.0135 25.8147H9.39678Z"
            fill="black"
          />
          <path
            d="M20.7096 23.9114C20.7057 23.668 20.6577 23.4446 20.5699 23.2491C20.4382 22.9498 20.2186 22.7104 19.9073 22.5309C19.4323 22.2556 18.6179 22.1159 17.4643 22.1159H17.4284C16.2747 22.1159 15.4604 22.2556 14.9854 22.5309C14.674 22.7104 14.4544 22.9498 14.3227 23.2491C14.2309 23.4566 14.183 23.7 14.183 23.9833C14.183 24.2626 14.2309 24.494 14.3307 24.6815C14.5063 25.0167 14.8017 25.2641 15.133 25.4117C15.3007 25.4875 15.5123 25.5434 15.7638 25.5872C16.0192 25.6311 16.2707 25.6591 16.5182 25.679C16.7657 25.695 17.0731 25.7069 17.4363 25.7189L18.4343 25.7748C18.578 25.7867 18.6499 25.8027 18.7736 25.8506C18.9013 25.8945 18.9732 25.9783 18.9852 26.1099C19.0011 26.3374 18.8375 26.493 18.4942 26.5688C18.2706 26.6167 17.9273 26.6406 17.4643 26.6406H17.4284C16.9493 26.6406 16.5981 26.6167 16.3745 26.5688C16.2069 26.5329 16.0831 26.473 16.0073 26.3972C15.9354 26.3294 15.8995 26.2137 15.8995 26.0461V26.0102H14.183V26.1498C14.187 26.4012 14.2349 26.6207 14.3227 26.8122C14.4544 27.1154 14.674 27.3588 14.9854 27.5384C15.4604 27.8137 16.2747 27.9493 17.4284 27.9493H17.4643C18.598 27.9453 19.4083 27.8057 19.8993 27.5224C20.2107 27.3428 20.4302 27.1034 20.5619 26.8042C20.6538 26.5927 20.7017 26.3453 20.7017 26.07C20.7017 25.7947 20.6538 25.5633 20.554 25.3758C20.3783 25.0246 20.0789 24.7892 19.7476 24.6456C19.5839 24.5698 19.3724 24.5139 19.1169 24.47C18.8654 24.4261 18.6139 24.3942 18.3624 24.3743C18.1149 24.3543 17.8076 24.3424 17.4363 24.3384L16.4583 24.2785C16.3146 24.2586 16.2508 24.2466 16.119 24.2107C15.9913 24.1748 15.9194 24.091 15.8995 23.9673C15.8675 23.7399 16.0152 23.5882 16.3426 23.5045C16.5621 23.4526 16.9054 23.4247 17.3805 23.4207H17.4563C17.9353 23.4247 18.2866 23.4486 18.5101 23.4965C18.6818 23.5324 18.8095 23.5922 18.8854 23.668C18.9572 23.7319 18.9932 23.8516 18.9932 24.0271V24.0511H20.7096V23.9114Z"
            fill="black"
          />
          <path
            d="M23.3363 27.8017V22.2875H21.6757V27.8017H23.3363Z"
            fill="black"
          />
          <path
            d="M29.5635 25.7029C29.5516 25.7389 29.5436 25.7708 29.5316 25.7987C29.4278 26.066 29.2442 26.2735 28.9767 26.4212C28.7093 26.5688 28.3221 26.6406 27.8071 26.6406C26.877 26.6406 26.3022 26.3533 26.0827 25.7748C26.0068 25.6072 25.9669 25.3638 25.9669 25.0406C25.9669 24.7174 26.0068 24.47 26.0827 24.3025C26.3022 23.7319 26.877 23.4446 27.8071 23.4446C28.3181 23.4446 28.7053 23.5204 28.9687 23.672C29.2362 23.8197 29.4238 24.0311 29.5316 24.3025C29.5356 24.3264 29.5436 24.3503 29.5555 24.3783H31.3159C31.272 24.1229 31.2082 23.8995 31.1323 23.7079C30.8808 23.0735 30.4058 22.6346 29.7871 22.4152C29.1763 22.1957 28.5696 22.1199 27.8071 22.1319C27.0447 22.1199 26.4339 22.1957 25.8152 22.4152C25.2044 22.6346 24.7294 23.0735 24.4779 23.7079C24.3262 24.067 24.2504 24.5099 24.2504 25.0406C24.2504 25.5713 24.3262 26.0142 24.4779 26.3733C24.7334 26.9997 25.2044 27.4426 25.8152 27.666C26.4339 27.8895 27.0447 27.9573 27.8071 27.9573C28.1943 27.9573 28.5416 27.9374 28.857 27.8975C29.1723 27.8615 29.4837 27.7857 29.7911 27.678C30.4138 27.4586 30.8808 27.0316 31.1323 26.3972C31.2162 26.2017 31.28 25.9703 31.3159 25.7029H29.5635Z"
            fill="black"
          />
          <path
            d="M39.9902 25.7029C39.9782 25.7389 39.9702 25.7708 39.9583 25.7987C39.8545 26.066 39.6709 26.2735 39.4034 26.4212C39.1359 26.5688 38.7487 26.6406 38.2338 26.6406C37.3037 26.6406 36.7289 26.3533 36.5093 25.7748C36.4335 25.6072 36.3936 25.3638 36.3936 25.0406C36.3936 24.7174 36.4335 24.47 36.5093 24.3025C36.7289 23.7319 37.3037 23.4446 38.2338 23.4446C38.7448 23.4446 39.132 23.5204 39.3954 23.672C39.6629 23.8197 39.8505 24.0311 39.9583 24.3025C39.9623 24.3264 39.9702 24.3503 39.9822 24.3783H41.7426C41.6987 24.1229 41.6348 23.8995 41.559 23.7079C41.3075 23.0735 40.8325 22.6346 40.2137 22.4152C39.603 22.1957 38.9962 22.1199 38.2338 22.1319C37.4714 22.1199 36.8606 22.1957 36.2419 22.4152C35.6311 22.6346 35.1561 23.0735 34.9046 23.7079C34.7529 24.067 34.6771 24.5099 34.6771 25.0406C34.6771 25.5713 34.7529 26.0142 34.9046 26.3733C35.1601 26.9997 35.6311 27.4426 36.2419 27.666C36.8606 27.8895 37.4714 27.9573 38.2338 27.9573C38.621 27.9573 38.9683 27.9374 39.2836 27.8975C39.599 27.8615 39.9104 27.7857 40.2177 27.678C40.8405 27.4586 41.3075 27.0316 41.559 26.3972C41.6428 26.2017 41.7067 25.9703 41.7426 25.7029H39.9902Z"
            fill="black"
          />
          <path
            d="M44.2854 26.477V22.2875H42.6248V27.8017H48.1455V26.477H44.2854Z"
            fill="black"
          />
          <path
            d="M55.5384 26.3972C55.6861 26.0421 55.7579 25.5992 55.7619 25.0645C55.7659 24.5299 55.6901 24.079 55.5384 23.7159C55.2869 23.0815 54.8119 22.6426 54.1931 22.4232C53.5824 22.2037 52.9756 22.1279 52.2132 22.1399C51.4508 22.1279 50.84 22.2037 50.2213 22.4232C49.6105 22.6426 49.1355 23.0815 48.884 23.7159C48.7323 24.075 48.6565 24.5179 48.6565 25.0486C48.6565 25.5793 48.7323 26.0222 48.884 26.3813C49.1395 27.0077 49.6105 27.4506 50.2213 27.67C50.84 27.8895 51.4508 27.9693 52.2132 27.9573C52.6004 27.9613 52.9477 27.9453 53.2631 27.9014C53.5784 27.8615 53.8898 27.7897 54.1971 27.682C54.8199 27.4705 55.2869 27.0396 55.5384 26.3972ZM53.9377 24.3144C54.0095 24.49 54.0455 24.7414 54.0455 25.0685C54.0455 25.3917 54.0095 25.6391 53.9377 25.8067C53.8339 26.074 53.6503 26.2815 53.3828 26.4251C53.1154 26.5688 52.7281 26.6406 52.2132 26.6406C51.2831 26.6406 50.7083 26.3533 50.4887 25.7828C50.4129 25.6152 50.373 25.3718 50.373 25.0486C50.373 24.7254 50.4129 24.482 50.4887 24.3144C50.7083 23.7399 51.2831 23.4526 52.2132 23.4526C52.7242 23.4526 53.1114 23.5284 53.3748 23.68C53.6423 23.8316 53.8299 24.0431 53.9377 24.3144Z"
            fill="black"
          />
          <path
            d="M62.3525 22.2875H56.2769V23.6082H58.4844V27.8017H60.145V23.6082H62.3525V22.2875Z"
            fill="black"
          />
          <path
            d="M67.7973 22.2875V24.3783H64.7316V22.2875H63.071V27.8017H64.7316V25.7029H67.7973V27.8017H69.4499V22.2875H67.7973Z"
            fill="black"
          />
          <path
            d="M72.2442 27.8017V22.2875H70.5836V27.8017H72.2442Z"
            fill="black"
          />
          <path
            d="M78.3078 25.7029L75.31 22.2875H73.3699V27.8017H75.0305V24.6576L77.8168 27.8017H79.9604V22.2875H78.3078V25.7029Z"
            fill="black"
          />
          <path
            d="M88 27.8017L87.984 24.893H84.599V26.2097H85.9083C85.6169 26.497 85.1299 26.6406 84.4433 26.6406C83.5132 26.6406 82.9383 26.3533 82.7188 25.7748C82.643 25.6072 82.603 25.3638 82.603 25.0406C82.603 24.7174 82.643 24.47 82.7188 24.3025C82.9383 23.7319 83.5132 23.4446 84.4433 23.4446C84.9423 23.4446 85.3255 23.5164 85.5889 23.6601C85.8564 23.7997 86.044 24.0032 86.1518 24.2626H87.9241C87.8882 24.0511 87.8363 23.8636 87.7685 23.7079C87.517 23.0735 87.042 22.6346 86.4232 22.4152C85.8125 22.1957 85.2057 22.1199 84.4433 22.1319C83.6808 22.1199 83.0701 22.1957 82.4513 22.4152C81.8406 22.6346 81.3656 23.0735 81.1141 23.7079C80.9624 24.067 80.8866 24.5099 80.8866 25.0406C80.8866 25.5713 80.9624 26.0142 81.1141 26.3733C81.3696 26.9997 81.8366 27.4426 82.4553 27.662C82.7667 27.7698 83.0781 27.8456 83.3934 27.8895C83.7088 27.9334 84.0561 27.9573 84.4433 27.9573C85.3893 27.9573 86.1079 27.8256 86.6508 27.4107V27.8017H88Z"
            fill="black"
          />
        </svg>
      );
    case "cart":
      return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.83333 6.66658V4.99992C3.83333 3.89485 4.27232 2.83504 5.05372 2.05364C5.83512 1.27224 6.89493 0.833252 8 0.833252C9.10507 0.833252 10.1649 1.27224 10.9463 2.05364C11.7277 2.83504 12.1667 3.89485 12.1667 4.99992V6.66658H14.6667C14.8877 6.66658 15.0996 6.75438 15.2559 6.91066C15.4122 7.06694 15.5 7.2789 15.5 7.49992V17.4999C15.5 17.7209 15.4122 17.9329 15.2559 18.0892C15.0996 18.2455 14.8877 18.3333 14.6667 18.3333H1.33333C1.11232 18.3333 0.900358 18.2455 0.744078 18.0892C0.587797 17.9329 0.5 17.7209 0.5 17.4999V7.49992C0.5 7.2789 0.587797 7.06694 0.744078 6.91066C0.900358 6.75438 1.11232 6.66658 1.33333 6.66658H3.83333ZM3.83333 8.33325H2.16667V16.6666H13.8333V8.33325H12.1667H10.5H5.5H3.83333ZM5.5 6.66658H10.5V4.99992C10.5 4.33688 10.2366 3.70099 9.76777 3.23215C9.29893 2.76331 8.66304 2.49992 8 2.49992C7.33696 2.49992 6.70107 2.76331 6.23223 3.23215C5.76339 3.70099 5.5 4.33688 5.5 4.99992V6.66658Z"
            fill="black"
          />
        </svg>
      );
    case "user":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...style}
        >
          <g clipPath="url(#clip0_1008_2150)">
            <path
              d="M3.33325 18.3333C3.33325 16.5651 4.03563 14.8694 5.28587 13.6192C6.53612 12.369 8.23181 11.6666 9.99992 11.6666C11.768 11.6666 13.4637 12.369 14.714 13.6192C15.9642 14.8694 16.6666 16.5651 16.6666 18.3333H14.9999C14.9999 17.0072 14.4731 15.7354 13.5355 14.7977C12.5978 13.86 11.326 13.3333 9.99992 13.3333C8.67384 13.3333 7.40207 13.86 6.46438 14.7977C5.5267 15.7354 4.99992 17.0072 4.99992 18.3333H3.33325ZM9.99992 10.8333C7.23742 10.8333 4.99992 8.59575 4.99992 5.83325C4.99992 3.07075 7.23742 0.833252 9.99992 0.833252C12.7624 0.833252 14.9999 3.07075 14.9999 5.83325C14.9999 8.59575 12.7624 10.8333 9.99992 10.8333ZM9.99992 9.16658C11.8416 9.16658 13.3333 7.67492 13.3333 5.83325C13.3333 3.99159 11.8416 2.49992 9.99992 2.49992C8.15825 2.49992 6.66659 3.99159 6.66659 5.83325C6.66659 7.67492 8.15825 9.16658 9.99992 9.16658Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1008_2150">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "telegram":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z"
            fill="white"
          />
        </svg>
      );
    case "vk":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.68707 1.68707C0 3.37413 0 6.0894 0 11.52V12.48C0 17.9106 0 20.6259 1.68707 22.313C3.37413 24 6.0894 24 11.52 24H12.48C17.9106 24 20.6259 24 22.313 22.313C24 20.6259 24 17.9106 24 12.48V11.52C24 6.0894 24 3.37413 22.313 1.68707C20.6259 0 17.9106 0 12.48 0H11.52C6.0894 0 3.37413 0 1.68707 1.68707ZM4.05006 7.30005C4.18006 13.54 7.30005 17.2901 12.7701 17.2901H13.0801V13.72C15.0901 13.92 16.61 15.3901 17.22 17.2901H20.06C19.28 14.4501 17.2299 12.8801 15.95 12.2801C17.2299 11.5401 19.0299 9.74005 19.4599 7.30005H16.8799C16.3199 9.28005 14.6601 11.08 13.0801 11.25V7.30005H10.5V14.22C8.9 13.8201 6.88005 11.88 6.79005 7.30005H4.05006Z"
            fill="white"
          />
        </svg>
      );
    case "geo":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...style}
        >
          <path
            d="M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z"
            fill="white"
          />
        </svg>
      );
    case "phone":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...style}
        >
          <path
            d="M12 9H14C14 6.24 11.76 4 9 4V6C10.66 6 12 7.34 12 9ZM16 9H18C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948211 11.3869 0 9 0V2C12.87 2 16 5.13 16 9ZM17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.33 11.9 13.22 11.88 13.12 11.88C12.86 11.88 12.61 11.98 12.41 12.17L10.21 14.37C7.37119 12.9262 5.06378 10.6188 3.62 7.78L5.82 5.57C5.95245 5.44434 6.04632 5.28352 6.0906 5.1064C6.13488 4.92928 6.12773 4.7432 6.07 4.57C5.69065 3.41806 5.49821 2.2128 5.5 1C5.5 0.45 5.05 0 4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.5C18 12.95 17.55 12.5 17 12.5ZM2.03 2H3.53C3.6 2.88 3.75 3.75 3.98 4.58L2.78 5.79C2.38 4.58 2.12 3.32 2.03 2ZM16 15.97C14.68 15.88 13.4 15.62 12.2 15.21L13.4 14.01C14.25 14.25 15.12 14.4 16 14.46V15.97Z"
            fill="white"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1020_4138)">
            <path
              d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
              fill="white"
            />
            <path
              d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
              fill="white"
            />
            <path
              d="M19.8469 5.59238C19.8469 6.38926 19.2 7.03145 18.4078 7.03145C17.6109 7.03145 16.9688 6.38457 16.9688 5.59238C16.9688 4.79551 17.6156 4.15332 18.4078 4.15332C19.2 4.15332 19.8469 4.8002 19.8469 5.59238Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1020_4138">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "email":
      return (
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...style}
        >
          <path
            d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
            fill="white"
          />
        </svg>
      );
    case "heart":
      return (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          {...style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1169_3021)">
            <path
              d="M10.4346 3.26085L10.4999 3.31712L10.5652 3.26082C11.6324 2.34032 13.0081 1.85714 14.4166 1.9081C15.825 1.95906 17.1622 2.54039 18.1601 3.5356C19.158 4.53082 19.743 5.86639 19.7978 7.2747C19.8526 8.68176 19.374 10.0576 18.458 11.1269L10.4998 19.1086L2.5305 11.1393C0.658956 8.93144 0.758138 5.62202 2.83647 3.54281C3.83364 2.54566 5.17097 1.96245 6.58019 1.91015C7.98941 1.85786 9.36629 2.34036 10.4346 3.26085ZM11.5782 4.43412L11.5782 4.43414L10.4999 5.36475L9.4216 4.43414L9.42157 4.43412C8.65041 3.76903 7.65641 3.41991 6.63873 3.45671C5.62105 3.49352 4.65486 3.91353 3.93376 4.63259C3.21266 5.35164 2.78991 6.31664 2.75022 7.33421C2.71053 8.35178 3.05683 9.34677 3.71973 10.1198L3.71996 10.1201L3.81971 10.2356L3.8195 10.2358L3.82467 10.2409L10.4292 16.8463L10.4999 16.917L10.5706 16.8463L17.1751 10.2409L17.1753 10.2411L17.1801 10.2356L17.2798 10.1201L17.2043 10.0548L17.2801 10.1198C17.943 9.34677 18.2892 8.35178 18.2496 7.33421C18.2099 6.31664 17.7871 5.35164 17.066 4.63259C16.3449 3.91353 15.3787 3.49352 14.361 3.45671C13.3434 3.41991 12.3494 3.76903 11.5782 4.43412Z"
              fill="black"
              stroke="white"
              strokeWidth="0.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_1169_3021">
              <rect width="21" height="21" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case "favoriteHeart":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          {...style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1169_559)">
            <path
              d="M21.1792 12.794L21.1922 12.808L12.0002 22L2.80821 12.808L2.82121 12.794C1.75378 11.5496 1.19605 9.9477 1.2598 8.30941C1.32355 6.67111 2.00406 5.11742 3.16496 3.95968C4.32587 2.80194 5.88141 2.12567 7.51987 2.06639C9.15834 2.00711 10.7587 2.5692 12.0002 3.64002C13.2417 2.5692 14.8421 2.00711 16.4806 2.06639C18.119 2.12567 19.6746 2.80194 20.8355 3.95968C21.9964 5.11742 22.6769 6.67111 22.7406 8.30941C22.8044 9.9477 22.2466 11.5496 21.1792 12.794Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1169_559">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case "infoProductIcon":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1169_3070)">
            <path
              d="M7.49992 7.60004H7.59992V7.50004V5.62504C7.59992 5.23442 7.48409 4.85258 7.26707 4.52779C7.05006 4.203 6.7416 3.94986 6.38072 3.80038C6.01984 3.6509 5.62273 3.61178 5.23962 3.68799C4.8565 3.7642 4.50459 3.9523 4.22838 4.2285C3.95218 4.50471 3.76407 4.85662 3.68787 5.23974C3.61166 5.62285 3.65077 6.01996 3.80026 6.38084C3.94974 6.74172 4.20288 7.05018 4.52767 7.26719C4.85246 7.48421 5.2343 7.60004 5.62492 7.60004H7.49992ZM7.59992 12.5V12.4H7.49992H5.62492C5.2343 12.4 4.85246 12.5159 4.52767 12.7329C4.20288 12.9499 3.94974 13.2584 3.80026 13.6192C3.65077 13.9801 3.61166 14.3772 3.68787 14.7603C3.76407 15.1435 3.95218 15.4954 4.22838 15.7716C4.50459 16.0478 4.8565 16.2359 5.23962 16.3121C5.62273 16.3883 6.01984 16.3492 6.38072 16.1997C6.7416 16.0502 7.05006 15.7971 7.26707 15.4723C7.48409 15.1475 7.59992 14.7657 7.59992 14.375V12.5ZM12.3999 7.50004V7.60004H12.4999H14.3749C14.7655 7.60004 15.1474 7.48421 15.4722 7.26719C15.797 7.05018 16.0501 6.74172 16.1996 6.38084C16.3491 6.01996 16.3882 5.62285 16.312 5.23974C16.2358 4.85662 16.0477 4.50471 15.7715 4.2285C15.4952 3.9523 15.1433 3.7642 14.7602 3.68799C14.3771 3.61178 13.98 3.6509 13.6191 3.80038C13.2582 3.94986 12.9498 4.203 12.7328 4.52779C12.5158 4.85258 12.3999 5.23442 12.3999 5.62504V7.50004ZM12.4999 12.4H12.3999V12.5V14.375C12.3999 14.7657 12.5158 15.1475 12.7328 15.4723C12.9498 15.7971 13.2582 16.0502 13.6191 16.1997C13.98 16.3492 14.3771 16.3883 14.7602 16.3121C15.1433 16.2359 15.4952 16.0478 15.7715 15.7716C16.0477 15.4954 16.2358 15.1435 16.312 14.7603C16.3882 14.3772 16.3491 13.9801 16.1996 13.6192C16.0501 13.2584 15.797 12.9499 15.4722 12.7329C15.1474 12.5159 14.7655 12.4 14.3749 12.4H12.4999ZM5.62492 2.18337C6.07689 2.18337 6.52443 2.2724 6.94199 2.44536C7.35955 2.61832 7.73896 2.87183 8.05855 3.19141C8.37813 3.511 8.63165 3.89041 8.80461 4.30797C8.97757 4.72553 9.06659 5.17307 9.06659 5.62504V9.06671H5.62492C4.71213 9.06671 3.83673 8.7041 3.19129 8.05867C2.54586 7.41323 2.18325 6.53783 2.18325 5.62504C2.18325 4.71225 2.54586 3.83685 3.19129 3.19141C3.83673 2.54598 4.71213 2.18337 5.62492 2.18337ZM5.62492 10.9334H9.06659V14.375C9.06659 15.0557 8.86474 15.7211 8.48656 16.2871C8.10839 16.8531 7.57087 17.2942 6.94199 17.5547C6.31311 17.8152 5.6211 17.8834 4.95348 17.7506C4.28587 17.6178 3.67262 17.29 3.19129 16.8087C2.70997 16.3273 2.38218 15.7141 2.24938 15.0465C2.11659 14.3789 2.18474 13.6869 2.44523 13.058C2.70573 12.4291 3.14685 11.8916 3.71283 11.5134C4.27881 11.1352 4.94422 10.9334 5.62492 10.9334ZM14.3749 2.18337C15.2877 2.18337 16.1631 2.54598 16.8085 3.19141C17.454 3.83685 17.8166 4.71225 17.8166 5.62504C17.8166 6.53783 17.454 7.41323 16.8085 8.05867C16.1631 8.7041 15.2877 9.06671 14.3749 9.06671H10.9333V5.62504C10.9333 4.71225 11.2959 3.83685 11.9413 3.19141C12.5867 2.54598 13.4621 2.18337 14.3749 2.18337ZM10.9333 10.9334H14.3749C15.0556 10.9334 15.721 11.1352 16.287 11.5134C16.853 11.8916 17.2941 12.4291 17.5546 13.058C17.8151 13.6869 17.8833 14.3789 17.7505 15.0465C17.6177 15.7141 17.2899 16.3273 16.8085 16.8087C16.3272 17.29 15.714 17.6178 15.0464 17.7506C14.3787 17.8834 13.6867 17.8152 13.0579 17.5547C12.429 17.2942 11.8915 16.8531 11.5133 16.2871C11.1351 15.7211 10.9333 15.0557 10.9333 14.375V10.9334Z"
              fill="black"
              stroke="white"
              strokeWidth="0.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_1169_3070">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case "bonusProductIcon":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1169_3078)">
            <path
              d="M14.5833 17.4C13.8363 17.4 13.1199 17.1032 12.5917 16.575C12.0634 16.0468 11.7667 15.3304 11.7667 14.5833C11.7667 13.8363 12.0634 13.1199 12.5916 12.5917C13.1199 12.0634 13.8363 11.7667 14.5833 11.7667C15.3304 11.7667 16.0468 12.0634 16.575 12.5916C17.1032 13.1199 17.4 13.8363 17.4 14.5833C17.4 15.3304 17.1032 16.0468 16.575 16.575C16.0468 17.1032 15.3304 17.4 14.5833 17.4ZM14.5833 15.9333C14.9414 15.9333 15.2848 15.7911 15.5379 15.5379C15.7911 15.2848 15.9333 14.9414 15.9333 14.5833C15.9333 14.2253 15.7911 13.8819 15.5379 13.6287C15.2848 13.3756 14.9414 13.2333 14.5833 13.2333C14.2253 13.2333 13.8819 13.3756 13.6287 13.6287C13.3756 13.8819 13.2333 14.2253 13.2333 14.5833C13.2333 14.9414 13.3756 15.2848 13.6287 15.5379C13.8819 15.7911 14.2253 15.9333 14.5833 15.9333ZM5.41667 8.23333C5.04678 8.23333 4.68051 8.16048 4.33877 8.01893C3.99704 7.87738 3.68653 7.6699 3.42498 7.40835C3.16343 7.1468 2.95596 6.83629 2.81441 6.49456C2.67286 6.15282 2.6 5.78656 2.6 5.41667C2.6 5.04678 2.67286 4.68051 2.81441 4.33877C2.95596 3.99704 3.16343 3.68653 3.42498 3.42498C3.68653 3.16343 3.99704 2.95596 4.33877 2.81441C4.68051 2.67286 5.04678 2.6 5.41667 2.6C6.16369 2.6 6.88012 2.89676 7.40835 3.42498C7.93658 3.95321 8.23333 4.66964 8.23333 5.41667C8.23333 6.16369 7.93658 6.88012 7.40835 7.40835C6.88012 7.93658 6.16369 8.23333 5.41667 8.23333ZM5.41667 6.76667C5.77471 6.76667 6.11809 6.62443 6.37126 6.37126C6.62443 6.11809 6.76667 5.77471 6.76667 5.41667C6.76667 5.05862 6.62443 4.71525 6.37126 4.46207C6.11809 4.2089 5.77471 4.06667 5.41667 4.06667C5.05862 4.06667 4.71525 4.2089 4.46207 4.46207C4.2089 4.71525 4.06667 5.05862 4.06667 5.41667C4.06667 5.77471 4.2089 6.11809 4.46207 6.37126C4.71525 6.62443 5.05862 6.76667 5.41667 6.76667ZM3.07142 15.8925L15.8921 3.07018L16.9294 4.1075L4.10833 16.9294L3.07142 15.8925Z"
              fill="black"
              stroke="white"
              strokeWidth="0.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_1169_3078">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "cancel":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          rotate={45}
        >
          <g clipPath="url(#clip0_1169_3118)">
            <path
              d="M11.9293 10.6567L12 10.7274L12.0707 10.6567L16.95 5.77741L18.2226 7.04999L13.3433 11.9293L13.2726 12L13.3433 12.0707L18.2226 16.95L16.95 18.2226L12.0707 13.3433L12 13.2726L11.9293 13.3433L7.04999 18.2226L5.77741 16.95L10.6567 12.0707L10.7274 12L10.6567 11.9293L5.77741 7.04999L7.04999 5.77741L11.9293 10.6567Z"
              fill="black"
              stroke="white"
              strokeWidth="0.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_1169_3118">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "gid":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_139_2643)">
            <path
              d="M12.707 17.793C13.534 18.62 14.295 19 15 19C15.378 19 15.68 18.933 16.237 18.724L16.629 18.572C17.679 18.15 18.209 18 19 18C20.214 18 21.379 18.545 22.486 19.58L22.707 19.793L21.293 21.207C20.466 20.38 19.705 20 19 20C18.622 20 18.32 20.067 17.763 20.276L17.371 20.428C16.321 20.849 15.791 21 15 21C13.786 21 12.621 20.455 11.514 19.42L11.293 19.207L12.707 17.793V17.793ZM9 3C9 3.79565 9.31607 4.55871 9.87868 5.12132C10.4413 5.68393 11.2044 6 12 6C12.7956 6 13.5587 5.68393 14.1213 5.12132C14.6839 4.55871 15 3.79565 15 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V11C22 11.2652 21.8946 11.5196 21.7071 11.7071C21.5196 11.8946 21.2652 12 21 12H16.998V10L20 9.999V4.999H16.583L16.566 5.04C16.1868 5.88785 15.579 6.61337 14.8107 7.13528C14.0424 7.65719 13.1439 7.95488 12.216 7.995L12 8C11.0344 8.00009 10.0894 7.72063 9.27918 7.19537C8.46894 6.67012 7.82808 5.92153 7.434 5.04L7.416 5H4V10L6.999 9.999V19H10V21H6C5.73478 21 5.48043 20.8946 5.29289 20.7071C5.10536 20.5196 5 20.2652 5 20L4.999 11.999L3 12C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H9ZM12.707 13.793C13.534 14.62 14.295 15 15 15C15.378 15 15.68 14.933 16.237 14.724L16.629 14.572C17.679 14.15 18.209 14 19 14C20.214 14 21.379 14.545 22.486 15.58L22.707 15.793L21.293 17.207C20.466 16.38 19.705 16 19 16C18.622 16 18.32 16.067 17.763 16.276L17.371 16.428C16.321 16.849 15.791 17 15 17C13.786 17 12.621 16.455 11.514 15.42L11.293 15.207L12.707 13.793V13.793Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_139_2643">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "map":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_140_2655)">
            <path
              d="M9.975 8.97513C10.4645 8.48563 10.7978 7.86199 10.9328 7.18306C11.0678 6.50414 10.9985 5.80043 10.7335 5.16091C10.4686 4.52139 10.02 3.97478 9.44446 3.59021C8.8689 3.20564 8.19222 3.00038 7.5 3.00038C6.80778 3.00038 6.13111 3.20564 5.55554 3.59021C4.97998 3.97478 4.53138 4.52139 4.26646 5.16091C4.00154 5.80043 3.93221 6.50414 4.06723 7.18306C4.20225 7.86199 4.53555 8.48563 5.025 8.97513L7.5 11.4501L9.975 8.97513ZM7.5 14.2781L3.61 10.3901C2.84107 9.62084 2.3175 8.64083 2.10549 7.574C1.89349 6.50718 2.00255 5.40144 2.41891 4.3966C2.83527 3.39175 3.54022 2.53292 4.44463 1.92869C5.34905 1.32446 6.41232 1.00195 7.5 1.00195C8.58769 1.00195 9.65096 1.32446 10.5554 1.92869C11.4598 2.53292 12.1647 3.39175 12.5811 4.3966C12.9975 5.40144 13.1065 6.50718 12.8945 7.574C12.6825 8.64083 12.1589 9.62084 11.39 10.3901L7.5 14.2801V14.2781ZM7.5 8.00013C7.10218 8.00013 6.72065 7.84209 6.43934 7.56079C6.15804 7.27948 6 6.89795 6 6.50013C6 6.1023 6.15804 5.72077 6.43934 5.43947C6.72065 5.15816 7.10218 5.00013 7.5 5.00013C7.89783 5.00013 8.27936 5.15816 8.56066 5.43947C8.84197 5.72077 9 6.1023 9 6.50013C9 6.89795 8.84197 7.27948 8.56066 7.56079C8.27936 7.84209 7.89783 8.00013 7.5 8.00013ZM16.5 20.4501L18.975 17.9751C19.4645 17.4856 19.7978 16.862 19.9328 16.1831C20.0678 15.5041 19.9985 14.8004 19.7335 14.1609C19.4686 13.5214 19.02 12.9748 18.4445 12.5902C17.8689 12.2056 17.1922 12.0004 16.5 12.0004C15.8078 12.0004 15.1311 12.2056 14.5555 12.5902C13.98 12.9748 13.5314 13.5214 13.2665 14.1609C13.0015 14.8004 12.9322 15.5041 13.0672 16.1831C13.2022 16.862 13.5356 17.4856 14.025 17.9751L16.5 20.4501ZM20.39 19.3901L16.5 23.2781L12.61 19.3891C11.8411 18.6198 11.3175 17.6398 11.1055 16.573C10.8935 15.5062 11.0026 14.4004 11.4189 13.3956C11.8353 12.3908 12.5402 11.5319 13.4446 10.9277C14.349 10.3235 15.4123 10.001 16.5 10.001C17.5877 10.001 18.651 10.3235 19.5554 10.9277C20.4598 11.5319 21.1647 12.3908 21.5811 13.3956C21.9974 14.4004 22.1065 15.5062 21.8945 16.573C21.6825 17.6398 21.1589 18.6198 20.39 19.3891V19.3901ZM16.5 17.0001C16.1022 17.0001 15.7206 16.8421 15.4393 16.5608C15.158 16.2795 15 15.898 15 15.5001C15 15.1023 15.158 14.7208 15.4393 14.4395C15.7206 14.1582 16.1022 14.0001 16.5 14.0001C16.8978 14.0001 17.2794 14.1582 17.5607 14.4395C17.842 14.7208 18 15.1023 18 15.5001C18 15.898 17.842 16.2795 17.5607 16.5608C17.2794 16.8421 16.8978 17.0001 16.5 17.0001Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_140_2655">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case "chat":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_140_2659)">
            <path
              d="M10 3H14C16.1217 3 18.1566 3.84285 19.6569 5.34315C21.1571 6.84344 22 8.87827 22 11C22 13.1217 21.1571 15.1566 19.6569 16.6569C18.1566 18.1571 16.1217 19 14 19V22.5C9 20.5 2 17.5 2 11C2 8.87827 2.84285 6.84344 4.34315 5.34315C5.84344 3.84285 7.87827 3 10 3ZM12 17H14C14.7879 17 15.5681 16.8448 16.2961 16.5433C17.0241 16.2417 17.6855 15.7998 18.2426 15.2426C18.7998 14.6855 19.2417 14.0241 19.5433 13.2961C19.8448 12.5681 20 11.7879 20 11C20 10.2121 19.8448 9.43185 19.5433 8.7039C19.2417 7.97595 18.7998 7.31451 18.2426 6.75736C17.6855 6.20021 17.0241 5.75825 16.2961 5.45672C15.5681 5.15519 14.7879 5 14 5H10C8.4087 5 6.88258 5.63214 5.75736 6.75736C4.63214 7.88258 4 9.4087 4 11C4 14.61 6.462 16.966 12 19.48V17Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_140_2659">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    default:
      return <div>undefined</div>;
  }
};

export default SvgSelector;
