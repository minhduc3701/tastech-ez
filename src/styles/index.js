import styled, { css } from 'styled-components'
import DynamicComponent from '../components/DynamicComponent'
import icon from '../images/arrow-down.svg'
import { Row } from 'reactstrap'
import calendarIcon from '../images/calendar_icon.svg'

// @see https://medium.com/harrys-engineering/creating-a-typography-system-with-react-and-styled-components-ae3661369266
export const MainStyle = css`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.4;
  box-sizing: border-box !important;
  -moz-box-sizing: border-box !important;
  -webkit-box-sizing: border-box !important;

  a {
    transition: all 0.3s ease-in-out;
  }

  .react-images__blanket {
    z-index: 999;
  }

  .font-number {
    font-family: 'Work Sans', sans-serif;
  }
`

export const ButtonStyle = css`
  .tas-save-button {
    width: 334px;
    height: 60px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    line-height: 58px;
    text-align: center;
    background-color: #f4b400;
    @media screen and (max-width: 1599px) {
      width: 200px;
    }
  }

  .tas-save-button:focus {
    outline: none;
  }

  .btn-secondary {
    color: #323232;
    border: none;
    background-color: #e4e4e4;
    &:hover {
      color: #323232;
      border: none;
      background-color: #e4e4e4;
    }
  }

  .btn-orange {
    display: inline-block;
    min-width: 150px;
    line-height: 20px;
    padding: 15px 25px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border: none;
    outline: none;
    background-color: #f4b400;
    border-radius: 25px;

    &:focus {
      outline: none;
    }

    &:hover {
      text-decoration: none;
    }
  }

  .btn-gray {
    display: inline-block;
    min-width: 150px;
    line-height: 20px;
    padding: 15px 25px;
    text-align: center;
    color: #222;
    font-size: 14px;
    font-weight: 600;
    border: none;
    outline: none;
    background-color: #f5f5f5;
    border-radius: 25px;

    &:focus {
      outline: none;
    }

    &:hover {
      text-decoration: none;
    }
  }

  .btn-black-o {
    display: inline-block;
    min-width: 150px;
    line-height: 20px;
    padding: 14px 25px;
    text-align: center;
    color: #222;
    font-size: 14px;
    font-weight: 600;
    border: solid 1px #808080;
    outline: none;
    background-color: transparent;
    border-radius: 25px;

    &:focus {
      outline: none;
    }

    &:hover {
      text-decoration: none;
    }
  }
`

export const Main = styled(DynamicComponent)`
  ${MainStyle};
  ${ButtonStyle};
`

export const selectStyle = (divideLeft, menuListWidth = '100%') => {
  return {
    control: (base, state) => ({
      ...base,
      boxShadow: 0,
      color: '#222',
      borderRadius: '5px',
      borderTopRightRadius: divideLeft ? '0px' : '5px',
      borderBottomRightRadius: divideLeft ? '0px' : '5px',
      padding: '0 15px 0 22px',
      marginTop: '0',
      fontSize: '14px',
      fontWeight: '600',
      height: '55px',
      backgroundColor: state.isDisabled ? '#f5f5f5' : '#FFF',
      '&:hover': { border: 'solid 1px #bbb' },
      border: 'solid 1px #bbb',
      '> *': { maxWidth: 'calc(100% - 20px)', overflow: 'hidden' }
    }),
    option: (provided, state) => ({
      ...provided,
      color: '#222',
      fontSize: '14px',
      fontWeight: '600',
      backgroundColor: state.isDisabled
        ? '#f5f5f5'
        : state.isSelected
        ? '#F5F5F5'
        : state.isFocused
        ? '#F5F5F5'
        : '#FFF',
      ':active': {
        backgroundColor: '#f5f5f5'
      },
      '&:hover': {
        backgroundColor: '#f5f5f5'
      }
    }),
    singleValue: (styles, state) => ({
      ...styles,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      width: 'calc(100% - 55px)',
      color: '#222'
    }),
    placeholder: (base, state) => ({
      ...base,
      color: '#c1c1c1',
      width: 'calc(100% - 55px)',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      padding: 0,
      color: 'transparent !important',
      position: 'relative',
      width: '16px',
      height: '16px',
      backgroundImage: `url(${icon})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    }),
    valueContainer: base => ({
      padding: '0px',
      minHeight: 'auto'
    }),
    indicatorSeparator: (base, state) => ({
      ...base,
      display: 'none'
    }),
    // menu list's width
    menuList: (base, state) => ({
      ...base,
      borderRadius: '5px',
      border: 'solid 1px #bbbbbb',
      width: menuListWidth
    })
  }
}

export const SwitchBtn = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 30px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 24px;
    width: 25px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  input:checked + .slider {
    background-color: #34a853;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #34a853;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(22px);
    -ms-transform: translateX(22px);
    transform: translateX(22px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;

  .ReactTable {
    border: none;
    .rt-table {
      overflow: visible;
    }
    .rt-noData {
      padding: 10px 20px;
    }
  }
  .ReactTable .rt-thead.-header {
    box-shadow: none;
  }
  .ReactTable .rt-thead .rt-tr {
    padding: 0 25px;
  }
  .ReactTable .rt-thead .rt-th {
    border-right: none;
    box-shadow: none;
    font-size: 12px;
    font-weight: 600;
    color: #626262;
    text-transform: lowercase;
    padding: 10px 15px;
    overflow: visible;
  }

  .ReactTable .rt-thead .rt-th div {
    text-transform: lowercase;
  }

  .ReactTable .rt-thead .rt-th div:first-letter {
    text-transform: capitalize;
  }
  .ReactTable .rt-thead.-filters {
    background-color: #fff;
  }

  .ReactTable .rt-thead.-filters input {
    padding: 9px;
    border-color: rgb(204, 204, 204);
    bnorder-radius: 4px;
  }

  .ReactTable .rt-thead .rt-th.-cursor-pointer {
    > div:first-child {
      display: inline-block;
      position: relative;
      padding-right: 20px;

      &:before,
      &:after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        position: absolute;
        top: 2px;
        right: 0;
      }
      &:before {
        border-bottom: 6px solid #ccc;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
      }
      &:after {
        border-top: 6px solid #ccc;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        top: 9px;
      }
    }

    &.-sort-asc {
      box-shadow: none;
      > div {
        &:before {
          border-bottom-color: #2e3363;
        }
      }
    }
    &.-sort-desc {
      box-shadow: none;
      > div {
        &:after {
          border-top-color: #2e3363;
        }
      }
    }
  }
  .ReactTable .rt-thead.-header {
    height: 35px !important;
  }
  .ReactTable .rt-thead.-filters .rt-th,
  .ReactTable .rt-tbody .rt-td {
    border-right: none;
  }

  .ReactTable .rt-tbody {
    background-color: #fff;
  }
  .ReactTable .rt-tbody .rt-tr-group {
    border-bottom: 1px solid #f5f5f5;
  }
  .ReactTable .rt-tbody .rt-tr-group:last-child {
    border-bottom: 1px solid #f5f5f5;
  }
  .ReactTable .rt-tr {
    padding: 12px 25px;
  }
  .ReactTable .rt-td {
    padding: 15px;
  }
  .ReactTable .rt-td a,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ReactTable .-pagination {
    box-shadow: none;
    justify-content: center;
    padding: 10px 0 0;
    border-top: none;
  }

  .ReactTable .-pagination .-previous,
  .ReactTable .-pagination .-next {
    flex: none;
    width: 40px;
    background: rgba(0, 0, 0, 0.1);
    overflow: hidden;

    button {
      color: transparent !important;
      position: relative;

      &:before {
        content: '←';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #000;
        font-size: 25px;
      }
    }
  }
  .ReactTable .-pagination .-next button:before {
    content: '→';
  }
  .ReactTable .-pagination .-center {
    flex: none;
    margin: 0 15px;
  }
  .ReactTable .-pagination .-pageJump {
    input {
      border: none;
    }
  }

  @media screen and (max-width: 767px) {
    .ReactTable .rt-thead .rt-tr {
      padding: 0;
    }
    .ReactTable .rt-tr {
      padding: 0;
    }
  }
`

export const CustomRow = styled(Row)`
  position: relative;

  &.row {
    // fall back if spacing null
    margin-right: -15px;
    margin-left: -15px;

    margin-right: -${props => props.spacing / 2}px;
    margin-left: -${props => props.spacing / 2}px;

    > [class^='col'] {
      padding-right: -15px;
      padding-left: -15px;

      padding-right: ${props => props.spacing / 2}px;
      padding-left: ${props => props.spacing / 2}px;
    }
  }
`

export const FormField = styled.div.attrs({ className: 'form-field' })`
  position: relative;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
  }
`

export const FormLabel = styled.label`
  color: #626262;
  font-size: ${props => (props.small ? '12px' : '14px')};
  font-weight: ${props => (props.small ? 'normal' : '600')};
  margin-bottom: ${props => (props.small ? '8px' : '10px')};
`

export const FormInput = styled.input`
  height: 55px;
  width: 100%;
  border-radius: 5px;
  border: solid 1px #bbb;
  color: #222;
  font-size: 14px;
  line-height: 38px;
  font-weight: 600;
  padding: 10px 25px;
  border-left: ${props => (props.borderLeftNone ? 'none' : '')};
  border-top-left-radius: ${props => (props.borderLeftNone ? '0' : '')};
  border-bottom-left-radius: ${props => (props.borderLeftNone ? '0' : '')};

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: #c1c1c1;
  }

  &:-ms-input-placeholder {
    color: #c1c1c1;
  }

  &:placeholder {
    color: #c1c1c1;
  }

  &:disabled,
  &.disable {
    border: 1px solid #bbb;
    background-color: #f5f5f5;
    &:focus {
      border: 1px solid #bbb;
    }
  }

  &[type="date"] {
    padding-right: 60px;
    position: relative;

    @media screen and (-webkit-min-device-pixel-ratio:0) {  
      background-image: url('${calendarIcon}');
      background-position: right 20px center;
      background-repeat: no-repeat;
    } 

    &::-webkit-clear-button,
    &::-webkit-inner-spin-button  {
        display: none;
    }

    &::-webkit-calendar-picker-indicator {
      color: red;
      width: 60px;
      height: 100%;
      background: transparent;
      color: transparent;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }

    &:focus {
      border-color: #bbb;
    }
  }
`
export const FormTextarea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: solid 1px #bbb;
  color: #222;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
  padding: 10px 25px;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: #c1c1c1;
  }

  &:-ms-input-placeholder {
    color: #c1c1c1;
  }

  &:placeholder {
    color: #c1c1c1;
  }

  &:focus {
    outline: none;
  }

  &:disabled,
  &.disable {
    border: 1px solid #bbb;
    background-color: #f5f5f5;
    &:focus {
      border: 1px solid #bbb;
    }
  }
`

export const FormSelect = styled.select`
  height: 55px;
  width: 100%;
  border-radius: 5px;
  border: solid 1px #bbb;
  color: #222;
  font-size: 14px;
  line-height: 38px;
  font-weight: 600;
  padding: 10px 30px 10px 25px;
  background-color: #fff;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('${icon}');
  background-position: right 15px center;
  background-repeat: no-repeat;

  &:focus {
    outline: none;
  }

  &:disabled,
  &.disable {
    border: 1px solid #bbb;
    background-color: #f5f5f5;
    &:focus {
      border: 1px solid #bbb;
    }
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) {
    padding: 10px 30px 10px 25px;
  }
`

export const Container = styled.div.attrs({ className: 'customContainer' })`
  width: 100%;
  padding: 0 16px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1156px;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: calc(100% - 64px);
  }
`

export const DateRangePickerWrapper = styled.div`
  position: relative;

  .DateRangePickerInput__withBorder {
    border-radius: 5px;
    border: 1px solid #c1c1c1;
    box-sizing: border-box;
  }
  .DateRangePickerInput_arrow {
    display: flex;
    align-items: center;

    &:before {
      content: '';
      display: inline-block;
      width: 1px;
      height: 35px;
      background-color: #c1c1c1c1;
    }

    * {
      display: none;
    }
  }

  .DateInput {
    width: 50%;
    border-radius: 5px;
    overflow: hidden;
    background: transparent;

    &:first-of-type input {
      padding-left: 50px;
    }
  }

  .DateInput_input {
    width: 100%;
    height: 53px;
    line-height: 53px;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 600;
    color: #323232;
    border-bottom: none;
  }

  .DateInput_input__focused {
    border-bottom: none;
  }

  .DayPicker {
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.15);
  }

  .DateRangePicker_picker {
    top: 70px !important;
    z-index: 9;
  }

  .focused-shadow {
    // position: absolute;
    // top: -10px;
    // right: 0;
    // width: 100%;
    // height: calc(100% + 20px);
    // box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.15);
    // background: #fff;
    // border-radius: 10px;

    & + .DateRangePicker {
      // .DateRangePickerInput__withBorder {
      //   border-color: transparent;
      // }

      .DateRangePickerInput_calendarIcon {
        color: #f4b400;
      }
    }
  }
`

export const SingleDatePickerWrapper = styled(DateRangePickerWrapper)`
  
  .DateInput {
    width: 100%;
  }

  .DateInput_input{
    font-weight: ${props => (props.small ? 'normal' : '600')};
  }
  .SingleDatePicker_picker {
    top: 70px !important;
    right: -1px !important;
    z-index: 9;] 
  }

  .focused-shadow + .SingleDatePicker {
    // .SingleDatePickerInput__withBorder {
    //   border-color: transparent;
    // }

    .SingleDatePickerInput_calendarIcon {
      color: #f4b400;
    }
  }
`
