import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'
import Loading from '../../RenderProps/Loading'



const MenuContainer = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState([]);//当前SubMenu展开数组
  useEffect(() => {
    if (props.onlyOpen) {//判断是否能全部展开
      setOpenKeys([location.pathname.split('/')[1]])
    }
  }, []);

  const onSelect = (e) => {
    navigate(e.key);

  };

  // SubMenu展开/关闭事件
  const onOpenChange = (e) => {
    if (props.onlyOpen) {//判断是否能全部展开
      setOpenKeys([e[e.length - 1]])
    } else {
      setOpenKeys(e)
    }
  }


  return (
    <Loading loading={props.loading}>
      <Menu
        openKeys={openKeys}
        onClick={onSelect}
        onOpenChange={onOpenChange}
        style={{ height: 50, ...props.style }}
        mode={props.mode ? props.mode : "inline"}
        items={props.routerData}
        defaultSelectedKeys={[location.pathname]}
      />
    </Loading>
  )
}
export default MenuContainer