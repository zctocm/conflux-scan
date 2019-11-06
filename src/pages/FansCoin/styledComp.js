import styled from 'styled-components';
import media from '../../globalStyles/media';

export const HeadBar = styled.div`
  width: 100%;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .link-open {
    margin-left: 5px;
    font-size: 14px;
  }
  * {
    display: inline-block;
    margin: 0;
  }
  h1 {
    color: #000;
    font-size: 20px;
    margin-right: 12px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  ${media.mobile`
    width: 95%;
    margin: 0 auto;
  `}
`;

export const PCell = styled.div`
  margin: 0 !important;
`;

export const TabWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  .page-pc {
    display: inline-flex !important;
  }
  .page-h5 {
    display: none;
  }
  ${media.pad`
    justify-content: center;
    .page-pc {
      display: block;
     }
    .page-h5 { display: inline-flex!important; }
  `}
`;
