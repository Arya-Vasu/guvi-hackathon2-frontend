import {useHistory, useParams} from "react-router-dom";

export function SelectShow() {
    const history = useHistory();
    const {name} = useParams();
    const name1 = "wave-cinemas";
    const name2 = "inox-pvr";
    const name3 = "silvercity-multiplex";
    const name4 = "carnival";
    const time1 = "9";
    const time2 = "12";
    const time3 = "16";
    const time4 = "20";

  return (
    <div className="select-show">

      <h2 className="select-show-header">Choose the Theatre and Show</h2>

      <div className="all-theatres">

        <div className="theatres">
          <h4 className="theatre-name">Wave Cinemas</h4>
          <img src="https://dhoom.filmipop.com/media//theatrelogo/2015/Aug/1438688491-wavecinema.jpg" className="theatre-images" />
          <div className="timings">
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name1+"/"+time1)}}>09:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name1+"/"+time2)}}>12:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name1+"/"+time3)}}>16:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name1+"/"+time4)}}>20:00</button>
          </div>
        </div>

        <div className="theatres">
          <h4 className="theatre-name">INOX PVR</h4>
          <img src="https://cdn.zeebiz.com/sites/default/files/2021/12/29/170992-pvr-inox.jpg" className="theatre-images" />
          <div className="timings">
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name2+"/"+time1)}}>09:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name2+"/"+time2)}}>12:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name2+"/"+time3)}}>16:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name2+"/"+time4)}}>20:00</button>
          </div>
        </div>

        <div className="theatres">
          <h4 className="theatre-name">Silverity Multiplex</h4>
          <img src="https://image3.mouthshut.com/images/imagesp/925918250s.jpeg" className="theatre-images" />
          <div className="timings">
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name3+"/"+time1)}}>09:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name3+"/"+time2)}}>12:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name3+"/"+time3)}}>16:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name3+"/"+time4)}}>20:00</button>
          </div>
        </div>

        <div className="theatres">
          <h4 className="theatre-name">Carnival</h4>
          <img src="https://etimg.etb2bimg.com/photo/62679947.cms" className="theatre-images" />
          <div className="timings">
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name4+"/"+time1)}}>09:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name4+"/"+time2)}}>12:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name4+"/"+time3)}}>16:00</button>
            <button className="show-time" onClick={() => {history.push("/movies/" +name+"/"+name4+"/"+time4)}}>20:00</button>
          </div>
        </div>
      </div>
    </div>
  );
}
