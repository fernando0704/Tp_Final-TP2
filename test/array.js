const assert = require('assert')
const chai = require('chai')
const expect = chai.expect

// describe('Array', () =>{
//     describe('#toString node', () =>{
//         it('returns the strig representation including brackets', () =>{
//             const arrayToTest = [1, 2]

//             assert.equal(
//                 arrayToTest.toString(),
//                 '1,2'
//             )
//         })
//     })
// })
// // describe ('HTTP Connection', () =>{
// //     describe('#connect', () =>{
// //         it('crates a TCP connection with another server', () =>{
// //         assert.ok(http.connect.called())
// //         })
// //     })
// // })

// describe('Array', () =>{
//     describe('#toString chai', () =>{
//         it('returns the strig representation including brackets', () =>{
//             const arrayToTest = [1, 2]

//           expect(arrayToTest.toString()).to.equal('1,2')
//         })
//     })

//     describe('.length', () =>{
//         it('has the expected length', ()=>{
//             const arrayToTest = [1,2]

//             expect(arrayToTest).to.have.lengthOf(2)
//         })
//     })
// })

function arrayMinusculas(arr){
    const str = arr.toString()
    return str.toLowerCase()
}

describe ('arrayAMinusculas', () => {
    it('returns representation in lowercase', () =>{
        const result = arrayAMinusculas(['Uno', 'Dos'])
        expect(result).to.equal('uno,dos')
    })

it('uses array\'s toString', () =>{
    const arrayToTest = ['Uno', 'Dos']

    chai.spy.on(arrayToTest, 'toString')

    const result = arrayAMinusculas(arrayToTest)
    expect (arrayToTest.toString).to.have.been.called()

})
})