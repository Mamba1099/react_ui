import React from "react";
import IsMobileContext from "./Context";

const INITIAL_STATE = {
  size: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};

const withIsMobileViewProvider = Component => {
    class withIsMobileViewProvider extends React.Component {
        constructor(props) {
            super(props);
            this.state = INITIAL_STATE
        }

        componentDidMount () {
            window.addEventListener("resize", this.handleWindowSizeChange);
        }

        handleWindowSizeChange = () => {
            this.setState({
                size: {width: window.innerWidth, height: window.innerHeight}
            });
        };

        render () {
            const isMobileView = this.state.size.width <= 600;
            return (
                <IsMobileContext.Provider value={isMobileView}>
                    <Component {...this.props} />
                </IsMobileContext.Provider>
            );
        }    
    }
    return withIsMobileViewProvider;
}

export default withIsMobileViewProvider;
