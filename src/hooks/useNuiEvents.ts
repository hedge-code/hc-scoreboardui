import { useCallback, useEffect, useReducer } from "react";

export default function useNuiEvents<T>(actions: string[], stateModifier: (state: T, action: T) => T, initState: T) {
  const [state, setState] = useReducer((state: T, action: T) => stateModifier(state, action), initState);

  const onMessage = useCallback((e: MessageEvent<T & { action: string }>) => {
    const { action: _, ...props } = e.data;
    if (actions.includes(e.data.action)) {
      setState(props as T);
    }
  }, [])

  useEffect(() => {
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [onMessage]);

  return state
}
