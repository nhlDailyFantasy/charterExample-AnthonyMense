import { customerPurchasesByYearObject } from '../../api/mockApi'
import { calculateRewardsPointsForTransaction, formatTime } from './DisplayCustomerPurchases'

describe('DisplayCustomerPurchases', () => {
    describe('calculateRewardPointsForTransaction', () => {
        it('should calculate rewards points earned for a transaciton', () => {
            // Amount that should return 0
            expect(calculateRewardsPointsForTransaction(25)).toBe(0)
            // 1 point for every dollar between 50-100
            expect(calculateRewardsPointsForTransaction(55.5)).toBe(5)
            // 50 points for 50-100 range, 2 points every dollar over 100
            expect(calculateRewardsPointsForTransaction(101.74)).toBe(52)
            // Doesn't break on bad input
            expect(calculateRewardsPointsForTransaction(true)).toBe(0)
            expect(calculateRewardsPointsForTransaction(null)).toBe(0)
            expect(calculateRewardsPointsForTransaction(-1)).toBe(0)
        })
    })

    describe('formatTime', () => {
        const amTime = 'December 17, 1995 00:01:00'
        const amTime2 = 'December 17, 1995 05:59:00'
        const pmTime = 'December 17, 1995 19:50:00'
        const pmTime2 = 'December 17, 1995 23:59:00'

        it('should format AM time', () => {
            expect(formatTime(new Date(amTime))).toBe('12:01 AM')
            expect(formatTime(new Date(amTime2))).toBe('5:59 AM')
        })

        it('should format AM time', () => {
            expect(formatTime(new Date(pmTime))).toBe('7:50 PM')
            expect(formatTime(new Date(pmTime2))).toBe('11:59 PM')
        })

        it('should handle bad input', () => {
            expect(formatTime(false)).toBe('7:50 PM')
            expect(formatTime(null)).toBe('7:50 PM')
        })
    })
})
