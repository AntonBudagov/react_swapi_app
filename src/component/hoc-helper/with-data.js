import {Component} from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import React from "react";

// компонент высшого порядка функция которая создает компонент и обрачивает сущуствующие
const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: [],
      error: false,
      loading: false
    };

    componentDidMount() {
      // const  { getData } = this.props;

      getData().then((data) => {
        this.setState({
          data
        })
      }).catch(this.onError)
    }

    render() {
      const {data, loading, error} = this.state;

      const hasData = !(loading || error)

      const isError = error ? <ErrorIndicator/> : null;
      const spinner = loading ? <Spinner/> : null;

      return <View {...this.props} data={data}/>
    }
  }
};

export default withData