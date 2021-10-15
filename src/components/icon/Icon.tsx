import React, { memo } from 'react';
import { ColorValue, TextStyle } from 'react-native';
import Svg, { Color, LinearGradient, Path, Stop } from 'react-native-svg';
import IconNames from './iconNames';
import paths from './paths';

export interface IIconBase {
  size?: number;
  style?: TextStyle;
}

export interface IIconProps extends IIconBase {
  name: IconNames;
  color?: ColorValue;
  gradient?: {
    colors: ColorValue[];
  };
}

const INITIAL_ICON_SIZE = 28;

const Icon = memo(
  ({
    name,
    size = INITIAL_ICON_SIZE,
    style,
    gradient,
    color = style?.color?.toString() || '#000000',
  }: IIconProps): JSX.Element => {
    return (
      <Svg
        style={style}
        viewBox={`0 0 ${INITIAL_ICON_SIZE} ${INITIAL_ICON_SIZE}`}
        {...{ height: size, width: size, style }}
      >
        {gradient && gradient.colors.length > 1 && (
          <LinearGradient
            id='Gradient'
            gradientUnits='userSpaceOnUse'
            x1='0'
            y1='0'
            x2={INITIAL_ICON_SIZE}
            y2='0'
          >
            {gradient.colors.map((gradientColor, index) => (
              <Stop
                // eslint-disable-next-line react/no-array-index-key
                key={`${gradientColor as string}-${index}`}
                offset={index / (gradient.colors.length - 1)}
                stopColor={gradientColor as Color}
                // stopOpacity={`${(index - 1) / gradient.colors.length}`}
              />
            ))}
          </LinearGradient>
        )}
        <Path
          d={paths[name]}
          fill={gradient ? 'url(#Gradient)' : (color as Color)}
          strokeWidth={1}
          fillRule='evenodd'
        />
      </Svg>
    );
  }
);

export default Icon;
