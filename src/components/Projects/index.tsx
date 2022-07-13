import Link from "next/link";
import React from "react";
import { ButtonGeneric } from "../ButtonGeneric";
import { Media } from "../MediaScreen";
import { TextSection } from "../TextSection";
import { Container, Content, CardUIUX, CardDev } from "./styles";

export function Projects() {
  return (
    <Container id="projects">
      <TextSection tag="<h2>">Projetos</TextSection>

      <Content>
        <CardUIUX>
          <div>
            <svg
              width="70"
              height="66"
              viewBox="0 0 70 66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32.6667 7C32.6667 6.38116 32.9125 5.78767 33.3501 5.35008C33.7877 4.9125 34.3812 4.66667 35 4.66667H67.6667C68.2855 4.66667 68.879 4.9125 69.3166 5.35008C69.7542 5.78767 70 6.38116 70 7V11.6667C70 12.2855 69.7542 12.879 69.3166 13.3166C68.879 13.7542 68.2855 14 67.6667 14H35C34.3812 14 33.7877 13.7542 33.3501 13.3166C32.9125 12.879 32.6667 12.2855 32.6667 11.6667V7ZM9.33333 0C6.85798 0 4.48401 0.983331 2.73367 2.73367C0.983331 4.48401 0 6.85798 0 9.33333L0 18.6667C0 21.142 0.983331 23.516 2.73367 25.2663C4.48401 27.0167 6.85798 28 9.33333 28H18.6667C21.142 28 23.516 27.0167 25.2663 25.2663C27.0167 23.516 28 21.142 28 18.6667V9.33333C28 6.85798 27.0167 4.48401 25.2663 2.73367C23.516 0.983331 21.142 0 18.6667 0H9.33333ZM9.33333 37.3333C6.85798 37.3333 4.48401 38.3167 2.73367 40.067C0.983331 41.8173 0 44.1913 0 46.6667L0 56C0 58.4754 0.983331 60.8493 2.73367 62.5997C4.48401 64.35 6.85798 65.3333 9.33333 65.3333H18.6667C21.142 65.3333 23.516 64.35 25.2663 62.5997C27.0167 60.8493 28 58.4754 28 56V46.6667C28 44.1913 27.0167 41.8173 25.2663 40.067C23.516 38.3167 21.142 37.3333 18.6667 37.3333H9.33333ZM13.3187 20.3187C13.1019 20.536 12.8444 20.7084 12.561 20.826C12.2775 20.9436 11.9736 21.0042 11.6667 21.0042C11.3598 21.0042 11.0559 20.9436 10.7724 20.826C10.4889 20.7084 10.2314 20.536 10.0147 20.3187L5.348 15.652C5.13106 15.4351 4.95897 15.1775 4.84156 14.8941C4.72415 14.6106 4.66372 14.3068 4.66372 14C4.66372 13.6932 4.72415 13.3894 4.84156 13.1059C4.95897 12.8225 5.13106 12.5649 5.348 12.348C5.56494 12.1311 5.82249 11.959 6.10594 11.8416C6.38939 11.7241 6.69319 11.6637 7 11.6637C7.3068 11.6637 7.6106 11.7241 7.89406 11.8416C8.17751 11.959 8.43506 12.1311 8.652 12.348L11.6667 15.3673L19.348 7.68133C19.5649 7.46439 19.8225 7.2923 20.1059 7.17489C20.3894 7.05748 20.6932 6.99705 21 6.99705C21.3068 6.99705 21.6106 7.05748 21.8941 7.17489C22.1775 7.2923 22.4351 7.46439 22.652 7.68133C22.8689 7.89828 23.041 8.15583 23.1584 8.43928C23.2759 8.72273 23.3363 9.02653 23.3363 9.33333C23.3363 9.64014 23.2759 9.94394 23.1584 10.2274C23.041 10.5108 22.8689 10.7684 22.652 10.9853L13.3187 20.3187ZM13.3187 57.652C13.1019 57.8693 12.8444 58.0417 12.561 58.1593C12.2775 58.277 11.9736 58.3375 11.6667 58.3375C11.3598 58.3375 11.0559 58.277 10.7724 58.1593C10.4889 58.0417 10.2314 57.8693 10.0147 57.652L5.348 52.9853C4.90986 52.5472 4.66372 51.953 4.66372 51.3333C4.66372 50.7137 4.90986 50.1195 5.348 49.6813C5.78614 49.2432 6.38038 48.9971 7 48.9971C7.61962 48.9971 8.21386 49.2432 8.652 49.6813L11.6667 52.7007L19.348 45.0147C19.7861 44.5765 20.3804 44.3304 21 44.3304C21.6196 44.3304 22.2139 44.5765 22.652 45.0147C23.0901 45.4528 23.3363 46.0471 23.3363 46.6667C23.3363 47.2863 23.0901 47.8805 22.652 48.3187L13.3187 57.652ZM32.6667 44.3333C32.6667 43.7145 32.9125 43.121 33.3501 42.6834C33.7877 42.2458 34.3812 42 35 42H67.6667C68.2855 42 68.879 42.2458 69.3166 42.6834C69.7542 43.121 70 43.7145 70 44.3333V49C70 49.6188 69.7542 50.2123 69.3166 50.6499C68.879 51.0875 68.2855 51.3333 67.6667 51.3333H35C34.3812 51.3333 33.7877 51.0875 33.3501 50.6499C32.9125 50.2123 32.6667 49.6188 32.6667 49V44.3333ZM32.6667 21C32.6667 20.3812 32.9125 19.7877 33.3501 19.3501C33.7877 18.9125 34.3812 18.6667 35 18.6667H58.3333C58.9522 18.6667 59.5457 18.9125 59.9832 19.3501C60.4208 19.7877 60.6667 20.3812 60.6667 21C60.6667 21.6188 60.4208 22.2123 59.9832 22.6499C59.5457 23.0875 58.9522 23.3333 58.3333 23.3333H35C34.3812 23.3333 33.7877 23.0875 33.3501 22.6499C32.9125 22.2123 32.6667 21.6188 32.6667 21ZM32.6667 58.3333C32.6667 57.7145 32.9125 57.121 33.3501 56.6834C33.7877 56.2458 34.3812 56 35 56H58.3333C58.9522 56 59.5457 56.2458 59.9832 56.6834C60.4208 57.121 60.6667 57.7145 60.6667 58.3333C60.6667 58.9522 60.4208 59.5457 59.9832 59.9833C59.5457 60.4208 58.9522 60.6667 58.3333 60.6667H35C34.3812 60.6667 33.7877 60.4208 33.3501 59.9833C32.9125 59.5457 32.6667 58.9522 32.6667 58.3333Z" />
            </svg>

            <Media greaterThan="sm">
              <Link href="/projetos" passHref>
                <a>
                  <button>Ver projetos</button>
                </a>
              </Link>
            </Media>
          </div>

          <div>
            <p>UI / UX</p>

            <span>
              Venha ver alguns projetos que eu realizei utilizando alguns
              conceitos de UI/UX.
            </span>
          </div>
        </CardUIUX>

        <CardDev>
          <div>
            <svg
              width="70"
              height="64"
              viewBox="0 0 70 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.5 0.5H66.5C67.4283 0.5 68.3185 0.868749 68.9749 1.52513C69.6313 2.1815 70 3.07174 70 4V60C70 60.9283 69.6313 61.8185 68.9749 62.4749C68.3185 63.1313 67.4283 63.5 66.5 63.5H3.5C2.57174 63.5 1.6815 63.1313 1.02513 62.4749C0.368749 61.8185 0 60.9283 0 60V4C0 3.07174 0.368749 2.1815 1.02513 1.52513C1.6815 0.868749 2.57174 0.5 3.5 0.5ZM7 7.5V56.5H63V7.5H7ZM63 32L50.624 44.376L45.675 39.4235L53.102 32L45.675 24.5765L50.624 19.624L63 32ZM16.898 32L24.325 39.4235L19.376 44.376L7 32L19.376 19.624L24.325 24.58L16.898 32ZM32.354 49.5H24.906L37.646 14.5H45.094L32.354 49.5Z" />
            </svg>

            <Media greaterThan="sm">
              <Link href="/projetos" passHref>
                <a>
                  <button>Ver projetos</button>
                </a>
              </Link>
            </Media>
          </div>

          <div>
            <p>Implementação</p>

            <span>Venha ver algumas aplicações web que eu desenvolvi.</span>
          </div>
        </CardDev>
      </Content>
      <Media at="sm">
        <Link href="/projetos" passHref>
          <a>
            <ButtonGeneric>Ver projetos</ButtonGeneric>
          </a>
        </Link>
      </Media>
    </Container>
  );
}
