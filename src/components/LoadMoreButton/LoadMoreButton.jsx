import React, { Component } from 'react';
import s from './LoadMoreButton.module.css';

export default class LoadMoreButton extends Component {
  render() {
    const { loadMore } = this.props;
    return (
      <button onClick={loadMore} className={s.loadMore} type="button">
        LOAD MORE
      </button>
    );
  }
}
