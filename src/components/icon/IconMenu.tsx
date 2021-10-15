import React, { FunctionComponent, memo, useMemo } from 'react';
import { ColorValue } from 'react-native';
import { Rect, Svg } from 'react-native-svg';
import useTheme from '../../hooks/useTheme';
import { IIconBase } from './Icon';

export interface IIconProps extends IIconBase {
  color?: ColorValue;
  activeRectColor?: ColorValue;
}

const INITIAL_ICON_SIZE = 16;

const IconMenu: FunctionComponent<IIconProps> = memo(
  ({ style, color, size = INITIAL_ICON_SIZE, activeRectColor }) => {
    const theme = useTheme();

    const recWidth = useMemo(() => size * 0.375, [size]);
    const recRx = useMemo(() => size / 16, [size]);
    const recDxy = useMemo(() => size * 0.625, [size]);

    const recColor = useMemo(() => (color || theme.textSecondary) as string, [color]);
    return (
      <Svg
        width={size}
        height={size}
        viewBox={`0 0 ${INITIAL_ICON_SIZE} ${INITIAL_ICON_SIZE}`}
        fill='none'
        style={style}
      >
        <Rect
          width={recWidth}
          height={recWidth}
          rx={recRx}
          fill={(activeRectColor || theme.primary) as string}
        />
        <Rect y={recDxy} width={recWidth} height={recWidth} rx={recRx} fill={recColor} />
        <Rect x={recDxy} width={recWidth} height={recWidth} rx={recRx} fill={recColor} />
        <Rect x={recDxy} y={recDxy} width={recWidth} height={recWidth} rx={recRx} fill={recColor} />
      </Svg>
    );
  }
);

export default IconMenu;
