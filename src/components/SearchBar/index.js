import React, {useState, forwardRef} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import SearchSVG from '../../../assets/svg/Search';
import {compose} from '../../helpers/stylecompose';

const SearchBar = forwardRef(
  ({placeholder, containerStyle, onFilter, onHighlight}, refTextInput) => {
    const [value, setValue] = useState('');

    const handleChangeText = (text) => {
      setValue(text);
      onHighlight(text);
      onFilter(text);
    };

    return (
      <View style={compose(styles.wrapper, containerStyle)}>
        <View style={styles.searchBar}>
          <SearchSVG style={styles.searchBar__icon} />

          <TextInput
            ref={refTextInput}
            value={value}
            numberOfLines={1}
            placeholder={placeholder || 'Введите текст...'}
            style={styles.searchBar__input}
            onChangeText={handleChangeText}
          />
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 1},
    elevation: 5,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingLeft: 13,
    paddingRight: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#ababab',
  },

  searchBar__icon: {
    marginRight: 20,
  },

  searchBar__input: {
    flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: '#394D72',
  },
});

export default SearchBar;
