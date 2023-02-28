import React, { useState, useEffect, useCallback, useRef } from "react";
import BaseButton from "../../Base/Base-Button";
import BaseSearch from "../../Base/Base-Search";
import BaseTable from "../../Base/Base-Table";
import BasePagination from "../../Base/Base-Pagination";
import BaseModal from "../../Base/Base-Modal";
import BaseForm from "../../Base/Base-Form";

import Loading from '../../RenderProps/Loading';

const _data = []
for (let i = 0; i < 100; i++) {
  _data.push({
    key: i + 1 + new Date(),
    name: `Edward King ${i + 1}`,
    age: i + 1,
    address: `London, Park Lane no. ${i + 1}`,
  });
}



const ListContainer = (props) => {
  const [total, setTotal] = useState(0);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [responseData, setResponseData] = useState(_data);
  const [openModal, setOpenModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const formRef = useRef();
  useEffect(() => {
    setDataSource(responseData.slice((page - 1) * pageSize, page * pageSize));
    setTotal(Number(responseData.length));
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [page, pageSize]);


  // 分页器事件
  const pageOnChange = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  }

  // 搜索栏事件
  const onSearch = (data) => {
    console.log(data);
  }

  // 弹窗事件
  const handleOk = useCallback(async () => {
    setConfirmLoading(true);
    try {
      let formData = await formRef.current.submitData();
      console.log('handleOk', formData)
      setTimeout(() => {
        setOpenModal(false);
        setConfirmLoading(false);
      }, 2000);

    }
    catch {
      setConfirmLoading(false);
    }

  }, []);

  const handleCancel = useCallback(() => {
    setOpenModal(false);
  }, []);


  return (
    <div style={styles.root}>
      <Loading size="large" loading={loading}>
        <div style={styles.header}>
          <BaseButton
            text='新增'
            onClick={() => setOpenModal(true)}
          />
          <div style={{ display: 'flex' }}>
            <BaseSearch onSearch={onSearch} searchData={props.searchData} />
          </div>
        </div>
        <div style={styles.content}>

          <BaseTable columns={props.columns} dataSource={dataSource} />
        </div>
        <div style={styles.footer}>
          {
            total > 0 && <BasePagination total={total} onChange={pageOnChange} />
          }
        </div>
        {
          openModal && (
            <BaseModal
              handleOk={handleOk}
              handleCancel={handleCancel}
              confirmLoading={confirmLoading}
              open={openModal}
            >
              <BaseForm ref={formRef} formConfig={props.modalFormConfig} />
            </BaseModal>
          )
        }
      </Loading>
    </div >
  )
};



const styles = {
  root: {
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'column',
    height: '100%',
    boxSize: 'border-box',
    padding: 16,
  },
  header: {
    display: 'flex',
    flexWarp: 'no-warp',
    justifyContent: 'space-between',
    alginItems: 'center',
    marginBottom: 16
  },
  content: {
    flex: 1
  },
  footer: {
    marginTop: 24,
    height: 40,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}

export default ListContainer;
