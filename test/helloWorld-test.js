import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'React';
import chai from 'chai';
import HelloWorld from '../client/helloWorld'
var expect = chai.expect;

describe('<HelloWorld />', () => {

    it('test if <HelloWorld /> components renders text and adds proper class', () => {
        const wrapper = shallow(<HelloWorld message="sasa"/>);
        expect(wrapper.html()).to.contain('sasa');
        expect(wrapper.hasClass('fa-camera-retro')).to.be.true;
    });

});