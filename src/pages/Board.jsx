import styled from "styled-components";
import { Button } from "../components/forms/Button";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  padding: 3rem 3rem;

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

const TitleBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
`

const Title = styled.h1`
    font-size: 42px;
    font-weight: 800;
    margin-bottom: 1rem;
    color: var(--primary-text-color);
`;

const Description = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: var(--secondary-text-color);
`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 2rem;
`

export default function Board() {
    return (
        <Container>
            <TitleBox>
                <Title>KERT 소식지</Title>
                <Description>열심히 소통하는 KERT, 자세히 알아볼 수 있어요</Description>
            </TitleBox>
            <ButtonGroup>
                <Button type="rounded">asdf</Button>
                <Button type="rounded" color="var(--secondary-color)">asdf</Button>
            </ButtonGroup>
        </Container>
    );
}
