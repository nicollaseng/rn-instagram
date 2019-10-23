import styled from 'styled-components/native';
import {colors, metrics} from '../../global';

export const List = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`;

export const ContentTop = styled.View`
  height: 100px;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20px 0 20px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${colors.white};
`;

interface BtnProps {
  border?: boolean;
}

export const Btn = styled.TouchableOpacity<BtnProps>`
  height: 65px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Item = styled.Text`
  font-family: ${metrics.font};
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Top = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: ${metrics.font};
  font-size: 18px;
  color: ${colors.white};
  margin-left: 20px;
  font-weight: bold;
`;
