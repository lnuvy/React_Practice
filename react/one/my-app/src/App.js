// import logo from './logo.svg';
import './App.css';
import YoutubeVideo from './YoutubeVideo';
import dummyData from './dummyData';



function App() {
  return (
    <div className="App">
      {dummyData.map(d => {
        return(
            <YoutubeVideo
              key={d.videoId}
              videoId={d.videoId}
              videoName={d.videoName}
              videoLength={d.videoLength}
              videoDescription={d.videoDescription}
            >
              <iframe width="560" height="315" src="https://www.youtube.com/embed/sqgxcCjD04s"
                title="Youtube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </YoutubeVideo>
        )
      }
      )}
    </div>
  );
}

export default App;
