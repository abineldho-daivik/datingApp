import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function DiscoverScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Discover</Text>
            <Text style={styles.location}>Chicago, IL</Text>
          </View>
          <TouchableOpacity>
            <Feather name="sliders" size={22} color="black" />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.card}>
          <Image
            source={require('../assets/girl3.jpg')}
            style={styles.profileImage}
          />
          <View style={styles.distanceBadge}>
            <Text style={styles.distanceText}>4 km</Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.name}>Jessica Parker, 23</Text>
            <Text style={styles.occupation}>Professional model</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="close" size={26} color="#ff935c" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeBtn}>
            <Ionicons name="heart" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="star" size={26} color="#8c52ff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  location: {
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  distanceBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  distanceText: {
    color: '#fff',
    fontSize: 12,
  },
  cardInfo: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  name: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  occupation: {
    fontSize: 14,
    color: '#ccc',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 42,
    alignItems: 'center',
  },
  iconBtn: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 40,
    elevation: 4,
  },
  likeBtn: {
    backgroundColor: '#ff4e7e',
    padding: 22,
    borderRadius: 50,
    elevation: 5,
  },
});
