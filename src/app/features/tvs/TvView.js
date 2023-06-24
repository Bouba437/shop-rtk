import tv from "../../../images/tv.png";
import { useDispatch, useSelector } from "react-redux";
import { tvs as tvsAction } from "./tvSlice";

const TvView = () => {

    const tvs = useSelector(state => state.television.tvs);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <img src={tv} alt="tv" />
            <p>
                Disponibilité:
                <span className="count"> { tvs } </span>
            </p>
            <button onClick={() => { dispatch(tvsAction()) }}>Acheter</button>
        </div>
    )
}

export default TvView