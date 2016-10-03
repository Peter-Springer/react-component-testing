import React from 'react';
import { shallow, mount } from 'enzyme';

import Grocery from './Grocery';

describe('Grocery', () => {
  it('render name in <h3> tag', () => {
    const wrapper = shallow(<Grocery name='word'/>);
    const title = <h3>word</h3>;
    expect(wrapper.contains(title)).toEqual(true);
  });
  it('should have a containing element with class .Grocery', () => {
    const wrapper = shallow(<Grocery name='testing' />);
    expect(wrapper.is('.Grocery')).toEqual(true);
  });
  it('should have a className of "starred" if is starred', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" starred={true} />
    );

    expect(wrapper.is('.starred')).toEqual(true);
  });

  it('should not have a className of "starred" if is not starred', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' starred={false}/>
    );
    expect(wrapper.is('.starred')).toEqual(false)
  });
  it('should have a className of "purchased" if is purchased', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' purchased={true}/>
    );
    expect(wrapper.is('.purchased')).toEqual(true)
  });
  it('should not have a className of "purchased" if is not purchased', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' purchased={false}/>
    );
    expect(wrapper.is('.purchased')).toEqual(false)
  });
  it('should not have a p.Grocery-quantity element if a quantity are passed as a prop', () => {
    const wrapper = shallow(
      <Grocery name='word' quantity={ null } />
    );
    expect(wrapper.find('.Grocery-quantity').length).toEqual(0);
  });
  it('should have a p.Grocery-quantity element if a quantity are passed as a prop', () => {
    const wrapper = shallow(<Grocery name='word' quantity={'17 bunches'} />
    );
    expect(wrapper.find('.Grocery-quantity').length).toEqual(1);
  });
  it('should not have a p.Grocery-quantity element if a quantity  is not passed as a prop', () => {
    const wrapper = shallow(
      <Grocery name='hello' quantity={false}/>
    );
    expect(wrapper.is('.Grocery-quantity')).toEqual(false);
  });

  it('should render correct quantity', () => {
    const wrapper = shallow(
      <Grocery quantity={3} />
    );
    expect(wrapper.find('.Grocery-quantity').text()).toEqual('Quantity: 3');
  });

  it('should have a p.Grocery-notes element if notes are passed as a prop', () => {
    const wrapper = shallow(
      <Grocery notes='sample' />
    );
    expect(wrapper.find('.Grocery-notes').length).toEqual(1);
  });
  it('should not have a p.Grocery-notes element if notes are not passed as a prop',() => {
    const wrapper = shallow(
      <Grocery />
    );
    expect(wrapper.find('.Grocery-notes').length).toEqual(0);
  });
  it('should render correct quantity', () => {
    const wrapper = shallow(
      <Grocery notes={'some text'} />
    );
    expect(wrapper.find('.Grocery-notes').text()).toEqual('some text');
  });
});

describe('.Grocery-purchase button', () => {

  it('should have a text of "Purchase" if purchase is false', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={undefined} />
    );

    expect(wrapper.find('.Grocery-purchased').text()).toEqual('Purchase');
  });

  it('should have a text of "Unpurchase" if purchase is true', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={true} />
    );

    expect(wrapper.find('.Grocery-purchased').text()).toEqual('Unpurchase');
  });

  describe('.Grocery-starred button', () => {

    it('should have a text of "Unstarred" if star is false', () => {
      const wrapper = shallow(
        <Grocery name="Bananas" starred={undefined} />
      );
      expect(wrapper.find('.Grocery-starred').text()).toEqual('Star');
    });

    it('should have a text of "Starred" if star is true', () => {
      const wrapper = shallow(
        <Grocery name="Bananas" starred={true} />
      );
      expect(wrapper.find('.Grocery-starred').text()).toEqual('Unstar');
    });
  });
  describe('should test  the button functionality', () => {
    it('should call the onPurchase prop when clicked', () => {
      const onPurchaseMock = jest.fn();
      console.log('Bananass')
      const wrapper = mount(
        <Grocery
          name="Bananas"
          purchased={true}
          onPurchase={onPurchaseMock}
        />
      );
      wrapper.find('.Grocery-purchased').simulate('click');
      expect(onPurchaseMock).toBeCalled();
    });
    it('should call the onStar prop when clicked', () => {
      const onStarMock = jest.fn();
      const wrapper = mount(
        <Grocery
          name="Bananas"
          starred={true}
          onStar={onStarMock}
        />
      );
      wrapper.find('.Grocery-starred').simulate('click');
      expect(onStarMock).toBeCalled();
    });
    it('should call the onDelete prop when clicked', () => {
      const onDeleteMock = jest.fn();
      const wrapper = mount(
        <Grocery
          name="Bananas"
          onDelete={onDeleteMock}
        />
      );
      wrapper.find('.remove-button').simulate('click');
      expect(onDeleteMock).toBeCalled();
    });
  });
});
