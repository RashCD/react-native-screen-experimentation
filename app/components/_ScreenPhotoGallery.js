/* eslint no-underscore-dangle: 0 */

import React from 'react';
import { View, Animated, ScrollView } from 'react-native';

import PropTypes from 'prop-types';

import Transition from './_ScreenTransition';
import DetailScreen from '../screens/ScreenTransitionTest2';


class PhotoGalleryPhoto extends React.Component {
  
  static contextTypes = {
    onImageRef: PropTypes.func
  };

  state = {
    opacity: 1
  };

  setOpacity = opacity => {
    this.setState({ opacity });
  };

  render() {
    const { style, photo } = this.props;
    const { opacity } = this.state;
    return (
      <Animated.Image
        ref={i => {
          this.context.onImageRef(photo, i, this.setOpacity);
        }}
        style={[
          style,
          {
            opacity
          }
        ]}
        source={photo.source}
      />
    );
  }
}

export default class PhotoGallery extends React.Component {
  static Photo = PhotoGalleryPhoto;

  static childContextTypes = {
    onImageRef: PropTypes.func
  };

  state = {
    photo: null,
    openProgress: new Animated.Value(0),
    isAnimating: false
  };

  getChildContext() {
    return { onImageRef: this._onImageRef };
  }

  _images = {};

  _imageOpacitySetters = {};

  _onImageRef = (photo, imageRef, setOpacity) => {
    this._images[photo.id] = imageRef;
    this._imageOpacitySetters[photo.id] = setOpacity;
  };

  open = photo => {
    this._imageOpacitySetters[photo.id](
      this.state.openProgress.interpolate({
        inputRange: [0.005, 0.01],
        outputRange: [1, 0]
      })
    );
    this.setState({ photo, isAnimating: true }, () => {
      Animated.timing(this.state.openProgress, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start(() => {
        this.setState({ isAnimating: false });
      });
    });
  };

  close = photoId => {
    this.setState({ photo: null, isAnimating: true }, () => {
      Animated.timing(this.state.openProgress, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start(() => {
        this._imageOpacitySetters[photoId](1);
        this.setState({ isAnimating: false });
      });
    });
  };

  render() {
    const { photo, openProgress, isAnimating } = this.state;
    return (
      <ScrollView style={{ flex: 1 }}>
        {this.props.renderContent({ onPhotoOpen: this.open })}
        <Transition
          openProgress={openProgress}
          photo={photo}
          sourceImageRefs={this._images}
          isAnimating={isAnimating}
        />
        <DetailScreen
          photo={photo}
          onClose={this.close}
          openProgress={openProgress}
          isAnimating={isAnimating}
        />
      </ScrollView>
    );
  }
}
