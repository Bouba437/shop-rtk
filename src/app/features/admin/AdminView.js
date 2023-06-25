import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StockInfos from "../../../components/StockInfos";
import {
    addPhones as addPhonesAction,
    addTablets as addTabletsAction
} from "../phones/phoneSlice";
import { addTvs as addTvsAction } from "../tvs/tvSlice";

const container = {
    width: "300px",
    padding: "20px",
    border: "1px solid grey",
    margin: "10px auto"
}
const btnContainer = {
    display: "flex",
    marginBottom: "12px",
}

const AdminView = () => {

    const [phones, setPhones] = useState(1);
    const [tablets, setTablets] = useState(1);
    const [tvs, setTvs] = useState(1);

    const dispatch = useDispatch();
    const {phone, television} = useSelector( state => state);

    return (
        <div style={container}>
            <h2>Admin</h2>

            <StockInfos product="Téléphones" stock={phone.phones}/>
            <div style={btnContainer}>
                <input 
                    type="number"
                    min="1"
                    value={phones}
                    onChange={e => setPhones(e.target.value)}
                />
                <button onClick={() => dispatch(addPhonesAction(+phones))}>Augmenter le stock</button>
            </div>

            <StockInfos product="Tablettes" stock={phone.tablets}/>
            <div style={btnContainer}>
                <input 
                    type="number"
                    min="1"
                    value={tablets}
                    onChange={e => setTablets(e.target.value)}
                />
                <button onClick={() => dispatch(addTabletsAction(+tablets))}>Augmenter le stock</button>
            </div>

            <StockInfos product="Télés" stock={television.tvs}/>
            <div style={btnContainer}>
                <input 
                    type="number"
                    min="1"
                    value={tvs}
                    onChange={e => setTvs(e.target.value)}
                />
                <button onClick={() => dispatch(addTvsAction(+tvs))}>Augmenter le stock</button>
            </div>
        </div>
    )
}

export default AdminView