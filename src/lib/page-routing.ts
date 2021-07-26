import * as React from 'react';
import { Event } from 'effector';
import { useEvent } from "effector-react";
import { useLocation, useParams } from 'react-router';


const START = `☄️/start-event`;

export interface StartParams {
    params: Record<string, string>;
    query: Record<string, string>;
}

/**
 * Loades start event on browser side and pass params and query
 */
export function useStart(startEvent: Event<StartParams>) {
    const parameters = useParams();
    const location = useLocation();
    const query = React.useMemo(
        () => Object.fromEntries(new URLSearchParams(location.search)),
        [location.search],
    );
    const start = useEvent(startEvent);

    React.useEffect(() => {
        start({ params: parameters, query });
    }, []);
}

/**
 * Assign start event to component
 */
export function withStart<P extends Record<string, unknown>>(
    event: Event<StartParams>,
    component: React.FC<P>,
): React.FC<P> {
    // @ts-ignore
    component[START] = event;
    return component;
}