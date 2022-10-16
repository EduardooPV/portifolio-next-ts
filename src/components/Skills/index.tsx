import React, { useState } from "react";

import { TextSection } from "../TextSection";

import { Container, ContainerCard, ModalHover } from "./styles";

export function Skills() {
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);

  return (
    <Container>
      <TextSection tag="<h2>" tabIndex={0}>
        Conhecimento
      </TextSection>

      <ContainerCard>
        <div
          onMouseEnter={() => setHoverOne(true)}
          onMouseLeave={() => setHoverOne(false)}
        >
          <svg
            width="47"
            height="72"
            viewBox="0 0 47 72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.9691 0.5C5.78114 0.5 0.000186544 6.57346 0.000186544 14.0137C0.000186544 18.537 2.13867 22.5544 5.42571 25.0068C3.7316 26.2851 2.35842 27.9453 1.41624 29.8543C0.474057 31.7634 -0.0109199 33.8682 0.000186544 36C0.000186544 40.5262 2.13867 44.5407 5.42571 46.9932C3.7316 48.2714 2.35842 49.9316 1.41624 51.8407C0.474057 53.7497 -0.0109199 55.8545 0.000186544 57.9863C0.000186544 65.4265 5.78114 71.5 12.9691 71.5C20.1542 71.5 25.9381 65.4265 25.9381 57.9863V46.5612C28.2097 48.4688 31.0732 49.5144 34.0309 49.5166C41.2189 49.5137 46.9998 43.4402 46.9998 36C46.9998 31.4738 44.8643 27.4593 41.5743 25.0068C43.2684 23.7286 44.6416 22.0684 45.5838 20.1593C46.5259 18.2503 47.0109 16.1455 46.9998 14.0137C46.9998 6.57346 41.2189 0.5 34.0309 0.5H12.9691ZM4.87346 14.0137C4.87346 9.30696 8.52181 5.53804 12.9691 5.53804H21.0619V22.4893H12.9691C8.52181 22.4893 4.87346 18.7174 4.87346 14.0137ZM34.0309 22.4863H25.9381V5.53508H34.0309C38.4811 5.53508 42.1265 9.30696 42.1265 14.0137C42.1265 18.7174 38.4811 22.4863 34.0309 22.4863ZM4.8764 36C4.8764 31.2962 8.52474 27.5244 12.9721 27.5244H21.0648V44.4756H12.9691C8.51887 44.4756 4.87346 40.7038 4.87346 36H4.8764ZM25.9381 36C25.9381 31.2962 29.5865 27.5244 34.0338 27.5244C38.4841 27.5244 42.1295 31.2933 42.1295 36C42.1295 40.7038 38.4841 44.4756 34.0338 44.4756C29.5865 44.4756 25.941 40.7067 25.941 36H25.9381ZM4.8764 57.9863C4.8764 53.2826 8.52474 49.5137 12.9721 49.5137H21.0648V57.9863C21.0648 62.693 17.4224 66.462 12.9721 66.462C8.52474 66.462 4.8764 62.693 4.8764 57.9863Z"
            />
          </svg>
          <p>UI/UX</p>
          <ModalHover
            style={hoverOne == true ? { opacity: 1 } : { height: "100px" }}
          >
            <div>
              <svg
                width="47"
                height="72"
                viewBox="0 0 47 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9691 0.5C5.78114 0.5 0.000186544 6.57346 0.000186544 14.0137C0.000186544 18.537 2.13867 22.5544 5.42571 25.0068C3.7316 26.2851 2.35842 27.9453 1.41624 29.8543C0.474057 31.7634 -0.0109199 33.8682 0.000186544 36C0.000186544 40.5262 2.13867 44.5407 5.42571 46.9932C3.7316 48.2714 2.35842 49.9316 1.41624 51.8407C0.474057 53.7497 -0.0109199 55.8545 0.000186544 57.9863C0.000186544 65.4265 5.78114 71.5 12.9691 71.5C20.1542 71.5 25.9381 65.4265 25.9381 57.9863V46.5612C28.2097 48.4688 31.0732 49.5144 34.0309 49.5166C41.2189 49.5137 46.9998 43.4402 46.9998 36C46.9998 31.4738 44.8643 27.4593 41.5743 25.0068C43.2684 23.7286 44.6416 22.0684 45.5838 20.1593C46.5259 18.2503 47.0109 16.1455 46.9998 14.0137C46.9998 6.57346 41.2189 0.5 34.0309 0.5H12.9691ZM4.87346 14.0137C4.87346 9.30696 8.52181 5.53804 12.9691 5.53804H21.0619V22.4893H12.9691C8.52181 22.4893 4.87346 18.7174 4.87346 14.0137ZM34.0309 22.4863H25.9381V5.53508H34.0309C38.4811 5.53508 42.1265 9.30696 42.1265 14.0137C42.1265 18.7174 38.4811 22.4863 34.0309 22.4863ZM4.8764 36C4.8764 31.2962 8.52474 27.5244 12.9721 27.5244H21.0648V44.4756H12.9691C8.51887 44.4756 4.87346 40.7038 4.87346 36H4.8764ZM25.9381 36C25.9381 31.2962 29.5865 27.5244 34.0338 27.5244C38.4841 27.5244 42.1295 31.2933 42.1295 36C42.1295 40.7038 38.4841 44.4756 34.0338 44.4756C29.5865 44.4756 25.941 40.7067 25.941 36H25.9381ZM4.8764 57.9863C4.8764 53.2826 8.52474 49.5137 12.9721 49.5137H21.0648V57.9863C21.0648 62.693 17.4224 66.462 12.9721 66.462C8.52474 66.462 4.8764 62.693 4.8764 57.9863Z"
                />
              </svg>
              <span>
                Conhecimento básico em <strong>UI/UX</strong>, já realizei
                alguns <strong>wireframes</strong> e <strong>protótipos</strong>{" "}
                utilizando o <strong>Figma</strong> como ferramenta de
                desenvolvimento.
              </span>
            </div>
          </ModalHover>
        </div>
        <div
          onMouseEnter={() => setHoverTwo(true)}
          onMouseLeave={() => setHoverTwo(false)}
        >
          <svg
            width="71"
            height="71"
            viewBox="0 0 71 71"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M35.855 49.7887C35.855 50.1792 36.1567 50.4987 36.5206 50.4987H52.9394C53.3032 50.4987 53.605 50.1792 53.605 49.7887V45.5287C53.605 45.1382 53.3032 44.8187 52.9394 44.8187H36.5206C36.1567 44.8187 35.855 45.1382 35.855 45.5287V49.7887ZM18.5576 50.3301L35.5976 36.0414C35.9349 35.7574 35.9349 35.2337 35.5976 34.9497L18.5576 20.6699C18.4548 20.5824 18.3289 20.5263 18.1951 20.5082C18.0613 20.4901 17.9251 20.5108 17.8027 20.5678C17.6803 20.6248 17.5768 20.7157 17.5045 20.8297C17.4323 20.9438 17.3943 21.0762 17.395 21.2113V26.7759C17.395 26.9889 17.4837 27.1841 17.6524 27.3172L27.3971 35.5L17.6524 43.6828C17.573 43.7492 17.509 43.8319 17.4646 43.9253C17.4201 44.0188 17.3964 44.1207 17.395 44.2241V49.7887C17.395 50.3923 18.0961 50.7206 18.5576 50.3301ZM68.16 0H2.84C1.26912 0 0 1.26912 0 2.84V68.16C0 69.7309 1.26912 71 2.84 71H68.16C69.7309 71 71 69.7309 71 68.16V2.84C71 1.26912 69.7309 0 68.16 0ZM64.61 64.61H6.39V6.39H64.61V64.61Z" />
          </svg>

          <p>Implementação</p>
          <ModalHover
            style={hoverTwo == true ? { opacity: 1 } : { height: "100px" }}
          >
            <div>
              <svg
                width="71"
                height="71"
                viewBox="0 0 71 71"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M35.855 49.7887C35.855 50.1792 36.1567 50.4987 36.5206 50.4987H52.9394C53.3032 50.4987 53.605 50.1792 53.605 49.7887V45.5287C53.605 45.1382 53.3032 44.8187 52.9394 44.8187H36.5206C36.1567 44.8187 35.855 45.1382 35.855 45.5287V49.7887ZM18.5576 50.3301L35.5976 36.0414C35.9349 35.7574 35.9349 35.2337 35.5976 34.9497L18.5576 20.6699C18.4548 20.5824 18.3289 20.5263 18.1951 20.5082C18.0613 20.4901 17.9251 20.5108 17.8027 20.5678C17.6803 20.6248 17.5768 20.7157 17.5045 20.8297C17.4323 20.9438 17.3943 21.0762 17.395 21.2113V26.7759C17.395 26.9889 17.4837 27.1841 17.6524 27.3172L27.3971 35.5L17.6524 43.6828C17.573 43.7492 17.509 43.8319 17.4646 43.9253C17.4201 44.0188 17.3964 44.1207 17.395 44.2241V49.7887C17.395 50.3923 18.0961 50.7206 18.5576 50.3301ZM68.16 0H2.84C1.26912 0 0 1.26912 0 2.84V68.16C0 69.7309 1.26912 71 2.84 71H68.16C69.7309 71 71 69.7309 71 68.16V2.84C71 1.26912 69.7309 0 68.16 0ZM64.61 64.61H6.39V6.39H64.61V64.61Z" />
              </svg>

              <span>
                Desenvolvimento de aplicações web usando{" "}
                <strong>React.Js</strong> + <strong>Next.Js</strong>, consumo de{" "}
                <strong>API</strong> por <strong>GraphQL</strong> e{" "}
                <strong>REST</strong>. Ferramentas mais atuais de estilização
                como <strong>TailwindCSS</strong> e <strong>ChakraUI</strong>.
              </span>
            </div>
          </ModalHover>
        </div>
        <div
          onMouseEnter={() => setHoverThree(true)}
          onMouseLeave={() => setHoverThree(false)}
        >
          <svg
            width="45"
            height="72"
            viewBox="0 0 45 72"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.96875 1H38.0312C41.4299 1 44.1875 3.75759 44.1875 7.15625V64.8438C44.1875 68.2424 41.4299 71 38.0312 71H6.96875C3.57009 71 0.8125 68.2424 0.8125 64.8438V7.15625C0.8125 3.75759 3.57009 1 6.96875 1ZM17.5625 62.625C17.5625 65.3556 19.7694 67.5625 22.5 67.5625C25.2306 67.5625 27.4375 65.3556 27.4375 62.625C27.4375 59.8944 25.2306 57.6875 22.5 57.6875C19.7694 57.6875 17.5625 59.8944 17.5625 62.625ZM36.3672 54.25C37.5586 54.25 38.5312 53.2773 38.5312 52.0859V8.82031C38.5312 7.62894 37.5586 6.65625 36.3672 6.65625H8.63281C7.44144 6.65625 6.46875 7.62894 6.46875 8.82031V52.0859C6.46875 53.2773 7.44144 54.25 8.63281 54.25H36.3672Z" />
          </svg>

          <p>Multiplataforma</p>
          <ModalHover
            style={hoverThree == true ? { opacity: 1 } : { height: "100px" }}
          >
            <div>
              <svg
                width="45"
                height="72"
                viewBox="0 0 45 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.96875 1H38.0312C41.4299 1 44.1875 3.75759 44.1875 7.15625V64.8438C44.1875 68.2424 41.4299 71 38.0312 71H6.96875C3.57009 71 0.8125 68.2424 0.8125 64.8438V7.15625C0.8125 3.75759 3.57009 1 6.96875 1ZM17.5625 62.625C17.5625 65.3556 19.7694 67.5625 22.5 67.5625C25.2306 67.5625 27.4375 65.3556 27.4375 62.625C27.4375 59.8944 25.2306 57.6875 22.5 57.6875C19.7694 57.6875 17.5625 59.8944 17.5625 62.625ZM36.3672 54.25C37.5586 54.25 38.5312 53.2773 38.5312 52.0859V8.82031C38.5312 7.62894 37.5586 6.65625 36.3672 6.65625H8.63281C7.44144 6.65625 6.46875 7.62894 6.46875 8.82031V52.0859C6.46875 53.2773 7.44144 54.25 8.63281 54.25H36.3672Z"
                  fill="white"
                  stroke="white"
                />
              </svg>

              <span>
                Aplicando sempre o conceito de desenvolvimento{" "}
                <strong>Mobile first</strong>, e totalmente{" "}
                <strong>responsivo</strong> em diversas plataformas.
              </span>
            </div>
          </ModalHover>
        </div>

        <svg
          width="35"
          height="35"
          viewBox="0 0 25 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.5708 16.071L20.8138 20.314M7.68779 2.23901L8.46479 5.13601M5.63579 7.96501L2.73779 7.18801M14.4498 4.05001L12.3278 6.17201M6.67079 11.828L4.55079 13.95M9.49979 9.00001L14.4998 21L16.2738 15.774L21.4998 14L9.49979 9.00001Z" />
        </svg>
      </ContainerCard>
    </Container>
  );
}
