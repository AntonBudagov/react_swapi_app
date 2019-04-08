import {Component} from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import React from "react";

// компонент высшого порядка функция которая создает компонент и обрачивает сущуствующие
const withData = (View, getData) => {
  return class extends Component {
    state = {
      itemList: [],
      error: false,
      loading: false
    };

    componentDidMount() {
      const  { getData } = this.props;

      getData().then((itemList) => {
        this.setState({
          itemList
        })
      }).catch(this.onError)
    }

    render() {
      const {itemList, loading, error} = this.state;

      const hasData = !(loading || error)

      const isError = error ? <ErrorIndicator/> : null;
      const spinner = loading ? <Spinner/> : null;

      return <View {...this.props} data={itemList}/>
    }
  }
};

export default withData