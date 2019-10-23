import styled from 'styled-components/native';

interface BaseImgProps {
  width?: string;
  height?: string;
  mt?: string;
  mb?: string;
  mr?: string;
}

const BaseImg = styled.View<BaseImgProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  margin-top: ${props => props.mt || 0};
  margin-bottom: ${props => props.mb || 0};
  margin-right: ${props => props.mr || 0};
  display: flex;
`;

const Img = styled.Image`
  width: 100%;
  height: 100%;
`;

export {BaseImg, Img};
