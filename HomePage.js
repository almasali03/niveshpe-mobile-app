import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomePage = () => {
  const portfolioData = {
    totalValue: 254783.47,
    dayChange: 1524.32,
    dayChangePercent: 0.60,
    invested: 180000,
    current: 254783.47,
    returns: 74783.47,
    returnsPercent: 41.55,
  };

  const sipInvestments = [
    {
      id: 1,
      name: 'ICICI Prudential Bluechip Fund',
      type: 'Large Cap',
      amount: 5000,
      date: '5th',
      returns: 18.2,
      currentValue: 68420,
      invested: 60000,
    },
    {
      id: 2,
      name: 'Axis Midcap Fund',
      type: 'Mid Cap',
      amount: 3000,
      date: '10th',
      returns: 24.6,
      currentValue: 44760,
      invested: 36000,
    },
    {
      id: 3,
      name: 'SBI Small Cap Fund',
      type: 'Small Cap',
      amount: 2000,
      date: '15th',
      returns: 32.8,
      currentValue: 31920,
      invested: 24000,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F7FA' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['rgba(37, 99, 235, 0.05)', 'rgba(16, 185, 129, 0.03)']}
          style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 30 }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <View>
              <Text style={{ fontSize: 14, color: '#6B7280', marginBottom: 4 }}>Welcome back</Text>
              <Text style={{ fontSize: 24, fontWeight: '700', color: '#1F2937' }}>Rajesh Kumar</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
                <Ionicons name="search" size={20} color="#1F2937" />
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
                <Ionicons name="notifications-outline" size={20} color="#1F2937" />
                <View style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: 4, backgroundColor: '#F59E0B' }} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Portfolio Card */}
          <LinearGradient
            colors={['#2563EB', '#10B981']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 20, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15, elevation: 5 }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgba(255, 255, 255, 0.9)' }}>Total Portfolio Value</Text>
              <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Feather name="trending-up" size={14} color="#FFFFFF" />
                <Text style={{ fontSize: 12, fontWeight: '600', color: '#FFFFFF' }}>Live</Text>
              </View>
            </View>
            
            <Text style={{ fontSize: 36, fontWeight: '700', color: '#FFFFFF', marginBottom: 8 }}>
              ₹{portfolioData.totalValue.toLocaleString('en-IN')}
            </Text>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Feather name="trending-up" size={16} color="#34D399" />
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#34D399' }}>
                +₹{portfolioData.dayChange.toLocaleString('en-IN')} ({portfolioData.dayChangePercent}%)
              </Text>
              <Text style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.7)' }}>today</Text>
            </View>
          </LinearGradient>
        </LinearGradient>

        {/* Stats Cards */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: -10, gap: 12 }}>
          <View style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <View style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: 'rgba(37, 99, 235, 0.1)', justifyContent: 'center', alignItems: 'center' }}>
                <MaterialIcons name="account-balance-wallet" size={18} color="#2563EB" />
              </View>
              <Text style={{ fontSize: 12, color: '#6B7280', fontWeight: '500' }}>Invested</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '700', color: '#1F2937' }}>
              ₹{(portfolioData.invested / 1000).toFixed(1)}K
            </Text>
          </View>

          <View style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <View style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: 'rgba(16, 185, 129, 0.1)', justifyContent: 'center', alignItems: 'center' }}>
                <Feather name="trending-up" size={18} color="#10B981" />
              </View>
              <Text style={{ fontSize: 12, color: '#6B7280', fontWeight: '500' }}>Returns</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '700', color: '#10B981' }}>
              +{portfolioData.returnsPercent}%
            </Text>
          </View>
        </View>

        {/* SIP Investments */}
        <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: '#1F2937' }}>Your SIP Investments</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#2563EB' }}>See All</Text>
            </TouchableOpacity>
          </View>

          {sipInvestments.map((sip) => (
            <TouchableOpacity
              key={sip.id}
              style={{ backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: '#1F2937', marginBottom: 4 }}>
                    {sip.name}
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <View style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 }}>
                      <Text style={{ fontSize: 11, fontWeight: '600', color: '#2563EB' }}>{sip.type}</Text>
                    </View>
                    <Text style={{ fontSize: 12, color: '#6B7280' }}>₹{sip.amount.toLocaleString('en-IN')}/month</Text>
                  </View>
                  
                  <View style={{ flexDirection: 'row', gap: 20 }}>
                    <View>
                      <Text style={{ fontSize: 11, color: '#6B7280', marginBottom: 2 }}>Current Value</Text>
                      <Text style={{ fontSize: 14, fontWeight: '600', color: '#1F2937' }}>
                        ₹{sip.currentValue.toLocaleString('en-IN')}
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 11, color: '#6B7280', marginBottom: 2 }}>Returns</Text>
                      <Text style={{ fontSize: 14, fontWeight: '600', color: '#10B981' }}>
                        +{sip.returns}%
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ alignItems: 'flex-end' }}>
                  <View style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginBottom: 8 }}>
                    <Text style={{ fontSize: 11, fontWeight: '600', color: '#F59E0B' }}>Next: {sip.date}</Text>
                  </View>
                  <TouchableOpacity style={{ padding: 4 }}>
                    <Feather name="chevron-right" size={20} color="#6B7280" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={{ paddingHorizontal: 20, marginTop: 24, marginBottom: 100 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#1F2937', marginBottom: 16 }}>Quick Actions</Text>
          
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            <TouchableOpacity style={{ width: (width - 52) / 2, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
              <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: 'rgba(37, 99, 235, 0.1)', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
                <MaterialIcons name="add-circle" size={24} color="#2563EB" />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#1F2937' }}>Start New SIP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: (width - 52) / 2, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
              <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: 'rgba(16, 185, 129, 0.1)', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
                <MaterialIcons name="account-balance" size={24} color="#10B981" />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#1F2937' }}>Add Funds</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: (width - 52) / 2, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
              <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: 'rgba(245, 158, 11, 0.1)', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
                <MaterialIcons name="history" size={24} color="#F59E0B" />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#1F2937' }}>Transaction History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: (width - 52) / 2, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 }}>
              <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: 'rgba(139, 92, 246, 0.1)', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
                <MaterialIcons name="assessment" size={24} color="#8B5CF6" />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#1F2937' }}>Reports</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;