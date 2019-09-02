/**
 * read me: 传入经svg-sprite-loader处理过的图片，重新生成svg组件
 * Created by pengtao on 2019/8/29
 */

import React, { memo } from 'react';

export default memo(props => {
  return <img src={props.component} style={props.style} alt="loading..."/>;
});