/**
 * This is the entry file of the Direflow setup.
 *
 * You can add any additional functionality here.
 * For example, this is a good place to hook into your
 * Web Component once it's mounted on the DOM.
 *
 * !This file cannot be removed.
 * It can be left blank if not needed.
 */

import AddComponent from './direflow-components/item-add-component';
import ListComponent from './direflow-components/item-list-component';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = (state = [], action) => {
  console.log('action: ', action);
  switch (action.type) {
    case "add":
      return [...state, action.item];
    case "remove":
      return state.filter(s => s !== action.item);
    default:
      return state;
  }
};

const store = configureStore({ reducer: rootReducer });

AddComponent.then((element) => {

  /**
   * Access DOM node when it's mounted
   */
  console.log('item-add is mounted on the DOM', element);
  element.addEventListener("add-item", e => {
    
    const currentList = store.getState();

    // Prevent duplicates
    if (currentList.includes(e.detail)) {
      return;
    }
    console.log('asdas',"====",e.detail,"===",store)
    store.dispatch({ type: "add", item: e.detail });
    console.log('store data: ', currentList);
  });
  element.addEventListener("remove-item", (e) => {
    store.dispatch({ type: "remove", item: e.detail });
  });
  store.subscribe(() => {
    const currentList = store.getState();
    console.log("currentList: ", currentList);
    element.sampleList = currentList;
  });
});
