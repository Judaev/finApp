import React, { FunctionComponent, memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import paddings from '../../../core/constants/paddings';
import { Theme } from '../../../core/types/theme';
import useStyles from '../../../hooks/useStyles';

const BankingCard: FunctionComponent = memo(function BankingCard() {
  const appStyles = useStyles(styleSheet);

  return (
    <View style={appStyles.card}>
      <View style={appStyles.innerContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={appStyles.categoriesCard}>Your Card</Text>
            <Text style={{ color: 'white' }}>3685 5934 0893 3984</Text>
          </View>
          <View>
            <Text style={appStyles.balanceStyles}>Balance</Text>
            <Text style={appStyles.amount}>$12,864</Text>
          </View>
        </View>

        <View style={appStyles.cashFlowContainer}></View>
      </View>
    </View>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    card: {
      marginTop: paddings.large,
      height: 155,
      borderWidth: 2,
      borderRadius: 35,
      borderColor: theme.primary,
      backgroundColor: theme.primary,
    },
    innerContainer: {
      marginVertical: paddings.large,
      marginHorizontal: paddings.large * 2,
    },
    categoriesCard: {
      color: theme.textPrimary,
    },
    balanceStyles: {
      textAlign: 'right',
      color: theme.textPrimary,
    },
    amount: {
      fontSize: 24,
      fontWeight: '700',
      color: theme.textPrimary,
      textShadowColor: '#3d3d3d',
      textShadowOffset: { width: 2, height: 3 },
      textShadowRadius: 3,
    },
    cashFlowContainer: {
      flexDirection: 'row',
      marginTop: paddings.small,
    },
    willSpendText: {
      marginRight: paddings.default,
      fontSize: 16,
      fontWeight: '600',
      color: theme.error,
    },
    earnedText: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.success,
    },
  });

export default BankingCard;
