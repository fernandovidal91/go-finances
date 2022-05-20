import React from "react"
import { SvgProps } from 'react-native-svg';
import { TouchableOpacityProps } from 'react-native';

import {
  Button,
  ImageContainer,
  Text,
} from "./styles";

interface SignInSocialButtonProps extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SignInSocialButton({ title, svg: Svg, ...rest }: SignInSocialButtonProps) {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Text>{title}</Text>
    </Button>
  );
}
