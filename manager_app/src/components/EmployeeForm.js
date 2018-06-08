import React, { Component } from 'react';
import { View, Text, Picker, Platform } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Field } from './common';

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift } = this.props;
    return (
      <View>
       <CardSection>
          <Field
            label="Name"
            placeholder="Jane"
            value={name}
            // value: value === value
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        
        <CardSection>
          <Field
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            // value: value === value
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={shift}
            // value: value === value
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    padding: 20,
  },
  cardSectionStyle: {
    flexDirection: Platform.OS === 'ios' ? 'column' : 'row',
  },
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
