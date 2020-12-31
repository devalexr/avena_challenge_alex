import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { GUI_colors, GUI_styles } from '../../../styles/StylesGlobal';

export default class ELEFoodSlide extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categorySelected: 'Breakfast',
    }
  }

  render() {
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          marginVertical: 10
        }}>
          {this._categoryItem('Breakfast', this.state.categorySelected == 'Breakfast')}
          {this._categoryItem('Foods', this.state.categorySelected == 'Foods')}
          {this._categoryItem('Dinner', this.state.categorySelected == 'Dinner')}
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={[
              {
                title: 'Cereal',
                img: require('../../../../assets/img/screens/cereal.png')
              },
              {
                title: 'Yogurt with Fruits',
                img: require('../../../../assets/img/screens/yogurt.png')
              },
              {
                title: 'Banana Sandwich',
                img: require('../../../../assets/img/screens/sandwich.png')
              },
            ]}
            sliderWidth={360}
            itemWidth={230}
            layout={'default'}
            renderItem={this._renderItem}
            firstItem={1} //fix this on iOS
          />
        </View>
      </View>

    );
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={[{
        height: 370,
        margin: 5,
      }]}>
        <View style={[GUI_styles.shadow, {
          backgroundColor: GUI_colors.COLOR_GRAY_LIGHT,
          width: 210,
          borderRadius: 20,
        }]}>
          <TouchableWithoutFeedback onPress={() => { }}>
            <Image
              style={{
                width: '100%',
                height: 320,
                borderRadius: 20,
              }}
              onPress={() => {
                alert(item.title)
              }}
              source={item.img}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={{
          height: 70,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={[GUI_styles.textStrong, { textAlign: 'center' }]}>{item.title}</Text>
        </View>
      </View>
    );
  }

  _categoryItem(title, active) {
    return (
      <TouchableOpacity 
      onPress={()=>{
        this.setState({
          categorySelected : title,
        });
      }}
      style={{
        backgroundColor: active ? GUI_colors.COLOR_GREEN_STRONG : GUI_colors.COLOR_GRAY_LIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flex: 1
      }}>
        <Text style={[GUI_styles.text, { fontSize: 14, color: active ? 'white' : GUI_colors.COLOR_FONT_DEFAULT }]}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  }
}