import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import { SharedElementTransition } from 'react-native-navigation';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {
        // console.log('render');
        const { AlbumCover, AlbumName, MomentDate, AlbumID, canRepost } = this.props.AllItems;
        const { text } = styles;
        return (
            <ScrollView style={{ flex: 1 }}>
                <SharedElementTransition
                    sharedElementId={`sharedImageId${AlbumID}`}
                    showDuration={500}
                    hideDuration={400}
                    showInterpolation={{
                        type: 'linear',
                        easing: 'FastOutSlowIn'
                    }}
                    hideInterpolation={{
                        type: 'linear',
                        easing: 'FastOutSlowIn'
                    }}
                >
                    <Image style={{ height: 300, width: '100%' }} source={{ uri: AlbumCover }} />
                </SharedElementTransition>
                <Text style={text}>
                    {lorem} {lorem} {lorem}
                    {lorem} {lorem} {lorem}
                </Text>
                <Text style={text} />
                <Text style={text}> {AlbumName} </Text>
                <Text style={text}> {MomentDate} </Text>
                <Text style={text}> {canRepost} </Text>
            </ScrollView>
        );
    }
}

const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue tempor mi aliquet vulputate. Suspendisse nec elementum libero, sit amet finibus justo. Nam gravida purus sit amet accumsan iaculis. Quisque cursus iaculis odio, vel tristique ligula ornare consectetur. Vestibulum est lacus, efficitur vitae gravida nec, porta sed elit. Pellentesque eleifend, mauris et scelerisque tincidunt, turpis ipsum cursus nisi, id tincidunt orci leo ac enim. Phasellus nec orci sed lectus luctus pulvinar. Cras at neque quis est accumsan viverra. Fusce tempor fermentum ante, eu lacinia quam. Maecenas mollis dapibus aliquam. Suspendisse potenti. Cras a ornare justo. Aliquam rutrum hendrerit scelerisque. Etiam sodales pulvinar enim nec hendrerit.';

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 13
    }
});

export default Screen;
