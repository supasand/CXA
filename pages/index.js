import Link from 'next/link'
import { withRouter } from 'next/router'
import styled, { injectGlobal, css } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    background-color: #ddd;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 14px;
  text-align: center;
  color: palevioletred;
  font-family: 'Thonburi';
`;

const TitleSub = styled(Title)`
  font-size: 20px;
  color: red;
`;

const GroupingText = styled.div`
  ${TitleSub} {
    font-size: 28px;
  }
`;

class Index extends React.Component {
  static async getInitialProps({ req }) {
    return true
  }

  render() {
    return (
      <div>
        <Title>Hello World</Title>
        <TitleSub>Subtitle</TitleSub>
        <GroupingText>
          <p>Test</p>
          <TitleSub>Subtitle2</TitleSub>
        </GroupingText>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </div>
    )
  }
}

export default withRouter(Index)