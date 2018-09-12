import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    TextInput,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
      },
      text: {
        height: 40,
        // borderWidth: 1,
        margin: 0,
        marginLeft: 7,
        marginRight: 7,
        paddingLeft: 10,
      },
      borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 0.5,
      },
      button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
      },
})

class EventForm extends Component {
    state = {
        title: ''
    }

    handleAddPress = () => {
        console.log(this.state.title)
        this.props.navigation.navigate('list')
    }
    handleChangeTitle = (text) => {
        this.setState({
            title: text
        })
    }

    render() {
        return(
            <View style={{
                flex:1
            }}>
                <View style={styles.fieldContainer}>
                    <TextInput
                        style={styles.text} 
                        placeholder={'Event Title'}
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handleChangeTitle}
                    />
                </View>
                <TouchableHighlight
                    onPress={this.handleAddPress}
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >Add</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default EventForm