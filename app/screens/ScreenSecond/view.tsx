/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import { IMAGES } from '../../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const ScreenSecondView: React.FC = () => {
  const dataOne = [{
    id: '1',
    name: "Name One",
  },
  {
    id: '2',
    name: "Name One",
  }, {
    id: '3',
    name: "Name One",
  }, {
    id: '4',
    name: "Name One",
  }]

  const dataSecond = [
    { id: '1', name: 'NameTwo' },
    { id: '2', name: 'NameTwo' },
    { id: '3', name: 'NameTwo' },
    { id: '4', name: 'NameTwo' }]
  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View style={styles.headerIconContainer}>
            <Image source={IMAGES.HAMBURGER} resizeMode="contain" style={[styles.headerIcon, styles.hamburger]} />
          </View>
          <View style={styles.headerIconContainer}>
            <Image source={IMAGES.ADD_TO_CART} resizeMode="contain" style={[styles.headerIcon, styles.addToCart]} />
          </View>
        </View>
        {/* OfferSection */}
        <View style={styles.offerContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <View>
              <Text style={styles.discover}>Discover</Text>
              <Text style={styles.placeholder}>Explore our Awesome Plants!</Text>
            </View>
            <View
              style={{ alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', marginRight: 10 }}>
              <Text style={styles.sortBy}>Sort By</Text>
              <View style={styles.downArrowContainer}>
                <Image source={IMAGES.DOWNARROWGREEN}
                  style={styles.downArrow} />
              </View>
            </View>

          </View>
          <View style={styles.offerImageContainer}>
            <Image source={IMAGES.NEWYEARSALE} style={styles.offerImage} />
          </View>
        </View>
        {/* Product section*/}
        <View style={styles.popularProductContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
            <Text style={styles.discover}>Popular</Text>
            <Text style={[styles.sortBy, { alignSelf: 'center', marginRight: 20 }]}>see all</Text>
          </View>

          <View style={styles.popularProductSectionContainer}>
            <View style={styles.popularProductFirstSection}>
              <FlatList
                data={dataOne}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <View style={styles.popularProductFirstSectionImageContainer}>
                        <Image source={IMAGES.PLANTIMAGE}
                          style={styles.firstSectionImage}
                          resizeMode='cover'
                        />
                      </View>
                      <View style={{ marginBottom: 30 }}>

                        <Text style={styles.flowerName}>{item.name}</Text>
                      </View>
                    </View>

                  )
                }}
              />
            </View>
            <View style={styles.popularProductSecondSection}>
              <FlatList
                data={dataSecond}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <View style={styles.popularProductSecondSectionImageContainer}>
                        <Image source={IMAGES.PLANTIMAGE}
                          style={styles.secondSectionImage}
                        />
                      </View>
                      <View style={{ marginBottom: 30 }}>

                        <Text style={styles.flowerName}>{item.name}</Text>
                      </View>
                    </View>

                  )
                }}
              />
            </View>
          </View>


        </View>
      </ScrollView>
      <View style={styles.footer}>
      <View style={styles.bottomTabContainer}>
      <TouchableOpacity style={styles.tab}>
        <AntDesign name="home" size={24} color="green" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <AntDesign name="search1" size={24} color="green" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <MaterialIcons name="favorite-border" size={24} color="green" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <MaterialCommunityIcons name="account" size={24} color="green" />
      </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  );
};

export default ScreenSecondView;
