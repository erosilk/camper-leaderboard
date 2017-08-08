import 'isomorphic-fetch'
import Head from 'next/head'

const logo = <img src="/static/logo.png" alt="" />
const cookie = <img src="/static/cookie.png" alt="" />

class UserCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const user = this.props

    return (
      <div className="user">
        <img src={user.img} alt="" />
        <div>
          <p>
            {user.username}
          </p>
          <div className="score">
            {cookie}
            {user.cookies}
          </div>
        </div>

        <style jsx>
          {`
            .user {
              display: flex;
              width: 293.33px;
              height: 66.21px;
              padding: 5px 15px;
              justify-content: space-between;
              background-color: #e4fde1;
              transition: 0.2s ease all;
              box-sizing: border-box;
            }

            .user img {
              max-height: 55.1px;
              margin-right: 5px;
            }
            .user div {
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            }
            .user div p {
              font-family: OpenSans-SemiBold;
              font-size: 16.55px;
              color: #000000;
              letter-spacing: 0.04px;
            }
            .user div .score {
              width: auto;
              font-family: OpenSans-Light;
              font-size: 24.37px;
              color: #000000;
              letter-spacing: 0.06px;
            }
            .score img {
              margin-right: 5.6px;
            }
          `}
        </style>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'recent',
    }
  }

  static async getInitialProps({ req }) {
    const resRecent = await fetch(
      'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
    )
    const jsonRecent = await resRecent.json()
    const resAllTime = await fetch(
      'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'
    )
    const jsonAllTime = await resAllTime.json()
    return {
      recent: jsonRecent,
      alltime: jsonAllTime,
    }
  }

  render() {
    const userArray = this.props[this.state.tab]
    return (
      <div>
        <Head>
          <title>Camper Leaderboard</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,600"
            rel="stylesheet"
          />
        </Head>
        {logo}
        {userArray.map(user =>
          <UserCard
            key={user.username}
            username={user.username}
            img={user.img}
            cookies={user[this.state.tab]}
          />
        )}
      </div>
    )
  }
}

export default App
