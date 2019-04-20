import {Component} from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import React from "react";

// компонент высшого порядка функция которая создает компонент и обрачивает сущуствующие
const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      if (getData) {
        getData().then((data) => {
          this.setState({
            data
          })
        }).catch(this.onError)
      }
      else {
        // const  { getData } = this.props;
        this.props.getData().then((data) => {
          this.setState({
            data
          })
        }).catch(this.onError)
      }
    }

    render() {
      const {data} = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data}/>
    }
  }
};

export default withData