import { createContext, useReducer } from "react";

type StateType = {
  theme: string;
  fontSize: number;
};

// type ActionType = {
//   type: "CHANGE_THEME" | "CHANGE_TYPE";
//   payload: number;
// };

type SizeActionType = {
  type: "CHANGE_THEME";
};

type ColorActionType = {
  type: "CHANGE_TYPE";
  payload: number;
};

type ActionType = SizeActionType | ColorActionType;

const INITIAL_STATE = {
  theme: "light",
  fontSize: 16,
};

export const ThemeContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "CHANGE_TYPE":
      return {
        ...state,
        fontSize: action.payload,
      };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <div className={`theme ${state.theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
