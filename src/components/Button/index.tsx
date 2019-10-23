import * as React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Btn, BtnText} from './styles';
import Image from '../Image';

interface PropsTypes {
  primary?: boolean;
  basic?: boolean;
  basicBlue?: boolean;
  success?: boolean;
  secondary?: boolean;
  warning?: boolean;
  danger?: boolean;
  dark?: boolean;
  darkBlue?: boolean;
  facebook?: boolean;
  google?: boolean;
  disabled?: boolean;
  imgIcon?: any;
  imgIconSize?: string;
  action?: any;
  center?: boolean;
  icon?: boolean;
  iconRight?: boolean;
  iconName?: any;
  iconSize?: number;
  iconColor?: any;
  uppercase?: boolean;
  size?: string;
  bold?: boolean;
  content?: string;
  margin?: number;
  svgIcon?: any;
  testID?: string;
  paddingLeft?: number;
  paddingRight?: number;
}

const Button = (props: PropsTypes) => {
  return (
    <Btn
      paddingLeft={props.paddingLeft}
      paddingRight={props.paddingRight}
      primary={props.primary}
      secondary={props.secondary}
      basic={props.basic}
      success={props.success}
      warning={props.warning}
      danger={props.danger}
      dark={props.dark}
      facebook={props.facebook}
      google={props.google}
      disabled={props.disabled}
      onPress={props.action}
      activeOpacity={1}
      center={props.center}
      margin={props.margin !== undefined ? `${props.margin}px` : undefined}
      testID={props.testID}>
      {props.imgIcon !== undefined ? (
        <Image
          source={props.imgIcon}
          width={props.imgIconSize}
          height={props.imgIconSize}
          mr={props.imgIconSize}
        />
      ) : null}
      {props.svgIcon !== undefined ? props.svgIcon : null}
      {props.icon ? (
        <Icon
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      ) : null}
      <BtnText
        dark={props.dark}
        basicBlue={props.basicBlue}
        uppercase={props.uppercase}
        size={props.size}
        bold={props.bold}
        center={props.center}>
        {props.content}
      </BtnText>
      {props.iconRight ? (
        <Icon
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      ) : null}
    </Btn>
  );
};

export default Button;
