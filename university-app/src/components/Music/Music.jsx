import React from "react";
import styles from "./Music.module.css";
import { connect } from "react-redux";
import { turnOnWave } from "../../redux/music-reducer";

const Music = (props) => {
    const handleWaveButtonClick = (trackId) => {
        props.turnOnWave(trackId);
    };

    return (
        <div>
            <div className={styles.mainTitle}>Главная</div>
            <div className={styles.menu}>
                <div className={styles.item}>ВСЁ</div>
                <div className={styles.item}>НАСТРОЕНИЯ И ЖАНРЫ</div>
                <div className={styles.item}>НОВЫЕ РЕЛИЗЫ</div>
                <div className={styles.item}>ЧАРТ</div>
            </div>
            <div className={styles.wawe}>
                <div className={styles.waweTitle}>Моя волна</div>
                {props.wawe.map((track) => (
                    <div key={track.id}>
                        <span>{track.name}</span>
                        <button
                            className={styles.waweButton}
                            onClick={() => handleWaveButtonClick(track.id)}
                        >
                            {track.isPlaying ? "Pause" : "Play"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        wawe: state.musicPage.wawe,
    };
};

export default connect(mapStateToProps, { turnOnWave })(Music);
