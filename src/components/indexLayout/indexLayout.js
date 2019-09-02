/**
 * read me: 项目主layout，用于设置主界面设置
 * Created by pengtao on 2019/8/26
 */

import React, { Component } from 'react';
import './indexLayout.less';

export default class BasicLayout extends Component {

  state = {

  };
  render () {
    // console.log(style);
    const {
      children
    } = this.props;
    return (
      <div className='mainLayout'>
        {children}
      </div>
    )
  }
}