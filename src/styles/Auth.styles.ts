import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components";
import { colors } from "../consts/colors";
import { TextProps } from "../models/styles";

export const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${colors.light.white};
`;

export const StyledContainer = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 5px;
`;

export const StyledTitle = styled(View)`
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledText = styled(Text)<TextProps>`
  font-size: ${(props) => props.fontSize ?? 14}px;
  color: ${(props) => props.color ?? colors.dark.black};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  text-align: ${(props) => props.textAlign ?? "auto"};
`;

export const StyledForm = styled(View)`
  width: 85%;
  gap: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const StyledDivider = styled(View)`
  background-color: ${colors.primary.gray};
  height: 2px;
  flex: 1;
  align-self: center;
`;

export const StyledRow = styled(View)`
  flex-direction: row;
  gap: 5px;
`;

export const StyledTouchable = styled(TouchableOpacity)`
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: 200px;
  height: 200px;
`;
