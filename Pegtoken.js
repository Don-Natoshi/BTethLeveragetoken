const PegToken = artifacts.require('./PegToken.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('PegToken', () => {
    let pegToken

    before(async () => {
        pegToken = await PegToken.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await pegToken.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('has a name', async () => {
            const name = await pegToken.name()
            assert.equal(name, "Synthetic Alibaba Equity Tokens")
        })
    })

    describe('create Tokens', async () => {
        let result

        before(async () => {
            result = await pegToken.createTokens()
        })

        it('creates Tokens', async () => {
            // SUCCESS
            const event = result.logs[0].args
            console.log(event);

            assert.equal(event.value, 1, 'value is correct')
        })

    })
})
