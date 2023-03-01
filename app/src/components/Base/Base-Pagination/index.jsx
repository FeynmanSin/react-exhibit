import React from 'react';
import { Pagination } from 'antd';

const BasePagination = (props) => {
  return (
    <div>
      <Pagination
        defaultCurrent={1}
        total={props.total}
        showSizeChanger={true}
        onChange={props.onChange}
      />
    </div>
  )
}

  ;
export default BasePagination;