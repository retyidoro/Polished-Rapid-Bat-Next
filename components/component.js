import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="component-container">
        <div className="component-container1">
          <button className="button">Button</button>
          <button className="button">{props.button}</button>
        </div>
      </div>
      <style jsx>
        {`
          .component-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .component-container1 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  button: 'Button',
  button1: 'Button',
}

AppComponent.propTypes = {
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default AppComponent
