import styled from 'styled-components'

export const Wrapper = styled.div`

`

export const SectionSG = styled.div`
  padding: 80px 0 30px;

  .article {
    padding: 0 0 0 90px;
  }

  .row {
    margin-bottom: 40px;
  }
  .smarttitle h2{
    font-family: work sans;
    font-size: 35px;
    font-weight: 600;
    color: #171e45;
    line-height: 1.2;
    margin-bottom: 60px;
    margin-top:50px;
  }
  @media screen and (max-width: 767px) {
    padding: 60px 0 0;

    .article {
      padding: 0;
      margin-bottom: 15px;
    }
  }
`

export const SectionEM1 = styled.div`
  padding: 80px 0 60px;
  .headtitle h2{
    font-family: work sans;
    font-size: 35px;
    font-weight: 600;
    color: #171e45;
    line-height: 1.2;
    margin-bottom: 60px;
    margin-top:50px;
  }
  .article {
    padding: 0;
  }

  @media screen and (max-width: 767px) {
    padding: 70px 0 60px;

    .article {
      padding: 0;
      margin-bottom: 15px;
    }
  }
`

export const SectionEM2 = styled.div`
  padding: 0 0 80px;
  .article {
    padding: 0;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 0 30px;

    .article {
      padding: 0;
    }
  }
`

export const SectionTP = styled.div`
  padding: 100px 0;
  .firsttitle h2{
    font-family: work sans;
    font-size: 35px;
    font-weight: 600;
    color: #171e45;
    line-height: 1.2;
    margin-bottom:40px;
    margin-top:0;
  }
  .text-block {
    padding-left: 0;
  }

  .article {
    margin-top: 35px;
  }

  @media screen and (max-width: 767px) {
    padding: 70px 0;

    .text-block {
      padding: 0;
      margin-top: 20px;
    }

    .first-paragraph {
      text-align: center;
    }

    .article {
      margin-top: 60px;
    }
  }

`

export const SectionRP1 = styled.div`
  padding: 100px 0 80px;
  .headtitle h2{
    font-family: work sans;
    font-size: 35px;
    font-weight: 600;
    color: #171e45;
    line-height: 1.2;
    margin-bottom: 60px;
    margin-top:50px;
  }
  .text-block {
    padding-left: 30px;
  }

  @media screen and (max-width: 767px) {
    padding: 70px 0 0;

    .text-block {
      padding: 0;
      margin-top: 20px;
    }

  }

`

export const SectionRP2 = styled.div`
  padding-bottom: 150px;

  @media screen and (max-width: 767px) {
    padding-bottom: 70px;

    .article {
      margin-top: 60px;
    }
  }

`
export const SectionIntro = styled.div`
  padding: ${props => props.mt ? `${props.mt}px` : '0'} 0 ${props => props.mb ? `${props.mb}px` : '0'};
  p{
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.56;
    text-align: left;
    color: #323232;
  }
  h2{
    font-family: work sans;
    font-size: 35px;
    font-weight: 600;
    line-height: 1.2;
    color: #171e45;
    margin: 0 0 40px 0;
  }
  .mb30{
    margin: 0 0 30px 0;
  }
  .mb25{
    margin: 0 0 25px 0;
  }
  .mb20{
    margin: 0 0 20px 0;
  }
  .article {
    padding: 0 50px;
    margin-top: 35px;
  }
  .article:first-child {
    margin-top: 70px;
  }

 
  &.howcanhelp{
    p, h2{
      text-align: center
    }
  }

  @media screen and (max-width: 1199px) {
    padding: 35px 0 25px;
    .article {
      padding: 0;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 35px 0 0;
    h2{
      font-size: 30px;
       margin: 0;
    }
    &.howcanhelp{
      p, h2{
        text-align: left
      }
    }
    .article {
      margin-bottom: 15px;
    }
    .article:first-child {
      margin-top: 0;
    }
  }
`