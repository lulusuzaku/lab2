// test 1

const myMock = jest.fn();
myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);

test('Anyan test', () => {
    expect(myMock()).toBe(10);
});

// test 2
global.fetch = require('jest-fetch-mock')
const Request = require('../src/module').Request;
describe('testing api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('vk api to be Called', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: 'some valid data from vk api' }))
        Request(null,null,fetch);
        expect(fetch).toBeCalled()
    })
})