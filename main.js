import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Skeleton, Divider, PageHeader, Button, notification  } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./main.css";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then(res => res.json())
      .then(body => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);


  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );

    notification.open({
      message: 'Friend Request',
      description:
        'Accept or Cancel Friend Request',
      btn,
      key,
      onClose: close,
    });
  };



  const chatReq = () => {
    message.info('Successfully Request for Chatting');
  };

  const vchatReq = () => {
    message.info('Successfully Request for Video Chatting');
  };






  return (
  <>
    <PageHeader
        className="site-page-header header-color"
        onBack={() => null}
        title="Law Firm"
        subTitle=""
      />

      <Button className="padding" type="primary" onClick={openNotification}>
          See Friend Request
      </Button>




    <div
      id="scrollableDiv"
      style={{
        height: 600,
        overflow: 'auto',
        padding: '0 20px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
       
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <Button onClick={chatReq} type="primary" style={{margin: "10px"}}>Chat</Button>
              <Button onClick={vchatReq} type="primary" style={{margin: "10px"}}>Video chat</Button>
              <div>Friend</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  </>
  );
};

export default Main;