import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomePage from './HomePage';
import BottomNavigation from './BottomNavigation';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'portfolio':
        return null;
      case 'invest':
        return null;
      case 'goals':
        return null;
      case 'profile':
        return null;
      default:
        return <HomePage />;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      <BottomNavigation activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
});

export default App;