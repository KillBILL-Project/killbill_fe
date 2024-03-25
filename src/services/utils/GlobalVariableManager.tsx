/* eslint-disable no-underscore-dangle */
import type { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types';

class GlobalVariableManager {
  private static _insets: EdgeInsets = { top: 0, right: 0, bottom: 0, left: 0 };

  static get insets(): { top: number; right: number; bottom: number; left: number } {
    return this._insets;
  }

  static readonly setInsets = (insets: EdgeInsets) => {
    this._insets = insets;
  };
}

export default GlobalVariableManager;
