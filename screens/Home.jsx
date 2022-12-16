import {
    ActivityIndicator,
    Alert,
    FlatList,
    RefreshControl,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {Post} from '../components/Post';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Loading} from '../components/Loading';


export const HomeScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState()

    const fetchPosts = () => {
        setIsLoading(true)
        axios.get('https://639c5df616d1763ab147a326.mockapi.io/posts')
            .then(({data}) => setItems(data)).catch(err => {
            console.log(err)
            Alert.alert('Ошибка', 'Ошибка при получении статей')
        }).finally(() => {
            setIsLoading(false)
        })
    }

    useEffect(fetchPosts, [])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                data={items}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FullPost', {
                        id: item.id,
                        title: item.title,
                        imageUrl: item.imageUrl,
                        text: item.text
                    })}>
                        <Post title={item.title} createdAt={item.createdAt}
                              imageUrl={item.imageUrl}/>
                    </TouchableOpacity>)}/>
        </View>
    );
}


