import { connect } from "react-redux";
import Music from "./Music";
import { turnOnWave } from "../../redux/music-reducer";

const mapStateToProps = (state) => {
    return {
        wawe: state.musicPage.wawe,
    };
};

export default connect(mapStateToProps, { turnOnWave })(Music);
