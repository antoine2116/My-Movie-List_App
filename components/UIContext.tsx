// Inspired by: https://github.com/vercel/commerce/blob/main/site/components/ui/context.tsx

import React, { useCallback, useMemo } from "react";
import { createContext, FC, ReactNode } from "react";

export interface UIState {
  displayModal: boolean;
  modalView: string;
}

const initialState = {
  displayModal: false,
  modalView: "LOGIN_VIEW",
}

type Action = 
  | { 
    type: "OPEN_MODAL" 
  }
  | { 
    type: "CLOSE_MODAL"
  }
  | {
    type: "SET_VIEW"
    view: VIEWS
  }

type VIEWS = 
  | "LOGIN_VIEW"
  | "REGISTER_VIEW"
  | "VIDEO_VIEW"

export const UIContext = createContext<UIState | any>(initialState)
UIContext.displayName = "UIContext";

function uiReducer(state: UIState, action: Action) {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        displayModal: true
      }
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        displayModal: false
      }
    }
    case "SET_VIEW": {
      return {
        ...state,
        modalView: action.view
      }
    }
  }
}

export const UIProvider: FC<{ children?: ReactNode }> = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState)

  const openModal = useCallback(
    () => dispatch({ type: "OPEN_MODAL" }),
    [dispatch]
  )

  const closeModal = useCallback(
    () => dispatch({ type: "CLOSE_MODAL" }),
    [dispatch]
  )

  const setModalView = useCallback(
    (view: VIEWS) => dispatch({ type: "SET_VIEW", view }),
    [dispatch]
  )

  const values = useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      setModalView
    }),
    [state]
  )

  return <UIContext.Provider value={values} {...props} />
}

export const useUI = () => {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext: FC<{ children?: ReactNode }> = ({
  children,
}) => (
  <UIProvider>
    {children}
  </UIProvider>
)
