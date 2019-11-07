import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import { ConnectProps, ConnectState } from '@/models/connect';
import { DictionaryResult } from '@/utils/interface';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';


interface OrderListProps extends ConnectProps {
  saveLoading: boolean;
}

const Demo = (props: OrderListProps) => {
  
  useEffect(() => {

  }, []);

  return (
    <PageHeaderWrapper title={false}>
        <Card className={styles.container} loading={this.props.loading}>

        </Card>
    </PageHeaderWrapper>
  );
};
export default connect(({ nodelNameSpace }: ConnectState) => ({
  nodelNameSpace
}))(Demo);
