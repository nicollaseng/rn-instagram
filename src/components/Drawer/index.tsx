import * as React from 'react';

import {connect} from 'react-redux';

import {colors} from '../../global';
import {Container} from '../../global/general';

import {Content, ContentTop, List, Item, Top, Title, Btn} from './styles';

import {translate} from '../../locales';

const DrawerComponent = (props: any) => {
  return (
    <Container
      colors={[colors.primary, colors.secondary]}
      style={{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}>
      <ContentTop>
        <Top>
          <Title>Menu</Title>
        </Top>
      </ContentTop>
      <Content>
        <List>
          <Btn onPress={() => false}>
            <Item>{translate(['drawer', 'logout'])}</Item>
          </Btn>
        </List>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({});

const mapStateToDispatch = {};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(DrawerComponent);
