import React from 'react';

import 'antd/dist/antd.css';
import { notification } from 'antd';
import '../App.css'

export const Notification = (type,message,dark) => {

notification.info({
    message: !dark ? type : <div className="notification-type">{type}</div>, //style property work only on description
    description: message,
    placement: 'topLeft',
    style:{
        backgroundColor: dark ? '#151515' : null,
        color: dark ? 'white' : null,
        textEmphasisColor: 'white',
    },
    duration: 3
  });
return (
    <div>
        {null}
    </div>
)
};
