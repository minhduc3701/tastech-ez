import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 1px solid #fff;
  background: #fff;
  flex: 1;
  border-radius: 20px;
  color: #222;
  transition: all .3s ease-in-out;

 
    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.16);
  
`

export const Summary = styled.div`
  padding: 25px 50px;
  text-align: center;

  .name {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .price {
    font-size: 40px;
    font-weight: 600;
    color: #f4b400;
    margin: 3px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    .amount {
      position: relative;
    }

    .currency {
      font-size: 15px;
      position: absolute;
      top: 50%;
      right: 0;
      display: inline-block;
      transform: translate(110%, -50%);
    }

    .free & {
      color: #3ac9b6;
    }
  }

  .period {
    margin-bottom:3px;
    font-size:16px;
    line-height:22px;
    font-weight:600;

  }
  .pricePerUser {
    text-decoration:line-through;
    color:#626262;
    margin-bottom: 20px;
    font-size:14px;
    line-height:19px;
  }

  .desc {
    font-size:15px;
    margin-bottom: 25px;
    line-height:20px;
    padding:0 30px;
    color:#222222;
  }

  a {
    display: block;
    color: #fff;
    background: #f4b400;
    padding: 15px 50px;
    position: relative;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;

    svg {
      font-size: 20px;
      position: absolute;
      top: 15px;
      right: 20px;
    }

    .free & {
      background: #f4b400;
    }

    &:hover {
      text-decoration: none;
      color: #fff;
    }
  }
`

export const Heading = styled.h3`
  background-color: #f5f5f5;
  font-size: 15px;
  font-weight: 600;
  padding: 11px 50px;
`

export const List = styled.ul`
  list-style-type: none;
  padding: 17px 50px;

  li {
    margin-bottom: 13px;
    display: flex;
    position: relative;
    cursor: default;

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      font-size: 20px;
      margin-right: 22px;
      flex: 0 0 20px;
      color: #f4b400;

      .free & {
        color: #f4b400;
      }
    }

    .note {
      display: none;
      position: absolute;
      left: 40px;
      top: -10px;
      z-index: 2;
      max-width: 380px;
      box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      font-size: 12px;
      line-height: 1.58;
      color: #222;
      background: #fff;
      font-weight: normal;
      padding: 20px;
      transform: translateY(-100%);
      pointer-events: none;

      .arr {
        content: '',
        display: inline-block;
        width: 0;
        height: 0;
        border-width: 10px 8px 0 8px;
        border-color: #fff transparent transparent transparent;
        border-style: solid;
        position: absolute;
        bottom: -10px;
        left: 20px;
      }
    }

    
    
    &.disabled {
      color: #c1c1c1;

      svg {
        color: #c1c1c1;
      }
    }

    &:hover {
      .note {
        display: block;
      }
    }
  }
`