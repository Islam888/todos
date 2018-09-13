import React, { Component } from 'react';
import {
     FlatList,
     Text,
     StyleSheet
} from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button'
import { getEvents } from './api.js'

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
      }
})

class EventList extends Component {

    state = {
        events : []
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(e => ({
                    ...e,
                    timer: Date.now()
                }))
            })
        }, 1000)

        getEvents().then(events => ({
            events,
        }))

    handleAddEvent = () => {
        this.props.navigation.navigate('form')
    }
    
    render() {
        return [
            <FlatList
            style={styles.list}
            data={this.state.events}
            renderItem={({ item }) => <EventCard event={item} />}
            keyExtractor={item => item.id}
            />,
            <ActionButton 
            key='fab'
            onPress={this.handleAddEvent}
            buttonColor='rgba(231, 76, 60, 1)'
            />
        ]
    }
}

export default EventList;