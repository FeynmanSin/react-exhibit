import React, { useState, useEffect, useCallback } from 'react';


/**
 * todo 异步hooks
 */
export const useAsync = (fn, auto = true) => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reSync = useCallback(() => {
    setLoading(true);
    return fn().then(
      (response) => {
        setValue(response);
      },
      (error) => {
        setError(error);
      }
    ).finally(() => {
      setLoading(false);

    })
  }, [fn])

  useEffect(() => {
    if (auto) {
      reSync();
    }
  }, [reSync]);
  return { loading, value, error, setValue, reSync };
};


/**
 * todo WebSocket hooks
 */

// export const useWebsocket = (obj) => {
//   const ws = new WebSocket('ws:localhost:3004');
//   useEffect(() => {

//   }, []);

//   const init = () => {
//     bindEvent();
//   }
//   const bindEvent = () => {

//   }

//   return {
//     init,
//   }
// }