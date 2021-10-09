import React, { MutableRefObject, useRef, useState } from 'react';
import { ScrollView, View, StyleSheet, Animated, StyleProp, ViewStyle } from 'react-native';

interface ParallaxScrollViewProps {
  maxHeight: number;
  minHeight: number;
  minOverlayOpacity: number;
  maxOverlayOpacity: number;
  overlayColor: string;
  headerContainerStyle?: StyleProp<ViewStyle>;
  fixedForegroundContainerStyles?: StyleProp<ViewStyle>;
  renderHeader: () => JSX.Element;
  renderFixedForeground?: () => JSX.Element;
}

export const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = (props) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const containerRef = useRef<MutableRefObject<View>>(null).current;
  const scrollViewRef = useRef<MutableRefObject<ScrollView>>(null).current;

  const interpolateOnImageHeight = (outputRange: Array<number>) => {
    const headerScrollDistance = props.maxHeight - props.minHeight;
    return scrollY.interpolate({
      inputRange: [0, headerScrollDistance],
      outputRange,
      extrapolate: 'clamp',
    });
  };

  const pivotPoint = (a, b) => a - b;

  const renderHeader = () => {
    const overlayOpacity = interpolateOnImageHeight([
      props.minOverlayOpacity,
      props.maxOverlayOpacity,
    ]);
    const p = pivotPoint(props.maxHeight, props.minHeight);

    const headerScale = scrollY.interpolate({
      inputRange: [-props.maxHeight, 0],
      outputRange: [8, 1],
      extrapolate: 'clamp',
    });

    const headerTranslate = scrollY.interpolate({
      inputRange: [0, p],
      outputRange: [0, -(p / 5)],
      extrapolate: 'clamp',
    });

    const headerTransformStyle = {
      height: props.maxHeight,
      transform: [{ translateY: headerTranslate }, { scale: headerScale }],
    };

    const overlayStyle = [
      styles.overlay,
      { opacity: overlayOpacity, backgroundColor: props.overlayColor },
    ];

    const disableOverlay =
      props.minOverlayOpacity === props.maxOverlayOpacity && props.maxOverlayOpacity === 0;

    return (
      <Animated.View style={[styles.header, headerTransformStyle, props.headerContainerStyle]}>
        {props.renderHeader()}
        {!disableOverlay && <Animated.View style={overlayStyle} />}
        <View style={[styles.fixedForeground, props.fixedForegroundContainerStyles]}>
          {props.renderFixedForeground && props.renderFixedForeground()}
        </View>
      </Animated.View>
    );
  };

  const inset = props.maxHeight - props.minHeight;

  return (
    <View
      ref={containerRef}
      style={[
        styles.container,
        {
          paddingTop: props.minHeight,
        },
      ]}>
      {renderHeader()}
      <Animated.ScrollView
        scrollToOverflowEnabled={true}
        contentContainerStyle={{
          marginTop: inset,
          paddingBottom: inset,
          backgroundColor: '#f6f6fc',
        }}
        scrollEventThrottle={1}
        ref={scrollViewRef}
        overScrollMode="always"
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
        })}>
        {props.children}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 100,
  },
  fixedForeground: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 101,
  },
  touchableFixedForeground: {
    zIndex: 102,
  },
});
