import Link from 'next/link'
import { withRouter } from 'next/router'

class About extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div>
        About-us page.
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </div>
    )
  }
}

export default withRouter(About)