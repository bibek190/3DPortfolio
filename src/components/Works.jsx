import React from "react";
import styled from "styled-components";
import ProjectCard from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    img: "./image/digital-library.png",
    name: "Digital Library",
    link: "https://digital-books-library.vercel.app/",
    repo: "https://github.com/bibek190/Digital-Books-Library",
  },
  {
    img: "./image/3dgame.png",
    name: "3D Game",
    link: "https://game-r3-f-bibek190s-projects.vercel.app/",
    repo: "https://github.com/bibek190/GAME-R3F",
  },
  {
    img: "./image/Physics3D.png",
    name: "Physics3D",
    link: "https://interactive-mouse-magnet.vercel.app/",
    repo: "https://github.com/bibek190/Interactive-mouse-magnet",
  },
  {
    img: "./image/3dPort.png",
    name: "3d Portfolio",
    link: "https://3d-portfolio-ochre-kappa.vercel.app/",
    repo: "https://github.com/bibek190/3d-portfolio",
  },
  {
    img: "./image/prevportfolio.png",
    name: "myPortfolio",
    link: "https://my-portfolio-bibek190.vercel.app/",
    repo: "https://github.com/bibek190/myPortfolio",
  },
];

const Section = styled.div`
  width: 100vw;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: Column;
  height: 100vh;
`;
const Top = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 40px;
`;

const Bottom = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const SliderWrapper = styled.div`
  width: 100%;
  .swiper {
    padding-bottom: 50px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #333;
  }

  .swiper-pagination-bullet-active {
    background: #000;
  }
`;

const Works = () => {
  return (
    <>
      <Section>
        <Container>
          <Top>
            <Title>My Works</Title>
          </Top>
          <Bottom>
            <SliderWrapper>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {projects.map(({ img, name, link, repo }, index) => (
                  <SwiperSlide key={index}>
                    <ProjectCard
                      name={name}
                      img={img}
                      link={link}
                      repo={repo}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </SliderWrapper>
          </Bottom>
        </Container>
      </Section>
    </>
  );
};

export default Works;
