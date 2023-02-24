import { Component } from 'react';
import {deleteComponent} from "../Constants";
import ShortCutsContext from "../ShortCutsContext";


class ShortCutKeys extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyBoard);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyBoard);
  }
  getUserOs = () => {
    return window.navigator.platform.match(/^Mac/) ? 'Mac' : 'Windows';
  };

  onKeyBoard = (event) => {

    // event.preventDefault();
    let keys = event.key;
    if (event.altKey) {
      keys = `Alt+${event.key}`;
    }

    if (event.metaKey && this.getUserOs() === 'Windows') {
      keys = `ctrl+${event.key}`;
    }
    console.log("hellokey",keys, event )
    switch (keys) {
      //map operation
      // case deleteComponent.keyName:
      //   event.preventDefault();
      //   if (this.deleteComponent) this.deleteComponent();
      //   break;
      case deleteComponent.windowsKey:
        event.preventDefault();
        if (this.deleteComponent) this.deleteComponent();
        break;
      default:
        break;
    }
    return true;
  };

  render() {
    return (
      <ShortCutsContext.Provider value={this}>
        {this.props.children}
      </ShortCutsContext.Provider>
    );
  }
}

export default ShortCutKeys;
