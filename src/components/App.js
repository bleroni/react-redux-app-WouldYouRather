function App() {
  return (
    <div className="App">
      <div class="container">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">WouldYouRather App</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">New Question</a></li>
              <li><a href="#">Leaderboard</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li class="nav-item">
                <p class="navbar-text welcome-message">Hello, Sarah Edo</p>
              </li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        </nav>

        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
