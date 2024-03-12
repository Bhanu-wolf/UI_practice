/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    outerContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        // borderWidth: 3,

    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // borderWidth: 3,
        padding: 30,
        paddingHorizontal: 20
    },
    headerIconContainer: {
        height: 40,
        width: 40,
    },
    headerIcon: {
        height: 40,
        width: 40,
    },
    hamburger: {
        borderRadius: 8
    },
    addToCart: {
        borderRadius: 15
    },
    offerContainer: {
        // borderWidth: 3,
        padding: 5
    },
    discover: {
        color: 'green',
        fontSize: 25,
        fontWeight: "600",
        marginLeft: 20,
        marginBottom: 5

    },
    placeholder: {
        color: 'grey',
        fontSize: 15,
        fontWeight: "300",
        marginLeft: 20
    },
    sortBy:
    {   // marginRight: 20,
        fontSize: 15,
        color: 'green',
    },
    downArrowContainer: {
        height: 20,
        width: 20,
        alignSelf: "flex-end",
    },
    downArrow: {
        height: 20, width: 20,
    },
    offerImageContainer: { paddingHorizontal: 10, alignItems: "center", marginTop: 10 },
    offerImage: {
        width: '90%',
        height: 200,
        borderRadius: 20
    },
    popularProductContainer: {
        // borderWidth: 2,

    },
    popularProductSectionContainer: {
        flexDirection: 'row', justifyContent: "space-between"
    },
    popularProductFirstSection: {
        // borderWidth: 2,
        marginLeft: 20,

    },
    popularProductSecondSection: {
        // borderWidth: 3,
        marginRight: 20,

    },
    popularProductFirstSectionImageContainer: {
        // borderWidth:2,
        height: 250,
        width: 150,
        borderRadius: 15,
        marginBottom: 5,
        // backgroundColor:'pink'
        backgroundColor: 'white',
        elevation: 7
        
    },
    firstSectionImage: {
        height: 250,
        width: 150,
        borderRadius: 15,
    },

    popularProductSecondSectionImageContainer: {
        // borderWidth:2,
        height: 180,
        width: 150,
        borderRadius: 15,
        backgroundColor: 'white',
        elevation: 7, 
        marginBottom: 5,
        
    },
    secondSectionImage: {
        height: 180,
        width: 150,
        borderRadius: 15,
    },
    flowerName: { fontSize: 15, color: 'green' },
    footer: {
        height: 60,
        width: '100%',
        // borderWidth:1,
        backgroundColor:'#F0EAD6',
        justifyContent:"center",
        elevation:20
        
    },
    bottomTabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
       
        paddingBottom: 5,
       borderRadius:20,
        height: 50,
        backgroundColor:'white',
        elevation:30
      },
      tab: {
        flex: 1,
        alignItems: 'center',
      },



})
export default styles;