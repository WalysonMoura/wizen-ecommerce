import { styled } from "styled-components"

export const VideoContainer = styled.section`
  position: relative;
  width: 640px;
  height: 390px;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.27);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
  border: 1px solid rgba(255, 255, 255, 0.13);
  .play-containner {
    border-radius: 16px;
    background: #e0e0e0;
    box-shadow: 34px 34px 69px #bebebe, -34px -34px 69px #ffffff;
  }
  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px; /* Ajuste o tamanho do botão conforme necessário */
    height: 80px; /* Ajuste o tamanho do botão conforme necessário */
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo do botão */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .play-icon {
    color: #fff; /* Cor do ícone de play */
    font-size: 32px; /* Ajuste o tamanho do ícone conforme necessário */
  }
`
