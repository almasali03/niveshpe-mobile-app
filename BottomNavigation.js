import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const BottomNavigation = ({ activeTab = 'home', onTabPress }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home', IconComponent: Ionicons },
    { id: 'portfolio', label: 'Portfolio', icon: 'pie-chart', IconComponent: Feather },
    { id: 'invest', label: 'Invest', icon: 'add-circle', IconComponent: MaterialIcons },
    { id: 'goals', label: 'Goals', icon: 'flag', IconComponent: Feather },
    { id: 'profile', label: 'Profile', icon: 'person-outline', IconComponent: Ionicons },
  ];

  return (
    <View style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB',
      paddingBottom: 20,
      paddingTop: 8,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 10,
    }}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const IconComp = tab.IconComponent;
        const isInvestTab = tab.id === 'invest';
        
        return (
          <TouchableOpacity
            key={tab.id}
            onPress={() => onTabPress && onTabPress(tab.id)}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 8,
            }}
          >
            {isInvestTab ? (
              <View style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: '#2563EB',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 4,
                shadowColor: '#2563EB',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 5,
              }}>
                <IconComp
                  name={tab.icon}
                  size={28}
                  color="#FFFFFF"
                />
              </View>
            ) : (
              <>
                <View style={{
                  position: 'relative',
                  padding: 4,
                }}>
                  <IconComp
                    name={tab.icon}
                    size={24}
                    color={isActive ? '#2563EB' : '#6B7280'}
                  />
                  {isActive && (
                    <View style={{
                      position: 'absolute',
                      top: -4,
                      left: '50%',
                      marginLeft: -2,
                      width: 4,
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: '#2563EB',
                    }} />
                  )}
                </View>
                <Text style={{
                  fontSize: 11,
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? '#2563EB' : '#6B7280',
                  marginTop: 4,
                }}>
                  {tab.label}
                </Text>
              </>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;