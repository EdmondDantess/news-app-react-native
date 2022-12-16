import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native'
import {ActivityIndicator, Alert, Text, View} from 'react-native';
import axios from 'axios';
import {Loading} from '../components/Loading';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

export const FullPostScreen = ({route, navigation}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const {title, id, imageUrl, text} = route.params

    useEffect(() => {
        navigation.setOptions({
title
        })
    }, [])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <View style={{padding: 20}}>
            <PostImage source={{uri: imageUrl}}/>
            <PostText>
                {text}
            </PostText>
        </View>
    );
};
