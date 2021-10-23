import React from 'react';
import Preloader from "../components/common/preloader/Preloader";

const WithSuspense = (Component: React.ComponentType) => {
    return (props: any) => {
        return <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense>
    }
};

export default WithSuspense;