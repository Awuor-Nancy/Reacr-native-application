import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import axios from 'axios';
const Item = ({user, tag}) => {
  return (
    <View style={styles.item}>
      <Text>{user}</Text>
      <Text>{tag}</Text>
      <Text>Music Application</Text>
    </View>
  )
}
​
const renderItem = ({item}) => <Item user={item.user} tag={item.tag}/>
const App = ({navigation}) => {
   const [item, setItems] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [searchValue, setSearchValue] = useState("");
   const [name, setName] = useState([]);
   const [username, setUserName] = useState([]);
​
   const fetchData = async () => {
     const {data} = await axios.all([
       axios.get('https://api.mixcloud.com/search/?q=claud&type=user'),
       axios.get('https://api.mixcloud.com/claudsanto/'),
     ]).then(
       axios.spread((user, tag) => {
         let datum = user.data.concat(tag.data);
         console.log(datum);
         setItems(datum);
       }),
     ).then(errors => {
       console.error(errors);
     });
  };
​
  useEffect(() => {
    setTitle(json.name);
    setDescription(json.username);
    fetchData();
  }, []);
​
  const searchFunction = (text) => {
    const updatedData = item.filter((item) => {
      return updatedData;
    });
    setItems({data: updatedData, searchValue: text});
  }
​
return (
  <View style={styles.container}>
     <SearchBar
       placeholder='Search Here...'
       lightTheme
       round
       value={searchValue}
       onChangeText={(text) => searchFunction(text)}
       autoCorrect={false}
     />
     <FlatList
   
        data={data}
        keyExtractor={({name})=> name}
        readerItem={({item})=>
        <Text>

        {item.name}
        {item.username}
        {item.thumbnail}

        </Text>
        
        }
​
     />
     <Text>I am learning</Text>
     <Text>{username}</Text>
  </View>
)
}
export default App;
​
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
  },
  item: {
    backgroundColor: '#f5f520',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
