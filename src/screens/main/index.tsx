import React, { FunctionComponent, memo } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../components/icon/Icon';
import IconNames from '../../components/icon/iconNames';
import paddings from '../../core/constants/paddings';
import { Theme } from '../../core/types/theme';
import useStyles from '../../hooks/useStyles';
import useTheme from '../../hooks/useTheme';
import AddingOperation from './components/AddingOperation';
import ProfileHeader from './components/ProfileHeader';

const MainScreen: FunctionComponent = memo(function MainScreen() {
  const theme = useTheme();
  const appStyles = useStyles(styleSheet);

  return (
    <ScrollView style={appStyles.container}>
      <ProfileHeader />

      <View
        style={{
          backgroundColor: theme.primary,
          marginHorizontal: -20,
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginTop: 12,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 26, fontWeight: '700', color: 'white' }}>
              Доступно на сегодня
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  marginRight: 20,
                  fontSize: 22,
                  color: 'white',
                  fontWeight: '600',
                }}
              >
                100 000
              </Text>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: theme.background,
                    height: 20,
                    borderRadius: 8,
                    paddingHorizontal: 5,
                  }}
                >
                  <Text
                    style={{
                      color: theme.success,
                      fontWeight: '600',
                    }}
                  >
                    Положительный денежный поток
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: 'row',
            marginHorizontal: -20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              borderRadius: 8,
              backgroundColor: theme.background,
              paddingHorizontal: 10,
              paddingVertical: 12,
              marginRight: 8,
            }}
          >
            <Text>Траты за месяц</Text>
            <Text>100 000</Text>
          </View>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: theme.background,
              paddingHorizontal: 10,
              paddingVertical: 12,
              marginRight: 8,
            }}
          >
            <Text>Траты за месяц</Text>
            <Text>100 000</Text>
          </View>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: theme.background,
              paddingHorizontal: 10,
              paddingVertical: 12,
              marginRight: 8,
            }}
          >
            <Text>Траты за месяц</Text>
            <Text>100 000</Text>
          </View>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: theme.background,
              paddingHorizontal: 10,
              paddingVertical: 12,
              marginRight: 40,
            }}
          >
            <Text>Траты за месяц</Text>
            <Text>100 000</Text>
          </View>
        </ScrollView>
      </View>

      <View style={{ marginTop: paddings.default }}>
        <AddingOperation />
      </View>

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 22, fontWeight: '700' }}>Бюджет</Text>
            <Icon name={IconNames.arrowRight} size={20} />
          </View>
        </TouchableOpacity>

        <View
          style={{
            borderRadius: 16,
            height: 130,
            marginTop: 12,
            backgroundColor: theme.background,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
            <View>
              <Text>Категория</Text>
              <Text>-100 000</Text>
            </View>
            <Icon name={IconNames.balls} />
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: 'black', marginTop: 12 }} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: 'row', marginHorizontal: -20, paddingHorizontal: 20 }}
            contentContainerStyle={{ alignItems: 'center' }}
          >
            <View
              style={{
                borderRadius: 8,
                backgroundColor: theme.warn,
                paddingHorizontal: 12,
                paddingVertical: 8,
                marginRight: 6,
              }}
            >
              <Text>70% Еда</Text>
            </View>
            <View
              style={{
                borderRadius: 8,
                backgroundColor: theme.warn,
                paddingHorizontal: 12,
                paddingVertical: 8,
                marginRight: 6,
              }}
            >
              <Text>70% Еда</Text>
            </View>
            <View
              style={{
                borderRadius: 8,
                backgroundColor: theme.warn,
                paddingHorizontal: 12,
                paddingVertical: 8,
                marginRight: 6,
              }}
            >
              <Text>70% Еда</Text>
            </View>
            <View
              style={{
                borderRadius: 8,
                backgroundColor: theme.warn,
                paddingHorizontal: 12,
                paddingVertical: 8,
                marginRight: 40,
              }}
            >
              <Text>70% Еда</Text>
            </View>
          </ScrollView>
        </View>
      </View>

      <View style={{ marginTop: 20, marginBottom: 200 }}>
        <TouchableOpacity>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 22, fontWeight: '700' }}>Доходы и расходы</Text>
            <Icon name={IconNames.arrowRight} size={20} />
          </View>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: theme.background,
            marginTop: 12,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderRadius: 16,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 12,
            }}
          >
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 8,
                backgroundColor: '#83c4fa',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>S</Text>
            </View>
            <Text style={{ color: theme.success, fontWeight: '700' }}>+32.5</Text>
          </View>

          <View>
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 8,
                backgroundColor: '#83c4fa',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>S</Text>
            </View>
          </View>
          <Text style={{ color: theme.success, fontWeight: '700' }}>+32.5</Text>

          <View>
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 8,
                backgroundColor: '#83c4fa',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text>S</Text>
            </View>
          </View>
          <Text style={{ color: theme.success, fontWeight: '700' }}>+32.5</Text>
        </View>
      </View>
    </ScrollView>
  );
});

const styleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      backgroundColor: theme.backgroundSecondary,
    },
  });

export default MainScreen;
