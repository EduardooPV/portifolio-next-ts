import React, { useContext, useState } from "react";

import { Container, Content, MenuIcon, Menu, NavLinks } from "./styles";
import { NavbarProps } from "./interface";
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
    <Container data-aos="fade-down" data-aos-duration="1000">
      <Content>
        <a href="/">
          <svg
            width="44"
            height="18"
            viewBox="0 0 44 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.028 3.084V5.604H4.212V4.752H2.52V8.184H5.592V6.78H6.408V9H0.78V8.184H1.536V0.816H0.78V-7.15256e-07H6.408V2.22H5.592V0.816H2.52V3.936H4.212V3.084H5.028ZM12.8518 8.172V9H11.1118V7.62L9.03581 8.928C8.78781 9.056 8.55181 9.12 8.32781 9.12C8.11181 9.12 7.93581 9.04 7.79981 8.88C7.67181 8.72 7.60781 8.536 7.60781 8.328V4.128C7.60781 3.76 7.66381 3.508 7.77581 3.372C7.96781 3.124 8.27181 3 8.68781 3H11.1118V0.816H10.3198V-7.15256e-07H12.0958V8.172H12.8518ZM11.1118 3.816H8.56781V8.244L11.1118 6.66V3.816ZM15.5199 9.024C14.8959 9.024 14.5839 8.716 14.5839 8.1V3.804H13.8159V2.988H15.5559V8.184L17.9439 6.684V3.804H17.3559V2.988H18.9159V8.184H19.6719V9H17.9439V7.656L15.9519 8.904C15.8239 8.984 15.6799 9.024 15.5199 9.024ZM25.5923 8.184V9H21.4163C21.0083 9 20.7323 8.92 20.5883 8.76C20.4603 8.616 20.3963 8.344 20.3963 7.944V7.5C20.3963 7.212 20.4323 7.016 20.5043 6.912C20.6083 6.76 20.8443 6.572 21.2123 6.348L23.8523 4.704V3.816H21.5003V4.512H20.7323V3H23.7323C24.1403 3 24.4243 3.088 24.5843 3.264C24.7523 3.44 24.8363 3.696 24.8363 4.032V8.184H25.5923ZM23.8523 5.664L21.3563 7.224V8.184H23.8523V5.664ZM30.1902 3C30.8142 3 31.1262 3.308 31.1262 3.924V4.992H30.1542V3.828L28.2822 5.016V8.184H28.8702V9H26.5542V8.184H27.3102V3.804H26.5542V2.988H28.2822V4.044L29.7582 3.12C29.8862 3.04 30.0302 3 30.1902 3ZM37.4495 8.172V9H35.7095V7.62L33.6335 8.928C33.3855 9.056 33.1495 9.12 32.9255 9.12C32.7095 9.12 32.5335 9.04 32.3975 8.88C32.2695 8.72 32.2055 8.536 32.2055 8.328V4.128C32.2055 3.76 32.2615 3.508 32.3735 3.372C32.5655 3.124 32.8695 3 33.2855 3H35.7095V0.816H34.9175V-7.15256e-07H36.6935V8.172H37.4495ZM35.7095 3.816H33.1655V8.244L35.7095 6.66V3.816ZM39.5296 9C39.1216 9 38.8336 8.908 38.6656 8.724C38.4976 8.532 38.4136 8.268 38.4136 7.932V4.068C38.4136 3.748 38.4856 3.492 38.6296 3.3C38.7816 3.1 39.0816 3 39.5296 3H41.7496C42.1896 3 42.4856 3.1 42.6376 3.3C42.7896 3.492 42.8656 3.748 42.8656 4.068V7.932C42.8656 8.268 42.7816 8.532 42.6136 8.724C42.4456 8.908 42.1576 9 41.7496 9H39.5296ZM39.3856 8.184H41.8936V3.816H39.3856V8.184Z"
              fill="black"
            />
            <path
              d="M35.478 11.5C35.774 11.5 35.978 11.566 36.09 11.698C36.206 11.826 36.264 12.022 36.264 12.286V15.214C36.264 15.49 36.2 15.69 36.072 15.814C35.944 15.938 35.746 16 35.478 16H33.36V15.592H33.738V11.908H33.36V11.5H35.478ZM35.772 11.908H34.23V15.592H35.772V11.908ZM39.1351 13.042V14.302H38.7271V13.876H37.8811V15.592H39.4171V14.89H39.8251V16H37.0111V15.592H37.3891V11.908H37.0111V11.5H39.8251V12.61H39.4171V11.908H37.8811V13.468H38.7271V13.042H39.1351ZM40.275 11.5H41.373V11.908H41.061L42.051 15.592L43.035 11.908H42.657V11.5H43.815V11.908H43.491L42.393 16H41.703L40.611 11.908H40.275V11.5Z"
              fill="white"
              fillOpacity="0.8"
            />
            <path
              d="M4.152 17.072V13.248C4.088 13.3013 3.98667 13.3867 3.848 13.504C3.72 13.6107 3.57067 13.728 3.4 13.856C3.22933 13.9733 3.05333 14.064 2.872 14.128C2.69067 14.192 2.52 14.2027 2.36 14.16C2.27467 14.128 2.21067 14.0853 2.168 14.032C2.136 13.9787 2.11467 13.92 2.104 13.856C2.09333 13.792 2.088 13.728 2.088 13.664C2.088 13.5893 2.09867 13.5253 2.12 13.472L4.488 12.112V8.288C4.488 8.21333 4.536 8.16 4.632 8.128C4.728 8.08533 4.82933 8.064 4.936 8.064C5.05333 8.064 5.16 8.08533 5.256 8.128C5.352 8.16 5.4 8.21333 5.4 8.288V11.44C5.76267 11.2587 6.11467 11.024 6.456 10.736C6.808 10.448 7.112 10.1547 7.368 9.856C7.624 9.54667 7.80533 9.248 7.912 8.96C8.02933 8.66133 8.02933 8.40533 7.912 8.192C7.80533 7.968 7.56 7.80267 7.176 7.696C6.792 7.58933 6.232 7.56267 5.496 7.616C5.336 7.63733 5.13333 7.68533 4.888 7.76C4.65333 7.83467 4.392 7.93067 4.104 8.048C3.816 8.15467 3.52267 8.272 3.224 8.4C2.936 8.51733 2.65333 8.624 2.376 8.72C2.10933 8.816 1.87467 8.89067 1.672 8.944C1.46933 8.98667 1.32 8.99733 1.224 8.976C1.24533 8.816 1.304 8.68267 1.4 8.576C1.496 8.45867 1.608 8.352 1.736 8.256C1.87467 8.16 2.01333 8.08 2.152 8.016C2.30133 7.94133 2.44533 7.88267 2.584 7.84C3.11733 7.65867 3.57067 7.50933 3.944 7.392C4.328 7.27467 4.70133 7.184 5.064 7.12C5.42667 7.056 5.816 7.02933 6.232 7.04C6.648 7.04 7.15467 7.07733 7.752 7.152C8.232 7.28 8.56267 7.45067 8.744 7.664C8.936 7.86667 9.02133 8.096 9 8.352C8.97867 8.608 8.872 8.88533 8.68 9.184C8.488 9.472 8.25333 9.76 7.976 10.048C7.69867 10.336 7.40533 10.6187 7.096 10.896C6.78667 11.1733 6.49867 11.424 6.232 11.648C5.96533 11.872 5.74133 12.064 5.56 12.224C5.37867 12.384 5.28267 12.5013 5.272 12.576L4.824 16.608L4.744 16.72C4.70133 16.7733 4.648 16.832 4.584 16.896C4.52 16.96 4.44533 17.0133 4.36 17.056C4.28533 17.0987 4.216 17.104 4.152 17.072ZM10.4988 11.312V16.928C10.3708 17.216 10.2588 17.36 10.1628 17.36C10.0668 17.3707 9.98142 17.2747 9.90675 17.072C9.84275 16.88 9.78942 16.6027 9.74675 16.24C9.71475 15.888 9.69342 15.4987 9.68275 15.072C9.67208 14.6347 9.66675 14.1813 9.66675 13.712C9.67742 13.232 9.69342 12.7733 9.71475 12.336C9.73608 11.8987 9.76275 11.4987 9.79475 11.136C9.83742 10.7627 9.87475 10.4693 9.90675 10.256C9.94942 10.0427 9.99208 9.92533 10.0348 9.904C10.0774 9.88267 10.1201 10.0053 10.1628 10.272C10.4401 10.0587 10.7388 9.86133 11.0588 9.68C11.3788 9.488 11.7094 9.328 12.0508 9.2C12.3921 9.072 12.7388 8.992 13.0908 8.96C13.4428 8.928 13.7788 8.96 14.0988 9.056C14.1414 9.17333 14.1468 9.30667 14.1148 9.456C14.0828 9.59467 14.0028 9.68533 13.8748 9.728C13.7361 9.70667 13.5548 9.696 13.3307 9.696C13.1068 9.696 12.8668 9.712 12.6108 9.744C12.3654 9.776 12.1148 9.82933 11.8588 9.904C11.6028 9.97867 11.3734 10.08 11.1708 10.208C10.9788 10.336 10.8188 10.4907 10.6908 10.672C10.5628 10.8427 10.4988 11.056 10.4988 11.312ZM15.2475 16.848C15.0768 16.4853 14.9808 16.1173 14.9595 15.744C14.9488 15.3707 14.9702 14.992 15.0235 14.608C15.0342 14.48 15.0555 14.2987 15.0875 14.064C15.1195 13.8187 15.1568 13.552 15.1995 13.264C15.2422 12.9653 15.2902 12.6507 15.3435 12.32C15.3968 11.9893 15.4448 11.68 15.4875 11.392C15.5302 11.0933 15.5675 10.832 15.5995 10.608C15.6422 10.384 15.6742 10.2133 15.6955 10.096C15.7595 9.73333 15.8342 9.424 15.9195 9.168C16.0048 8.912 16.1168 8.71467 16.2555 8.576C16.4048 8.43733 16.5915 8.36267 16.8155 8.352C17.0502 8.34133 17.3488 8.4 17.7115 8.528C17.7542 8.53867 17.8022 8.576 17.8555 8.64C17.9088 8.69333 17.9355 8.72533 17.9355 8.736C17.9568 8.85333 17.9888 9.02933 18.0315 9.264C18.0848 9.49867 18.1382 9.76533 18.1915 10.064C18.2555 10.3627 18.3195 10.672 18.3835 10.992C18.4582 11.312 18.5222 11.6213 18.5755 11.92C18.6288 12.2187 18.6768 12.4853 18.7195 12.72C18.7728 12.9547 18.8155 13.1307 18.8475 13.248C18.9755 13.856 19.1355 14.2827 19.3275 14.528C19.5195 14.7627 19.7222 14.8853 19.9355 14.896C20.1488 14.9067 20.3728 14.8373 20.6075 14.688C20.8422 14.528 21.0662 14.3627 21.2795 14.192C21.5035 14.0213 21.7168 13.8773 21.9195 13.76C22.1222 13.6427 22.2928 13.6213 22.4315 13.696C22.4315 13.856 22.3942 14.016 22.3195 14.176C22.2448 14.3253 22.1488 14.4693 22.0315 14.608C21.9248 14.736 21.8075 14.8587 21.6795 14.976C21.5515 15.0933 21.4342 15.1893 21.3275 15.264C20.8368 15.584 20.4315 15.7547 20.1115 15.776C19.7915 15.7867 19.5142 15.712 19.2795 15.552C19.0555 15.392 18.8742 15.168 18.7355 14.88C18.5968 14.592 18.4742 14.304 18.3675 14.016C18.2715 13.7173 18.1702 13.456 18.0635 13.232C17.9675 12.9973 17.8502 12.848 17.7115 12.784C17.6795 12.9013 17.6208 13.0987 17.5355 13.376C17.4608 13.6427 17.3755 13.936 17.2795 14.256C17.1835 14.5653 17.0928 14.8587 17.0075 15.136C16.9222 15.4133 16.8582 15.6053 16.8155 15.712C16.8048 15.7547 16.7728 15.84 16.7195 15.968C16.6662 16.0853 16.5915 16.2133 16.4955 16.352C16.4102 16.5013 16.3142 16.64 16.2075 16.768C16.1008 16.9067 15.9888 17.0133 15.8715 17.088C15.7648 17.1627 15.6528 17.184 15.5355 17.152C15.4288 17.1307 15.3328 17.0293 15.2475 16.848ZM15.9195 13.024C15.9088 13.1307 15.8982 13.3227 15.8875 13.6C15.8875 13.8773 15.8875 14.1707 15.8875 14.48C15.8875 14.7787 15.8875 15.072 15.8875 15.36C15.8982 15.6373 15.9088 15.8293 15.9195 15.936C16.2182 15.4773 16.4848 14.944 16.7195 14.336C16.9648 13.728 17.1515 13.0987 17.2795 12.448C17.4075 11.7867 17.4555 11.136 17.4235 10.496C17.4022 9.856 17.2795 9.26933 17.0555 8.736C16.8955 9.01333 16.7515 9.35467 16.6235 9.76C16.4955 10.1653 16.3835 10.576 16.2875 10.992C16.2022 11.408 16.1222 11.8027 16.0475 12.176C15.9835 12.5493 15.9408 12.832 15.9195 13.024ZM21.698 16.384C21.602 16.1813 21.538 15.9093 21.506 15.568C21.4847 15.2267 21.49 14.8427 21.522 14.416C21.5647 13.9787 21.634 13.5253 21.73 13.056C21.8367 12.576 21.9647 12.128 22.114 11.712C22.2633 11.2853 22.434 10.896 22.626 10.544C22.818 10.192 23.0313 9.92 23.266 9.728C23.5113 9.536 23.762 9.44533 24.018 9.456C24.2847 9.456 24.562 9.59467 24.85 9.872L25.298 6.256C25.3087 6.224 25.3407 6.18133 25.394 6.128C25.458 6.064 25.5007 6.032 25.522 6.032C25.5647 6.032 25.6073 6.04267 25.65 6.064C25.7033 6.08533 25.7513 6.10667 25.794 6.128C25.8473 6.13867 25.89 6.16 25.922 6.192C25.954 6.224 25.97 6.24533 25.97 6.256V12.576C25.97 13.0453 26.0553 13.456 26.226 13.808C26.3967 14.1493 26.61 14.4 26.866 14.56C27.1327 14.72 27.442 14.7733 27.794 14.72C28.146 14.6667 28.514 14.48 28.898 14.16C29.026 14.16 29.0847 14.2133 29.074 14.32C29.0633 14.4267 29.01 14.5547 28.914 14.704C28.8287 14.8427 28.7007 14.992 28.53 15.152C28.3593 15.3013 28.1727 15.4293 27.97 15.536C27.7673 15.632 27.5487 15.6853 27.314 15.696C27.09 15.696 26.8713 15.6267 26.658 15.488C26.4767 15.3707 26.3167 15.2373 26.178 15.088C26.0393 14.928 25.9167 14.7573 25.81 14.576C25.7033 14.3947 25.602 14.2133 25.506 14.032C25.4207 13.84 25.3513 13.6533 25.298 13.472C25.2553 13.5467 25.1913 13.6587 25.106 13.808C25.0313 13.9573 24.9407 14.1333 24.834 14.336C24.7273 14.528 24.6207 14.7307 24.514 14.944C24.4073 15.1467 24.3007 15.344 24.194 15.536C24.0873 15.728 23.9913 15.8987 23.906 16.048C23.8207 16.208 23.7567 16.32 23.714 16.384C23.586 16.6187 23.4313 16.7893 23.25 16.896C23.0793 17.0133 22.8927 17.072 22.69 17.072C22.498 17.072 22.3113 17.0133 22.13 16.896C21.9593 16.7893 21.8153 16.6187 21.698 16.384ZM22.37 15.936C22.3807 15.9573 22.402 15.984 22.434 16.016C22.466 16.0587 22.5033 16.096 22.546 16.128C22.5993 16.1707 22.6473 16.1973 22.69 16.208C22.7433 16.2187 22.7913 16.2027 22.834 16.16C23.2607 15.84 23.602 15.4613 23.858 15.024C24.1247 14.576 24.338 14.1067 24.498 13.616C24.6687 13.1253 24.802 12.624 24.898 12.112C24.994 11.5893 25.0847 11.0987 25.17 10.64C24.7007 10.576 24.3007 10.6133 23.97 10.752C23.6393 10.88 23.3567 11.0773 23.122 11.344C22.898 11.6107 22.722 11.9307 22.594 12.304C22.466 12.6773 22.3753 13.072 22.322 13.488C22.2687 13.8933 22.2473 14.3093 22.258 14.736C22.2793 15.1627 22.3167 15.5627 22.37 15.936ZM29.4214 16.384C29.1974 16.0747 29.064 15.7227 29.0214 15.328C28.9787 14.9333 28.9787 14.5227 29.0214 14.096C29.064 13.6587 29.1334 13.2213 29.2294 12.784C29.3254 12.336 29.4107 11.9093 29.4854 11.504C29.56 11.088 29.5974 10.704 29.5974 10.352C29.608 9.98933 29.5494 9.68 29.4214 9.424C29.3574 9.28533 29.2614 9.22133 29.1334 9.232C29.016 9.232 28.888 9.248 28.7494 9.28C28.6214 9.30133 28.4934 9.312 28.3654 9.312C28.2374 9.30133 28.12 9.216 28.0134 9.056C28.024 9.024 28.056 8.98133 28.1094 8.928C28.1627 8.87467 28.2 8.84267 28.2214 8.832C29 8.71467 29.6507 8.79467 30.1734 9.072C30.696 9.33867 31.112 9.72267 31.4214 10.224C31.7414 10.7147 31.9547 11.28 32.0614 11.92C32.1787 12.56 32.2214 13.1947 32.1894 13.824C32.1574 14.4533 32.056 15.04 31.8854 15.584C31.7254 16.1173 31.5174 16.528 31.2614 16.816C31.016 17.1147 30.7334 17.248 30.4134 17.216C30.0934 17.184 29.7627 16.9067 29.4214 16.384ZM30.0934 15.936C30.104 15.9573 30.1307 15.9893 30.1734 16.032C30.216 16.0747 30.2587 16.1227 30.3014 16.176C30.344 16.2293 30.3867 16.272 30.4294 16.304C30.472 16.3467 30.504 16.3733 30.5254 16.384C30.856 16.2027 31.096 15.9573 31.2454 15.648C31.4054 15.3387 31.496 14.9973 31.5174 14.624C31.5494 14.24 31.5334 13.84 31.4694 13.424C31.4054 12.9973 31.3147 12.592 31.1974 12.208C31.08 11.8133 30.936 11.456 30.7654 11.136C30.6054 10.8053 30.456 10.5333 30.3174 10.32C30.3067 10.4373 30.2854 10.6133 30.2534 10.848C30.232 11.072 30.2054 11.3333 30.1734 11.632C30.152 11.9307 30.1254 12.2453 30.0934 12.576C30.0614 12.896 30.0294 13.2053 29.9974 13.504C29.9654 13.8027 29.9334 14.0693 29.9014 14.304C29.88 14.5387 29.864 14.7093 29.8534 14.816C29.8534 14.9013 29.8587 15.0027 29.8694 15.12C29.88 15.2267 29.896 15.3333 29.9174 15.44C29.9494 15.536 29.9814 15.632 30.0134 15.728C30.0454 15.8133 30.072 15.8827 30.0934 15.936Z"
              fill="#F89D24"
            />
          </svg>
        </a>
        <Media at="sm">
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
              <Link href="/contato" passHref>
                <a>Contato</a>
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
            {/* <MenuHamburguer>
              <Menu
                right
                noOverlay
                customBurgerIcon={
                  <img
                    src="/assets/menu.svg"
                    alt="Icone abrir menu hamburguer"
                  />
                }
                customCrossIcon={
                  <img
                    src="/assets/close.svg"
                    alt="Icone fechar menu hamburguer"
                  />
                }
              >
                <Link href="/" passHref>
                  <a className="menu-item">Início</a>
                </Link>
                <Link href="/projetos" passHref>
                  <a className="menu-item">Projetos</a>
                </Link>
                <Link href="/contato" passHref>
                  <a className="menu-item">Contato</a>
                </Link>
                <a
                  className="menu-item"
                  href="/CV-Luiz-Eduardo-Front-End.pdf/"
                  download="CV-Luiz-Eduardo-Front-End"
                >
                  Download CV
                </a>
              </Menu>
            </MenuHamburguer> */}
            <MenuIcon className={active ? "open" : ""} onClick={Toggle} />
            <Menu className={active ? "menuOpen" : ""}>
              <Link href="/" passHref>
                <a className="menu-item">Início</a>
              </Link>
              <Link href="/projetos" passHref>
                <a className="menu-item">Projetos</a>
              </Link>
              <Link href="/contato" passHref>
                <a className="menu-item">Contato</a>
              </Link>
              <a
                className="menu-item"
                href="/CV-Luiz-Eduardo-Front-End.pdf/"
                download="CV-Luiz-Eduardo-Front-End"
              >
                Download CV
              </a>
            </Menu>
          </Media>
        </div>
      </Content>
    </Container>
  );
}
