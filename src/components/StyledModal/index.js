import React from 'react';
import {Modal, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import {compose} from '../../helpers/stylecompose';
import StyledText from '../StyledText';
import StyledButton from '../StyledButton';

export default class StyledModal extends React.PureComponent {
  render() {
    const {
      state,
      text,
      isButton,
      isTransparent,
      onClose,
      children,
      style,
      ...rest
    } = this.props;

    return (
      <Modal
        visible={state}
        transparent={isTransparent}
        animationType={'fade'}
        {...rest}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={compose(styles.styledModal, style)}>
            <View style={styles.styledModal__modal}>
              <StyledText style={styles.styledModal__text}>{text}</StyledText>

              {isButton && (
                <StyledButton
                  primary={true}
                  text={'Закрыть'}
                  onPress={onClose}
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  styledModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  styledModal__modal: {
    backgroundColor: '#fffdee',
    width: '70%',
    justifyContent: 'space-between',
    minHeight: 135,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ebebeb',
    padding: 25,
  },

  styledModal__text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#450700',
  },
});
