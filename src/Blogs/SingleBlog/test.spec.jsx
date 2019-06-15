import React from 'react';
import { shallow } from 'enzyme';
import { SynchronousPromise } from 'synchronous-promise';
import SingleBlog from '.'
import { getSingleBlog } from 'Utils';

jest.mock('Utils')
getSingleBlog.mockImplementation(() => SynchronousPromise.resolve({}))

describe('<SingleBlog />', () => {
    let wrapper;
    const handleClick = jest.fn()
    afterEach(() => {
        getSingleBlog.mockClear()
    })
    it('Should render the loading', () => {
        wrapper = shallow(<SingleBlog handleClick={handleClick} />);
        expect(wrapper.find('Loading').exists()).toBe(true)
    })
    it('Should render an error message if API does not return a blog', () => {
        getSingleBlog.mockImplementationOnce(() => SynchronousPromise.reject({}))
        wrapper = shallow(<SingleBlog handleClick={handleClick} />);
        expect(wrapper.find('ErrorMessage').exists()).toBe(true)
    });
    describe('Successful API call', () => {
        beforeEach(() => {
            getSingleBlog.mockImplementationOnce(() => SynchronousPromise.resolve(
                [{
                    title: 'Title',
                    body: 'Body',
                    image: 'image.jpg',
                    created: new Date('2000/10/09')
                }]
            ))
            wrapper = shallow(<SingleBlog handleClick={handleClick} />);
        })
        it('Should render blog details once API call has finished', () => {
            expect(wrapper.find('Loading').exists()).toBe(false)
            expect(wrapper.find('BlogWrapper').exists()).toBe(true)
        })
        it('Should call the correct function on the onClick event', () => {
            wrapper.find('Label').at(1).prop('onClick')('All');
            expect(handleClick).toHaveBeenCalledTimes(1)
        })
        it('Should show the correct date formatted', () => {
            expect(wrapper.find('Label').at(0).text()).toBe('Created: 09/10/2000');
        })
    })
})