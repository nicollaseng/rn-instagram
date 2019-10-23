import {Platform} from 'react-native';
import styled from 'styled-components/native';

// HELPERS
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';

// GLOBAL CONSTANTS
import {colors, metrics} from './';

interface ContentProps {
  padd?: string;
  center?: boolean;
  bt?: boolean;
}

interface TextProps {
  color?: string;
  right?: boolean;
  center?: boolean;
  uppercase?: boolean;
}

interface DescriptionProps {
  color?: string;
  right?: boolean;
  center?: boolean;
  bold?: string;
}

interface ScreenProps {
  center?: boolean;
  size?: boolean;
  padd?: any;
}

interface NoticeProps {
  justify?: string;
  mt?: string;
  mb?: string;
}

interface LabelProps {
  transform?: string;
  size?: string;
}

interface ItemScreenProps {
  padd?: string;
  bt?: boolean;
}

export const Container = styled(LinearGradient)`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? `${getStatusBarHeight()}px` : 0};
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const ViewContainer = styled.View`
  display: flex;
  flex: 1;
`;

const ContainerJustify = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ViewFlex = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemScreen = styled.View<ItemScreenProps>`
  width: 100%;
  padding: ${props =>
    props.padd === 'normal'
      ? '0 15px 0 15px'
      : props.padd === 'massive'
      ? '0 40px 0 40px'
      : '0px'};
  margin-bottom: ${props => (props.bt ? '20px' : '0px')};
`;

const Content = styled.View<ContentProps>`
  width: ${metrics.screenWidth};
  height: auto;
  padding: ${props =>
    props.padd === 'normal'
      ? '0 15px 15px 15px'
      : props.padd === 'massive'
      ? '0 60px 30px 60px'
      : '0 40px 0 40px'};
  display: flex;
  align-items: ${props => (props.center ? 'center' : 'flex-start')};
  margin-top: ${props => (props.bt ? '10px' : 0)};
`;

const Screen = styled.View<ScreenProps>`
  display: flex;
  align-items: center;
  padding: ${props =>
    metrics.screenWidth <= 320
      ? '20px 20px 40px 20px'
      : props.padd === 'normal'
      ? '40px'
      : props.padd === 'minimo'
      ? '20px'
      : '0px'};

  ${props => (props.size ? `height: ${metrics.screenHeight}` : null)};

  ${props => (props.center ? `justify-content: center` : null)};
`;

const Title = styled.Text<TextProps>`
  font-size: 16px;
  font-family: 'Open Sans';
  color: ${props => props.color || colors.white};
  font-weight: bold;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  text-align: ${props =>
    props.right ? 'right' : props.center ? 'center' : 'left'};
`;

const Description = styled.Text<DescriptionProps>`
  font-size: 14px;
  font-family: 'Open Sans';
  color: ${props => props.color || colors.white};
  font-weight: ${props => props.bold || 'normal'};
  text-align: ${props =>
    props.right ? 'right' : props.center ? 'center' : 'left'};
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const Notice = styled.View<NoticeProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'center'};
  margin-top: ${props => props.mt || 0};
  margin-bottom: ${props => props.mb || 0};
  align-items: center;
  color: ${colors.white};
`;

const Label = styled.Text<LabelProps>`
  color: ${colors.white};
  text-transform: ${props => props.transform || 'none'};
  font-family: 'Open Sans';
  text-align: center;
  font-size: ${props =>
    props.size === 'mini'
      ? '11px'
      : props.size === 'tiny'
      ? '12px'
      : props.size === 'small'
      ? '14px'
      : props.size === 'medium'
      ? '16px'
      : props.size === 'large'
      ? '18px'
      : props.size === 'big'
      ? '26px'
      : props.size === 'huge'
      ? '28px'
      : props.size === 'massive'
      ? '32px'
      : '20px'};
`;

export {
  SafeArea,
  ViewContainer,
  ViewFlex,
  ItemScreen,
  Content,
  Screen,
  Title,
  Description,
  Line,
  Notice,
  Label,
  ContainerJustify,
};
