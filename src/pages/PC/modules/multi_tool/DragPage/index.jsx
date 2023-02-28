import React, { useState, useCallback } from 'react'
import './index.scss';

import { useAsync } from '../../../../../hooks/index';
import * as request from '../../../../../utils/request'

const DragPage = () => {
  const [dragged, setDragged] = useState('');
  const [dragoverEl, setDragoverEl] = useState('');
  const { value, loading, } = useAsync(useCallback(() => request.get('/drag-position/1'), []));//获取模块位置信息

  const [data, setData] = useState([
    { id: 0, value: '你好' },
    { id: 1, value: 'hello' },
    { id: 2, value: '再见' },
  ]);//假数据用于渲染内容


  /**
   * todo 更改位置后将新的位置数组上传到后端
   */
  const changePosition = (dragId, curId) => {
    let _arr = JSON.parse(JSON.stringify(value));
    let temp = _arr[_arr.indexOf(dragId)];
    _arr[_arr.indexOf(dragId)] = _arr[_arr.indexOf(curId)];
    _arr[_arr.indexOf(curId)] = temp
  }

  /**
   * todo 当前元开始拖拽素事件
   */
  const onDragStart = (e) => {
    e.target.classList.add("drag__item-dragging");
    setDragged(e.target);
  }

  /**
   * todo 当前元素结束拖拽事件 
   */
  const onDragEnd = (e) => {
    e.target.classList.remove("drag__item-dragging");
    dragoverEl.classList.remove("drag__dropzone-dragover")
  }

  /**
   * todo 当前拖拽元素进入可放置目标容器事件 
   */
  const onDragEnter = (e) => {
    e.target.classList.add("drag__dropzone-dragover");
    setDragoverEl(e.target)
  }

  /**
  * todo 当前拖拽元素离开可放置目标容器事件 
  */
  const onDragLeave = (e) => {
    e.target.classList.remove("drag__dropzone-dragover");
  }

  /**
  * todo 当前拖拽元素处于可放置目标容器中事件 (每几百毫秒触发一次)
  */
  const onDragOver = (e) => {
    e.preventDefault();
  }

  /**
  * todo 当前拖拽元素放下在可放置目标容器事件 
  */
  const onDrop = (e) => {
    e.preventDefault();
    let currentParent = e.target.parentNode;//获取当前放置目标容器
    let draggedParent = dragged.parentNode;//获取当前拖拽中的元素
    let currentChild = e.target;//暂存当前放置目标容器中的子元素
    let dragId = dragged.dataset.id;//获取当前拖拽元素的自定义属性data-id值
    let curId = currentChild.dataset.id;//取拖当前放置目标容器中的子属性的自定义属性data-id值
    if (dragId !== curId) {
      draggedParent.removeChild(dragged);//删除拖拽中元素其自身所在的位置
      draggedParent.appendChild(currentChild);//将放置目标容器中的子节点放到拖拽中元素的原位置
      currentParent.appendChild(dragged);//添加拖拽中的元素到当前目标容器中
      changePosition(dragId, curId);
    }
  }

  return (
    <>
      <div className="drag">
        <div className="drag__container">
          {
            !loading && value.map(item => {
              return (
                <div
                  key={data[item].id}
                  className="drag__dropzone"
                  onDragEnter={onDragEnter}
                  onDragLeave={onDragLeave}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                >
                  <div
                    data-id={item}
                    className='drag__item'
                    draggable="true"
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                  >
                    {data[item].value}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default DragPage