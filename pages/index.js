import 'isomorphic-fetch'
import Head from 'next/head'

const logo = <img src="/static/logo.png" alt="" />
const cookie = <img src="/static/cookie.png" alt="" />

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let label = this.props.tab === 'recent' ? 'THIS MONTH' : 'ALL TIME'
    let classes = 'button'
    if (this.props.selected) {
      classes += ' selected'
    }
    return (
      <div
        className={classes}
        onClick={() => {
          this.props.switchTab(this.props.tab)
        }}
      >
        <p>
          {label}
        </p>
        <style jsx>{`
          .button {
            background: #6b2737;
            width: 140px;
            height: 28.97px;
            padding: 5px;
            box-sizing: border-box;
            cursor: pointer;
            transition: 0.14s ease all;
          }
          .button:hover {
            background: #8d252e;
          }
          .selected {
            background: #f45b69;
          }
          .selected:hover {
            background: #f45b69 !important;
          }
          .button p {
            font-family: OpenSans-SemiBold;
            font-size: 12.87px;
            color: #ffffff;
            letter-spacing: 0.03px;
            margin: 0;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}

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
              margin-bottom: 9px;
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
    this.switchTab = this.switchTab.bind(this)
    this.state = {
      tab: 'recent',
    }
  }

  // API Call
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

  switchTab(des) {
    this.setState(prevState => ({ tab: des }))
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
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css"
          />
        </Head>
        <div className="flex-center">
          <div className="container">
            {logo}
            <div className="tabs">
              <Button
                tab="recent"
                selected={this.state.tab === 'recent'}
                switchTab={this.switchTab}
              />
              <Button
                tab="alltime"
                selected={this.state.tab === 'alltime'}
                switchTab={this.switchTab}
              />
            </div>
            <div className="leaderboard">
              {userArray.map(user =>
                <UserCard
                  key={user.username}
                  username={user.username}
                  img={user.img}
                  cookies={user[this.state.tab]}
                />
              )}
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .flex-center {
              width: 100vw;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: black;
            }
            .container {
              background: #114b5f;
              width: 320px;
              height: 409px;
              padding: 13.1px;
              box-sizing: border-box;
            }
            .leaderboard {
              height: 260px;
              overflow-y: scroll;
            }
            .tabs {
              justify-content: space-between;
              display: flex;
              margin: 10px 0;
            }
            ::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </div>
    )
  }
}

export default App
