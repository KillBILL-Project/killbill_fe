import React from 'react';
import { G, Path, Svg, Text } from 'react-native-svg';
import { arc, pie, PieArcDatum } from 'd3-shape';
import { GREY700 } from '@constants/colors';
import { scale } from '@utils/platform';
import { Container } from './styles';

export interface PieChartData {
  name: string;
  value: number;
  color: string;
}

export interface PieChartProps {
  data: PieChartData[];
  size: number;
  innerRadius?: number;
  centerText?: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, size, innerRadius = 0, centerText = '' }) => {
  const ratioSize = scale(size);
  const ratioInnerRadius = scale(innerRadius);

  const pieGenerator = pie<PieChartData>()
    .value(d => d.value)
    .sort(null);

  const arcGenerator = arc<PieArcDatum<PieChartData>>()
    .innerRadius(ratioInnerRadius)
    .outerRadius(ratioSize / 2);

  const arcs = pieGenerator(data);

  return (
    <Container size={ratioSize}>
      <Svg width={ratioSize} height={ratioSize}>
        <G x={ratioSize / 2} y={ratioSize / 2}>
          {arcs.map(item => (
            <Path
              key={`chart-${item.data.name}`}
              d={arcGenerator(item) as string}
              fill={item.data.color}
            />
          ))}
          {centerText ? (
            <Text
              x={0}
              y={0}
              fill={GREY700}
              fontSize={scale(16)}
              fontWeight="bold"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {centerText}
            </Text>
          ) : null}
        </G>
      </Svg>
    </Container>
  );
};

export default PieChart;
