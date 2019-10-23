import styled from "styled-components/native";

interface ImageProps {
  ratio?: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const LogoContainer = styled.View`
  height: 50px;
  background-color: #f5f5f5;
  align-items: center;
`;

export const Logo = styled.Image`
  align-self: center;
`;

export const SafeArea = styled.SafeAreaView`
  background-color: #f5f5f5;
`;

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const PostImage = styled.Image<ImageProps>`
  width: 100%;
  aspect-ratio: ${props => props.ratio};
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: "small",
  color: "#999"
})`
  margin: 30px 0;
`;
