import React, { FunctionComponent, memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import paddings from '../../core/constants/paddings';
import { Theme } from '../../core/types/theme';
import useStyles from '../../hooks/useStyles';
import { ProgressChart, ContributionGraph } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const AnalyticsScreen: FunctionComponent = memo(function AnalyticsScreen() {
  const appStyles = useStyles(styleSheet);

  const data = {
    labels: ['Бюджет'], // optional
    data: [0.6],
  };

  const chartConfig = {
    backgroundColor: 'white',
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 0) => `rgba(91, 45, 227, ${opacity})`,
    labelColor: (opacity = 0) => `rgba(26, 255, 146, ${opacity})`,
    style: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 16,
    },
    strokeWidth: 2, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
  };

  const commitsData = [
    { date: '2017-01-02', count: 1 },
    { date: '2017-01-03', count: 2 },
    { date: '2017-01-04', count: 3 },
    { date: '2017-01-05', count: 4 },
    { date: '2017-01-06', count: 5 },
    { date: '2017-01-30', count: 2 },
    { date: '2017-01-31', count: 3 },
    { date: '2017-03-01', count: 2 },
    { date: '2017-04-02', count: 4 },
    { date: '2017-03-05', count: 2 },
    { date: '2017-02-30', count: 4 },
  ];

  return (
    <View style={appStyles.container}>
      <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '700' }}>Analytics Screen</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: paddings.default,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              width: 150,
              height: 120,
              borderRadius: 16,
              marginTop: paddings.default,
              paddingVertical: paddings.default,
              alignItems: 'center',
              backgroundColor: '#529db4',
            }}
          >
            <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>Баланс</Text>
            <Text
              style={{ marginTop: paddings.small, color: 'white', fontSize: 18, fontWeight: '300' }}
            >
              100000
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ backgroundColor: 'white' }}>
          <ProgressChart
            data={data}
            width={120}
            height={120}
            strokeWidth={15}
            radius={44}
            chartConfig={chartConfig}
            hideLegend
          />
        </View>
      </View>
      <ContributionGraph
        values={commitsData}
        endDate={new Date('2021-04-01')}
        numDays={100}
        width={screenWidth}
        height={220}
        // tooltipDataAttrs={}
        chartConfig={chartConfig}
      />
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: paddings.default,
    },
  });

export default AnalyticsScreen;
