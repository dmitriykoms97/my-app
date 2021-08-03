import React from 'react';
import preloader from "../../../assets/img/preloadV2.svg";

type PropsType = {

}

const Preloader = (props: PropsType) => {
    return (
        <div>
            <img src={preloader} />
        </div>
    );
};

export default Preloader;