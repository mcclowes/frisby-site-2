import styled from "styled-components";
import Vimeo from "react-vimeo";
import * as mixins from "codogo-utility-functions";

import data from "src/data";
import * as vars from "src/components/style/vars";
import { Button, GridCell, VimeoWrapper } from "src/components/common";
import Head from "src/components/common/Head";

const HeroImage = styled(GridCell)`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${data.homePage.hero.url});
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
`;

const TextWrapper = styled(GridCell)`
  max-width: 36em;
`;

const TitleText = styled.div`
  font-size: 3em;
  font-family: ${vars.font.title.family};
  margin-bottom: 1em;
`;

const ButtonWrapper = styled.div`
  margin-top: 2em;
`;

const Home = () => {
  console.log(data.homePage, data);

  return (
    <HeroImage>
      <Head />

      <TextWrapper>
        <TitleText>{data.siteSettings.siteName}</TitleText>
      </TextWrapper>

      <TextWrapper>
        <VimeoWrapper>
          <Vimeo videoId={"299034024"} />
        </VimeoWrapper>
        <br/>

        <div dangerouslySetInnerHTML={{ __html: data.homePage.aboutTextHtml }} />

        <ButtonWrapper>
          <Button to="/about">Find out more</Button>
        </ButtonWrapper>
      </TextWrapper>
    </HeroImage>
  )
};

export default Home;
