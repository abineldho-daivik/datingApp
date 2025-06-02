import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    image: require('../assets/onboarding2.jpg'),
    leftImage: require('../assets/onb1.jpg'),
    rightImage: require('../assets/onboarding3.jpg'),
    title: 'Dating',
    description: 'Users can start swiping process to ensure you get match.',
  },
  {
    key: '2',
    image: require('../assets/onboarding3.jpg'),
    leftImage: require('../assets/onboarding2.jpg'),
    rightImage: require('../assets/onb1.jpg'),
    title: 'Matching',
    description: 'We match you with people that share your interests.',
  },
  {
    key: '3',
    image: require('../assets/onb1.jpg'),
    leftImage: require('../assets/onboarding3.jpg'),
    rightImage: require('../assets/onboarding2.jpg'),
    title: 'Chats',
    description: 'Start conversations with people you like.',
  },
];

const HomeScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= slides.length) {
        nextIndex = 0;
      }
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 1500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={slides}
          ref={flatListRef}
          keyExtractor={(item) => item.key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <View style={styles.imageStack}>
                <View style={styles.leftImageContainer}>
                  <Image source={item.leftImage} style={styles.sideImage} />
                </View>
                
                <View style={styles.mainImageContainer}>
                  <Image source={item.image} style={styles.mainImage} />
                </View>
                
                <View style={styles.rightImageContainer}>
                  <Image source={item.rightImage} style={styles.sideImage} />
                </View>
              </View>
              
              <Text style={styles.heading}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />

        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.signInText} onPress={() => navigation.navigate('SignIn')}>
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 32,
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  imageStack: {
    height: 420,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    position: 'relative',
  },
  mainImageContainer: {
    width: 260,
    height: 380,
    borderRadius: 24,
    overflow: 'hidden',
    zIndex: 3,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  leftImageContainer: {
    position: 'absolute',
    left: -20,
    top: 40,
    width: 140,
    height: 320,
    borderRadius: 20,
    overflow: 'hidden',
    zIndex: 1,
    opacity: 0.7,
  },
  rightImageContainer: {
    position: 'absolute',
    right: -20,
    top: 40,
    width: 140,
    height: 320,
    borderRadius: 20,
    overflow: 'hidden',
    zIndex: 1,
    opacity: 0.7,
  },
  sideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FF4B6E',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 32,
    lineHeight: 24,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: '#FF4B6E',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#FF4B6E',
    paddingVertical: 18,
    borderRadius: 28,
    width: '85%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#FF4B6E',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  footerText: {
    fontSize: 16,
    color: '#666',
  },
  signInText: {
    color: '#FF4B6E',
    fontWeight: '700',
  },
});

export default HomeScreen;
