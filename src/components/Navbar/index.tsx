import React, { useContext, useState } from "react";

import { Container, Content, MenuIcon, Menu, NavLinks } from "./styles";
import { NavbarProps } from "./types";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Media } from "../MediaScreen";
import Link from "next/link";

export function Navbar({ toggleTheme, theme }: NavbarProps) {
  const { colors } = useContext(ThemeContext);
  const [active, setActive] = useState(false);
  function Toggle() {
    setActive(!active);
  }

  return (
    <Container data-aos="fade-down" data-aos-duration="800">
      <Content>
        <a href="/" title="Logo">
          <svg
            width="48"
            height="16"
            viewBox="0 0 48 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.78 8.184H12.536V0.816H11.78V-7.15256e-07H14.3V0.816H13.52V8.184H16.04V6.78H16.856V9H11.78V8.184ZM19.5238 9.024C18.8998 9.024 18.5878 8.716 18.5878 8.1V3.804H17.8198V2.988H19.5598V8.184L21.9478 6.684V3.804H21.3598V2.988H22.9198V8.184H23.6758V9H21.9478V7.656L19.9558 8.904C19.8278 8.984 19.6838 9.024 19.5238 9.024ZM26.5002 8.184H27.2802V9H24.7602V8.184H25.5162V3.816H24.7602V3H26.5002V8.184ZM26.0082 0.792C26.1762 0.792 26.3162 0.856 26.4282 0.983999C26.5482 1.104 26.6082 1.252 26.6082 1.428C26.6082 1.596 26.5482 1.74 26.4282 1.86C26.3162 1.972 26.1722 2.028 25.9962 2.028C25.8282 2.028 25.6842 1.972 25.5642 1.86C25.4522 1.74 25.3962 1.596 25.3962 1.428C25.3962 1.252 25.4562 1.104 25.5762 0.983999C25.6962 0.856 25.8402 0.792 26.0082 0.792ZM28.2378 9V8.172L31.5618 3.816H29.1258V4.668H28.2978V3H32.6058V3.852L29.3058 8.184H31.8618V7.356H32.7018V9H28.2378Z"
              fill="#0E0D0E"
            />
            <path
              d="M2.478 5.5C2.774 5.5 2.978 5.566 3.09 5.698C3.206 5.826 3.264 6.022 3.264 6.286V9.214C3.264 9.49 3.2 9.69 3.072 9.814C2.944 9.938 2.746 10 2.478 10H0.36V9.592H0.738V5.908H0.36V5.5H2.478ZM2.772 5.908H1.23V9.592H2.772V5.908ZM6.13509 7.042V8.302H5.72709V7.876H4.88109V9.592H6.41709V8.89H6.82509V10H4.01109V9.592H4.38909V5.908H4.01109V5.5H6.82509V6.61H6.41709V5.908H4.88109V7.468H5.72709V7.042H6.13509ZM7.275 5.5H8.373V5.908H8.061L9.051 9.592L10.035 5.908H9.657V5.5H10.815V5.908H10.491L9.393 10H8.703L7.611 5.908H7.275V5.5Z"
              fill="#F89D24"
            />
            <path
              d="M11.98 14.742C11.6907 14.5273 11.4993 14.2707 11.406 13.972C11.3127 13.664 11.2427 13.328 11.196 12.964C11.2053 12.8613 11.2193 12.698 11.238 12.474C11.266 12.25 11.294 11.998 11.322 11.718C11.3593 11.4287 11.3873 11.1253 11.406 10.808C11.434 10.4907 11.462 10.192 11.49 9.912C11.518 9.62267 11.5367 9.366 11.546 9.142C11.5647 8.90867 11.5787 8.74067 11.588 8.638C11.5973 8.57267 11.602 8.46533 11.602 8.316V7.378C11.602 7.22867 11.5973 7.12133 11.588 7.056L11.798 6.86L15.34 5.684H15.732C15.7693 5.78667 15.774 5.89867 15.746 6.02C15.718 6.14133 15.6433 6.22067 15.522 6.258L12.582 7.462L12.386 7.644C12.3767 7.65333 12.3627 7.73733 12.344 7.896C12.3347 8.04533 12.316 8.22733 12.288 8.442C12.2693 8.64733 12.246 8.85733 12.218 9.072C12.1993 9.28667 12.19 9.46867 12.19 9.618C12.19 9.646 12.1853 9.71133 12.176 9.814C12.176 9.90733 12.176 10.0053 12.176 10.108C12.176 10.2107 12.176 10.3087 12.176 10.402C12.1853 10.4953 12.19 10.5607 12.19 10.598L15.522 8.834C15.578 8.79667 15.62 8.80133 15.648 8.848C15.676 8.89467 15.69 8.95533 15.69 9.03C15.69 9.10467 15.676 9.184 15.648 9.268C15.62 9.34267 15.578 9.394 15.522 9.422C15.4007 9.506 15.2467 9.604 15.06 9.716C14.8733 9.81867 14.6773 9.93067 14.472 10.052C14.276 10.164 14.0753 10.276 13.87 10.388C13.674 10.5 13.492 10.6027 13.324 10.696C13.1653 10.78 13.0347 10.8547 12.932 10.92C12.8387 10.976 12.7873 11.004 12.778 11.004H11.98V13.552C11.98 13.8973 12.0593 14.1167 12.218 14.21C12.3767 14.3127 12.5727 14.336 12.806 14.28C13.0487 14.224 13.3053 14.112 13.576 13.944C13.856 13.776 14.1173 13.5987 14.36 13.412C14.612 13.2253 14.8267 13.0527 15.004 12.894C15.1813 12.726 15.2933 12.6187 15.34 12.572C15.3587 12.3853 15.4007 12.2313 15.466 12.11C15.5033 11.998 15.5593 11.9233 15.634 11.886C15.7087 11.8393 15.8067 11.872 15.928 11.984C15.9653 12.2173 15.9233 12.474 15.802 12.754C15.69 13.0247 15.522 13.2907 15.298 13.552C15.0833 13.804 14.8267 14.0373 14.528 14.252C14.2387 14.4667 13.94 14.6347 13.632 14.756C13.324 14.8867 13.0253 14.9567 12.736 14.966C12.4467 14.9753 12.1947 14.9007 11.98 14.742ZM16.7924 14.336C16.7084 14.1587 16.6524 13.9207 16.6244 13.622C16.6057 13.3233 16.6104 12.9873 16.6384 12.614C16.6757 12.2313 16.7364 11.8347 16.8204 11.424C16.9137 11.004 17.0257 10.612 17.1564 10.248C17.2871 9.87467 17.4364 9.534 17.6044 9.226C17.7724 8.918 17.9591 8.68 18.1644 8.512C18.3791 8.344 18.5984 8.26467 18.8224 8.274C19.0557 8.274 19.2984 8.39533 19.5504 8.638L19.9424 5.474C19.9517 5.446 19.9797 5.40867 20.0264 5.362C20.0824 5.306 20.1197 5.278 20.1384 5.278C20.1757 5.278 20.2131 5.28733 20.2504 5.306C20.2971 5.32467 20.3391 5.34333 20.3764 5.362C20.4231 5.37133 20.4604 5.39 20.4884 5.418C20.5164 5.446 20.5304 5.46467 20.5304 5.474V11.004C20.5304 11.4147 20.6051 11.774 20.7544 12.082C20.9037 12.3807 21.0904 12.6 21.3144 12.74C21.5477 12.88 21.8184 12.9267 22.1264 12.88C22.4344 12.8333 22.7564 12.67 23.0924 12.39C23.2044 12.39 23.2557 12.4367 23.2464 12.53C23.2371 12.6233 23.1904 12.7353 23.1064 12.866C23.0317 12.9873 22.9197 13.118 22.7704 13.258C22.6211 13.3887 22.4577 13.5007 22.2804 13.594C22.1031 13.678 21.9117 13.7247 21.7064 13.734C21.5104 13.734 21.3191 13.6733 21.1324 13.552C20.9737 13.4493 20.8337 13.3327 20.7124 13.202C20.5911 13.062 20.4837 12.9127 20.3904 12.754C20.2971 12.5953 20.2084 12.4367 20.1244 12.278C20.0497 12.11 19.9891 11.9467 19.9424 11.788C19.9051 11.8533 19.8491 11.9513 19.7744 12.082C19.7091 12.2127 19.6297 12.3667 19.5364 12.544C19.4431 12.712 19.3497 12.8893 19.2564 13.076C19.1631 13.2533 19.0697 13.426 18.9764 13.594C18.8831 13.762 18.7991 13.9113 18.7244 14.042C18.6497 14.182 18.5937 14.28 18.5564 14.336C18.4444 14.5413 18.3091 14.6907 18.1504 14.784C18.0011 14.8867 17.8377 14.938 17.6604 14.938C17.4924 14.938 17.3291 14.8867 17.1704 14.784C17.0211 14.6907 16.8951 14.5413 16.7924 14.336ZM17.3804 13.944C17.3897 13.9627 17.4084 13.986 17.4364 14.014C17.4644 14.0513 17.4971 14.084 17.5344 14.112C17.5811 14.1493 17.6231 14.1727 17.6604 14.182C17.7071 14.1913 17.7491 14.1773 17.7864 14.14C18.1597 13.86 18.4584 13.5287 18.6824 13.146C18.9157 12.754 19.1024 12.3433 19.2424 11.914C19.3917 11.4847 19.5084 11.046 19.5924 10.598C19.6764 10.1407 19.7557 9.71133 19.8304 9.31C19.4197 9.254 19.0697 9.28667 18.7804 9.408C18.4911 9.52 18.2437 9.69267 18.0384 9.926C17.8424 10.1593 17.6884 10.4393 17.5764 10.766C17.4644 11.0927 17.3851 11.438 17.3384 11.802C17.2917 12.1567 17.2731 12.5207 17.2824 12.894C17.3011 13.2673 17.3337 13.6173 17.3804 13.944ZM22.9903 14.336C22.981 14.3173 22.9623 14.266 22.9343 14.182C22.9157 14.1073 22.897 14.028 22.8783 13.944C22.8597 13.86 22.841 13.7807 22.8223 13.706C22.8037 13.6313 22.7943 13.58 22.7943 13.552V9.212C22.7943 9.14667 22.8223 9.1 22.8783 9.072C22.9343 9.03467 22.995 9.016 23.0603 9.016C23.1257 9.00667 23.191 9.00667 23.2563 9.016C23.3217 9.016 23.3637 9.02067 23.3823 9.03C23.373 9.13267 23.3683 9.28667 23.3683 9.492C23.3683 9.688 23.3637 9.91667 23.3543 10.178C23.3543 10.4393 23.3543 10.7147 23.3543 11.004C23.3637 11.284 23.3683 11.5547 23.3683 11.816V12.516C23.3683 12.7213 23.373 12.8707 23.3823 12.964C23.401 13.3933 23.4617 13.692 23.5643 13.86C23.667 14.0187 23.7883 14.0933 23.9283 14.084C24.0777 14.0747 24.2317 13.9953 24.3903 13.846C24.5583 13.6873 24.7123 13.5007 24.8523 13.286C24.9923 13.062 25.109 12.838 25.2023 12.614C25.305 12.3807 25.3563 12.1707 25.3563 11.984V9.03H26.1403C26.131 9.20733 26.1123 9.436 26.0843 9.716C26.0657 9.996 26.0517 10.2993 26.0423 10.626C26.0423 10.9527 26.047 11.284 26.0563 11.62C26.075 11.956 26.1123 12.2733 26.1683 12.572C26.2243 12.8707 26.3037 13.132 26.4063 13.356C26.5183 13.5707 26.6583 13.7247 26.8263 13.818C27.0037 13.9113 27.209 13.93 27.4423 13.874C27.685 13.8087 27.9743 13.636 28.3103 13.356C28.3757 13.552 28.3477 13.7433 28.2263 13.93C28.105 14.1073 27.9463 14.2613 27.7503 14.392C27.5543 14.532 27.3397 14.6347 27.1063 14.7C26.8823 14.7653 26.691 14.7793 26.5323 14.742C26.5137 14.7327 26.481 14.7 26.4343 14.644C26.3877 14.5973 26.355 14.56 26.3363 14.532C26.3083 14.476 26.257 14.3733 26.1823 14.224C26.1077 14.084 26.0283 13.93 25.9443 13.762C25.8603 13.594 25.781 13.4353 25.7063 13.286C25.641 13.1367 25.5897 13.0293 25.5523 12.964C25.515 13.048 25.4403 13.1787 25.3283 13.356C25.2257 13.524 25.0997 13.706 24.9503 13.902C24.801 14.098 24.6423 14.28 24.4743 14.448C24.3063 14.616 24.1337 14.7327 23.9563 14.798C23.7883 14.8727 23.6203 14.882 23.4523 14.826C23.2843 14.77 23.1303 14.6067 22.9903 14.336ZM27.992 14.742C27.8426 14.4247 27.7586 14.1027 27.74 13.776C27.7306 13.4493 27.7493 13.118 27.796 12.782C27.8053 12.67 27.824 12.5113 27.852 12.306C27.88 12.0913 27.9126 11.858 27.95 11.606C27.9873 11.3447 28.0293 11.0693 28.076 10.78C28.1226 10.4907 28.1646 10.22 28.202 9.968C28.2393 9.70667 28.272 9.478 28.3 9.282C28.3373 9.086 28.3653 8.93667 28.384 8.834C28.44 8.51667 28.5053 8.246 28.58 8.022C28.6546 7.798 28.7526 7.62533 28.874 7.504C29.0046 7.38267 29.168 7.31733 29.364 7.308C29.5693 7.29867 29.8306 7.35 30.148 7.462C30.1853 7.47133 30.2273 7.504 30.274 7.56C30.3206 7.60667 30.344 7.63467 30.344 7.644C30.3626 7.74667 30.3906 7.90067 30.428 8.106C30.4746 8.31133 30.5213 8.54467 30.568 8.806C30.624 9.06733 30.68 9.338 30.736 9.618C30.8013 9.898 30.8573 10.1687 30.904 10.43C30.9506 10.6913 30.9926 10.9247 31.03 11.13C31.0766 11.3353 31.114 11.4893 31.142 11.592C31.254 12.124 31.394 12.4973 31.562 12.712C31.73 12.9173 31.9073 13.0247 32.094 13.034C32.2806 13.0433 32.4766 12.9827 32.682 12.852C32.8873 12.712 33.0833 12.5673 33.27 12.418C33.466 12.2687 33.6526 12.1427 33.83 12.04C34.0073 11.9373 34.1566 11.9187 34.278 11.984C34.278 12.124 34.2453 12.264 34.18 12.404C34.1146 12.5347 34.0306 12.6607 33.928 12.782C33.8346 12.894 33.732 13.0013 33.62 13.104C33.508 13.2067 33.4053 13.2907 33.312 13.356C32.8826 13.636 32.528 13.7853 32.248 13.804C31.968 13.8133 31.7253 13.748 31.52 13.608C31.324 13.468 31.1653 13.272 31.044 13.02C30.9226 12.768 30.8153 12.516 30.722 12.264C30.638 12.0027 30.5493 11.774 30.456 11.578C30.372 11.3727 30.2693 11.242 30.148 11.186C30.12 11.2887 30.0686 11.4613 29.994 11.704C29.9286 11.9373 29.854 12.194 29.77 12.474C29.686 12.7447 29.6066 13.0013 29.532 13.244C29.4573 13.4867 29.4013 13.6547 29.364 13.748C29.3546 13.7853 29.3266 13.86 29.28 13.972C29.2333 14.0747 29.168 14.1867 29.084 14.308C29.0093 14.4387 28.9253 14.56 28.832 14.672C28.7386 14.7933 28.6406 14.8867 28.538 14.952C28.4446 15.0173 28.3466 15.036 28.244 15.008C28.1506 14.9893 28.0666 14.9007 27.992 14.742ZM28.58 11.396C28.5706 11.4893 28.5613 11.6573 28.552 11.9C28.552 12.1427 28.552 12.3993 28.552 12.67C28.552 12.9313 28.552 13.188 28.552 13.44C28.5613 13.6827 28.5706 13.8507 28.58 13.944C28.8413 13.5427 29.0746 13.076 29.28 12.544C29.4946 12.012 29.658 11.4613 29.77 10.892C29.882 10.3133 29.924 9.744 29.896 9.184C29.8773 8.624 29.77 8.11067 29.574 7.644C29.434 7.88667 29.308 8.18533 29.196 8.54C29.084 8.89467 28.986 9.254 28.902 9.618C28.8273 9.982 28.7573 10.3273 28.692 10.654C28.636 10.9807 28.5986 11.228 28.58 11.396ZM34.3641 9.898V14.812C34.2521 15.064 34.1541 15.19 34.0701 15.19C33.9861 15.1993 33.9115 15.1153 33.8461 14.938C33.7901 14.77 33.7435 14.5273 33.7061 14.21C33.6781 13.902 33.6595 13.5613 33.6501 13.188C33.6408 12.8053 33.6361 12.4087 33.6361 11.998C33.6455 11.578 33.6595 11.1767 33.6781 10.794C33.6968 10.4113 33.7201 10.0613 33.7481 9.744C33.7855 9.41733 33.8181 9.16067 33.8461 8.974C33.8835 8.78733 33.9208 8.68467 33.9581 8.666C33.9955 8.64733 34.0328 8.75467 34.0701 8.988C34.3128 8.80133 34.5741 8.62867 34.8541 8.47C35.1341 8.302 35.4235 8.162 35.7221 8.05C36.0208 7.938 36.3241 7.868 36.6321 7.84C36.9401 7.812 37.2341 7.84 37.5141 7.924C37.5515 8.02667 37.5561 8.14333 37.5281 8.274C37.5001 8.39533 37.4301 8.47467 37.3181 8.512C37.1968 8.49333 37.0381 8.484 36.8421 8.484C36.6461 8.484 36.4361 8.498 36.2121 8.526C35.9975 8.554 35.7781 8.60067 35.5541 8.666C35.3301 8.73133 35.1295 8.82 34.9521 8.932C34.7841 9.044 34.6441 9.17933 34.5321 9.338C34.4201 9.48733 34.3641 9.674 34.3641 9.898ZM38.4213 14.336C38.3373 14.1587 38.2813 13.9207 38.2533 13.622C38.2346 13.3233 38.2393 12.9873 38.2673 12.614C38.3046 12.2313 38.3653 11.8347 38.4493 11.424C38.5426 11.004 38.6546 10.612 38.7853 10.248C38.916 9.87467 39.0653 9.534 39.2333 9.226C39.4013 8.918 39.588 8.68 39.7933 8.512C40.008 8.344 40.2273 8.26467 40.4513 8.274C40.6846 8.274 40.9273 8.39533 41.1793 8.638L41.5713 5.474C41.5806 5.446 41.6086 5.40867 41.6553 5.362C41.7113 5.306 41.7486 5.278 41.7673 5.278C41.8046 5.278 41.842 5.28733 41.8793 5.306C41.926 5.32467 41.968 5.34333 42.0053 5.362C42.052 5.37133 42.0893 5.39 42.1173 5.418C42.1453 5.446 42.1593 5.46467 42.1593 5.474V11.004C42.1593 11.4147 42.234 11.774 42.3833 12.082C42.5326 12.3807 42.7193 12.6 42.9433 12.74C43.1766 12.88 43.4473 12.9267 43.7553 12.88C44.0633 12.8333 44.3853 12.67 44.7213 12.39C44.8333 12.39 44.8846 12.4367 44.8753 12.53C44.866 12.6233 44.8193 12.7353 44.7353 12.866C44.6606 12.9873 44.5486 13.118 44.3993 13.258C44.25 13.3887 44.0866 13.5007 43.9093 13.594C43.732 13.678 43.5406 13.7247 43.3353 13.734C43.1393 13.734 42.948 13.6733 42.7613 13.552C42.6026 13.4493 42.4626 13.3327 42.3413 13.202C42.22 13.062 42.1126 12.9127 42.0193 12.754C41.926 12.5953 41.8373 12.4367 41.7533 12.278C41.6786 12.11 41.618 11.9467 41.5713 11.788C41.534 11.8533 41.478 11.9513 41.4033 12.082C41.338 12.2127 41.2586 12.3667 41.1653 12.544C41.072 12.712 40.9786 12.8893 40.8853 13.076C40.792 13.2533 40.6986 13.426 40.6053 13.594C40.512 13.762 40.428 13.9113 40.3533 14.042C40.2786 14.182 40.2226 14.28 40.1853 14.336C40.0733 14.5413 39.938 14.6907 39.7793 14.784C39.63 14.8867 39.4666 14.938 39.2893 14.938C39.1213 14.938 38.958 14.8867 38.7993 14.784C38.65 14.6907 38.524 14.5413 38.4213 14.336ZM39.0093 13.944C39.0186 13.9627 39.0373 13.986 39.0653 14.014C39.0933 14.0513 39.126 14.084 39.1633 14.112C39.21 14.1493 39.252 14.1727 39.2893 14.182C39.336 14.1913 39.378 14.1773 39.4153 14.14C39.7886 13.86 40.0873 13.5287 40.3113 13.146C40.5446 12.754 40.7313 12.3433 40.8713 11.914C41.0206 11.4847 41.1373 11.046 41.2213 10.598C41.3053 10.1407 41.3846 9.71133 41.4593 9.31C41.0486 9.254 40.6986 9.28667 40.4093 9.408C40.12 9.52 39.8726 9.69267 39.6673 9.926C39.4713 10.1593 39.3173 10.4393 39.2053 10.766C39.0933 11.0927 39.014 11.438 38.9673 11.802C38.9206 12.1567 38.902 12.5207 38.9113 12.894C38.93 13.2673 38.9626 13.6173 39.0093 13.944ZM45.1793 14.336C44.9833 14.0653 44.8666 13.7573 44.8293 13.412C44.7919 13.0667 44.7919 12.7073 44.8293 12.334C44.8666 11.9513 44.9273 11.5687 45.0113 11.186C45.0953 10.794 45.1699 10.4207 45.2353 10.066C45.3006 9.702 45.3333 9.366 45.3333 9.058C45.3426 8.74067 45.2913 8.47 45.1793 8.246C45.1233 8.12467 45.0393 8.06867 44.9273 8.078C44.8246 8.078 44.7126 8.092 44.5913 8.12C44.4793 8.13867 44.3673 8.148 44.2553 8.148C44.1433 8.13867 44.0406 8.064 43.9472 7.924C43.9566 7.896 43.9846 7.85867 44.0312 7.812C44.0779 7.76533 44.1106 7.73733 44.1293 7.728C44.8106 7.62533 45.3799 7.69533 45.8373 7.938C46.2946 8.17133 46.6586 8.50733 46.9293 8.946C47.2093 9.37533 47.3959 9.87 47.4893 10.43C47.5919 10.99 47.6293 11.5453 47.6013 12.096C47.5733 12.6467 47.4846 13.16 47.3353 13.636C47.1953 14.1027 47.0133 14.462 46.7893 14.714C46.5746 14.9753 46.3273 15.092 46.0473 15.064C45.7673 15.036 45.4779 14.7933 45.1793 14.336ZM45.7673 13.944C45.7766 13.9627 45.7999 13.9907 45.8373 14.028C45.8746 14.0653 45.9119 14.1073 45.9493 14.154C45.9866 14.2007 46.0239 14.238 46.0613 14.266C46.0986 14.3033 46.1266 14.3267 46.1453 14.336C46.4346 14.1773 46.6446 13.9627 46.7753 13.692C46.9153 13.4213 46.9946 13.1227 47.0133 12.796C47.0413 12.46 47.0273 12.11 46.9713 11.746C46.9153 11.3727 46.8359 11.018 46.7333 10.682C46.6306 10.3367 46.5046 10.024 46.3553 9.744C46.2153 9.45467 46.0846 9.21667 45.9633 9.03C45.9539 9.13267 45.9353 9.28667 45.9073 9.492C45.8886 9.688 45.8653 9.91667 45.8373 10.178C45.8186 10.4393 45.7953 10.7147 45.7673 11.004C45.7393 11.284 45.7113 11.5547 45.6833 11.816C45.6553 12.0773 45.6273 12.3107 45.5993 12.516C45.5806 12.7213 45.5666 12.8707 45.5573 12.964C45.5573 13.0387 45.5619 13.1273 45.5713 13.23C45.5806 13.3233 45.5946 13.4167 45.6133 13.51C45.6413 13.594 45.6693 13.678 45.6973 13.762C45.7253 13.8367 45.7486 13.8973 45.7673 13.944Z"
              fill="#FBFBFB"
            />
          </svg>
        </a>
        <Media at="sm">
          <Switch
            id="theme"
            onChange={toggleTheme}
            checked={theme.title === "light"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={colors.primary}
            onColor="#fff"
            onHandleColor={colors.primary}
          />
        </Media>
        <div>
          <Media greaterThan="sm">
            <NavLinks>
              <Link href="/" passHref>
                <a>Início</a>
              </Link>
              <Link href="/projetos" passHref>
                <a>Projetos</a>
              </Link>
              <a
                href="/CV-Luiz-Eduardo-Front-End.pdf/"
                download="CV-Luiz-Eduardo-Front-End"
              >
                Curriculo
              </a>
              <Switch
                onChange={toggleTheme}
                checked={theme.title === "light"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={colors.primary}
                onColor="#fff"
                onHandleColor={colors.primary}
              />
            </NavLinks>
          </Media>
          <Media at="sm">
            <MenuIcon
              className={active ? "open" : "menuClose"}
              onClick={Toggle}
            />
            <Menu className={active ? "menuOpen" : "menuClose"}>
              <Link href="/" passHref>
                <a className="menu-item" onClick={Toggle}>
                  Início
                </a>
              </Link>
              <Link href="/projetos" passHref>
                <a className="menu-item" onClick={Toggle}>
                  Projetos
                </a>
              </Link>
              <a
                className="menu-item"
                href="/CV-Luiz-Eduardo-Front-End.pdf/"
                download="CV-Luiz-Eduardo-Front-End"
                onClick={Toggle}
              >
                Curriculo
              </a>
            </Menu>
          </Media>
        </div>
      </Content>
    </Container>
  );
}
