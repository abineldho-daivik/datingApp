// src/screens/DiscoverScreen.js

import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import Swiper from 'react-native-deck-swiper';
import profiles from '../screens/profilepeoples.js'; 
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


export default function DiscoverScreen({ navigation }) {
  const swiperRef = useRef(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Bar */}
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

        {/* Swiper */}
        <View style={styles.swiperContainer}>
          <Swiper
            ref={swiperRef}
            cards={profiles}
            stackSize={3}
            infinite={false}
            backgroundColor="transparent"
            verticalSwipe={false}
            onSwipedAll={() => console.log('All swiped')}
            cardStyle={styles.cardStyle}
            containerStyle={styles.swiper}
            renderCard={(card) => {
              if (!card) {
                return (
                  <View style={[styles.card, { justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={{ color: 'white', fontSize: 18 }}>No more profiles</Text>
                  </View>
                );
              }

              return (
                <View style={styles.card}>
                  <Image source={card.image} style={styles.profileImage} />
                  <View style={styles.distanceBadge}>
                    <Text style={styles.distanceText}>{card.distance}</Text>
                  </View>
                  <View style={styles.cardInfo}>
                    <Text style={styles.name}>
                      {card.name}, {card.age}
                    </Text>
                    <Text style={styles.occupation}>{card.occupation}</Text>
                  </View>
                </View>
              );
            }}
            overlayLabels={{
              left: {
                title: 'NOPE',
                style: {
                  label: {
                    backgroundColor: 'red',
                    color: 'white',
                    fontSize: 24,
                    padding: 10,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 40,
                    marginLeft: -20,
                  },
                },
              },
              right: {
                title: 'LIKE',
                style: {
                  label: {
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    fontSize: 24,
                    padding: 10,
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: 20,
                  },
                },
              },
            }}
          />
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => swiperRef.current?.swipeLeft()}
          >
            <Ionicons name="close" size={26} color="#ff935c" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.likeBtn}
            onPress={() => swiperRef.current?.swipeRight()}
          >
            <Ionicons name="heart" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => {
              // Optional super-like logic
            }}
          >
            <Ionicons name="star" size={26} color="#8c52ff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const CARD_WIDTH = SCREEN_WIDTH - 70;
const CARD_HEIGHT = SCREEN_HEIGHT - 340;

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
  swiperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiper: {
    backgroundColor: 'transparent',
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  card: {
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 10,
    bottom: 35,
    overflow: 'hidden',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    marginVertical: 40,
    alignItems: 'center',
    bottom: 20,
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
