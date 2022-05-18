const assert = require('assert')
const chai = require('chai')
const expect = chai.expect

describe('Array', () =>{
    describe('#toString node', () =>{
        it('returns the strig representation including brackets', () =>{
            const arrayToTest = [1, 2]

            assert.equal(
                arrayToTest.toString(),
                '1,2'
            )
        })
    })
})
// describe ('HTTP Connection', () =>{
//     describe('#connect', () =>{
//         it('crates a TCP connection with another server', () =>{
//         assert.ok(http.connect.called())
//         })
//     })
// })

describe('Array', () =>{
    describe('#toString chai', () =>{
        it('returns the strig representation including brackets', () =>{
            const arrayToTest = [1, 2]

          expect(arrayToTest.toString()).to.equal('1,2')
        })
    })

    describe('.length', () =>{
        it('has the expected length', ()=>{
            const arrayToTest = [1,2]

            expect(arrayToTest).to.have.lengthOf(2)
        })
    })
})