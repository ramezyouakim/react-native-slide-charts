import React, { Component } from 'react'
import { StyleSheet, Animated, View } from 'react-native'
import { CursorLineProps } from './utils/types'

class CursorLine extends Component<CursorLineProps> {
  static defaultProps = {
    width: 2,
    backgroundColor: '#F4B700',
  }

  line = React.createRef<View>()

  shouldComponentUpdate() {
    return false
  }

  setNativeProps = (nativeProps: Object) => {
    if (this.line.current != null) {
      this.line.current.setNativeProps(nativeProps)
    }
  }

  render() {
    const { width, backgroundColor } = this.props
    return (
      <Animated.View
        ref={this.line}
        style={[styles.line]}
      >
        <View style={{ width: 9, height: 2, backgroundColor: '#CFCFCF',left:-4, bottom: 0, position: 'absolute' }}></View>
        <View style={{ width: 9, height: 2, backgroundColor: '#CFCFCF',left:-4, top: 0, position: 'absolute' }}></View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  line: {
    position: 'absolute',
    height: 200,
    width: 1,
    backgroundColor: '#CFCFCF',
  },
})

export default CursorLine
