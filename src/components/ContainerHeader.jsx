import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '@components/typograph/Text';
import LogoSVGComponent from '@/assets/kert_logos/Square.svg';

const ContainerHeaderWrapper = styled.div.attrs({
  className: 'container-header',
})`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div.attrs({
  className: 'container-header-title',
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerHeader = ({ title, subtitle }) => {
  return (
    <ContainerHeaderWrapper>
      <TitleWrapper>
        <Text size="m" weight="light" color="var(--secondary-text-color)">
          {subtitle}
        </Text>
        <Text size="sxl" weight="bold" color="var(--primary-text-color)">
          {title}
        </Text>
      </TitleWrapper>
      <LogoSVGComponent
        width="103px"
        height="101px"
        fill="var(--primary-text-color)"
        style={{ opacity: '0.1' }}
      />
    </ContainerHeaderWrapper>
  );
};

ContainerHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
