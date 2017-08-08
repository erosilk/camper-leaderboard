import "isomorphic-fetch";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userData = this.props.data;

    return (
      <div className="container">
        <div className="user">
          <img src={userData.img} alt="" />
          <div>
            <p>
              {userData.username}
            </p>
            <p>
              🍪{userData.alltime} -
              {userData.recent}
            </p>
          </div>
        </div>
        <style jsx>
          {`
            * {
              margin: 0;
              padding: 0;
              font-family: arial;
            }
            .container {
              display: flex;
              width: 100vw;
              flex-direction: column;
              align-items: center;
            }
            .user {
              display: flex;
              width: 300px;
              padding: 5px;
              margin: 5px;
              justify-content: center;
              background-color: #dcffac;
              transition: 0.2s ease all;
              box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.32);
            }
            .user:hover {
              box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.52);
            }
            .user img {
              max-height: 50px;
              margin-right: 40px;
            }
            .user div {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .user div p:first-child {
              font-weight: bold;
              margin-bottom: 5px;
            }
          `}
        </style>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ req }) {
    const res = await fetch(
      "https://fcctop100.herokuapp.com/api/fccusers/top/recent"
    );
    const json = await res.json();
    return { data: json };
  }

  render() {
    const userArray = this.props.data;
    return (
      <div>
        {userArray.map(user => <UserCard key={user.username} data={user} />)}
      </div>
    );
  }
}

export default App;
