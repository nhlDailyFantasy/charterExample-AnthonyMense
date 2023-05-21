import { getAllCustomerPurchaseData } from "./mockApi"

describe('getAllCustomerPurchaseData function', () => {
  it('should return data', () => {
      getAllCustomerPurchaseData(true).then(data => {
        expect(data.data[0].name).toBe('Connor McDavid')
        expect(data.data[0].purchasesInfo).toBeDefined()
      })
  })

  it('should return failure on unsuccesful call', async () => {
    getAllCustomerPurchaseData(false).catch(error => {
      expect(error.error).toBe('failure')
    })
  })
})