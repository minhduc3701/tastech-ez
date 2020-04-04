import styled from 'styled-components'

export const Wrapper = styled.div`

`

export const SectionSG = styled.div`
  padding: 80px 0 30px;

  .article {
    padding: 0 90px;
  }

  .row {
    margin-bottom: 40px;
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

  .article {
    padding: 0 90px;
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
    padding: 0 90px;
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

  .text-block {
    padding-left: 30px;
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
  padding: 100px 0 60px;

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
  padding-bottom: 100px;

  @media screen and (max-width: 767px) {
    padding-bottom: 70px;

    .article {
      margin-top: 60px;
    }
  }

`