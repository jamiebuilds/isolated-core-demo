import React from 'react';
import ReactDOM from 'react-dom';

class Application extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

export default function init(core) {
  core.ready({
    attach(uidocument) {
      ReactDOM.render(<Application/>, uidocument.getElementById('root'));
    },
    detach(uidocument) {
      ReactDOM.unmountComponentAtNode(uidocument.getElementById('root'));
    }
  });
}
