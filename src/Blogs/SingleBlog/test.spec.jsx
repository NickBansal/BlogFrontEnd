import React from 'react';
import { shallow } from 'enzyme';
import { SynchronousPromise } from 'synchronous-promise';
import SingleBlog from '.'
import { getSingleBlog } from 'Utils';

jest.mock('Utils')
getSingleBlog.mockImplementation(() => SynchronousPromise.resolve({}))

describe('<SingleBlog />', () => {
    let wrapper;
    afterEach(() => {
        getSingleBlog.mockClear()
    })
    it('Should render the loading', () => {
        wrapper = shallow(<SingleBlog />);
        expect(wrapper.find('Loading').exists()).toBe(true)
    })
    it('Should render blog details once API call has finished', () => {
        getSingleBlog.mockImplementationOnce(() => SynchronousPromise.resolve(
            [{
                title: 'Title',
                body: 'Body',
                image: 'image.jpg'
            }]
        ))
        wrapper = shallow(<SingleBlog />);
        expect(wrapper.find('Loading').exists()).toBe(false)
        expect(wrapper.find('BlogWrapper').exists()).toBe(true)
    })
    it('Should render an error message if API does not return a blog', () => {
        getSingleBlog.mockImplementationOnce(() => SynchronousPromise.reject({}))
        wrapper = shallow(<SingleBlog />);
        expect(wrapper.find('ErrorMessage').exists()).toBe(true)
    })
})