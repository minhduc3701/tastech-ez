import styled, { css } from 'styled-components'
import DynamicComponent from '../components/DynamicComponent'
import icon from '../images/arrow-down.svg'
import { Row } from 'reactstrap'
import calendarIcon from '../images/calendar_icon.svg'

// @see https://medium.com/harrys-engineering/creating-a-typography-system-with-react-and-styled-components-ae3661369266
export const MainStyle = css`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  line-height: 1.53;
  color: #323232;
  box-sizing: border-box !important;
  -moz-box-sizing: border-box !important;
  -webkit-box-sizing: border-box !important;

  a, button {
    transition: all 0.3s ease-in-out;
  }

  img {
    max-width: 100%;
  }
`

export const ButtonStyle = css`
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


export const CustomRow = styled(Row)`
  position: relative;

  &.row {
    // fall back if spacing null
    margin-right: -15px;
    margin-left: -15px;

    margin-right: -${props => props.spacing / 2}px;
    margin-left: -${props => props.spacing / 2}px;

    > [class*='col'] {
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