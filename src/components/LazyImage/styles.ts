import styled from "styled-components/native";

interface ImageProps {
  ratio?: number;
}

export const Small = styled.ImageBackground<ImageProps>`
  width: 100%;
  aspect-ratio: ${props => props.ratio};
`;

export const Original = styled.Image<ImageProps>`
  width: 100%;
  aspect-ratio: ${props => props.ratio};
`;
