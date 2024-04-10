import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from './CustomHeader'

const Bai1 = () => {
  return (
    <View style={{backgroundColor: 'gray'}}>
      <CustomHeader
        title='Header'
        leftIconSize={30}
        iconLeft='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycrPj0V3Ke8cSh-PqgkLYwkGrVWfHHMYgvg&usqp=CAU'
        rightIconSize={38}
        iconRight='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLxV4HFZqN3RpN1rWf_hG3o1X5Ue9KxxllQ&usqp=CAU' />
      <CustomHeader
        title='Trang Chủ'
        leftIconSize={30}
        iconLeft='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycrPj0V3Ke8cSh-PqgkLYwkGrVWfHHMYgvg&usqp=CAU' />
      <CustomHeader
        leftIconSize={30}
        iconLeft='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycrPj0V3Ke8cSh-PqgkLYwkGrVWfHHMYgvg&usqp=CAU' />
    </View>
  )
}

export default Bai1

const styles = StyleSheet.create({})