// NiveshPe - Extended Funds Data with Holdings Information
// Version 2 - Includes portfolio holdings data for My Funds page

const fundsDataV2 = {
    'hdfc-mid-cap': {
        name: 'HDFC Mid Cap Fund',
        category: 'Equity',
        subCategory: 'Mid Cap',
        fundType: 'Equity • Mid Cap',
        fundHouse: 'HDFC Mutual Fund',
        lockIn: 'No lock-in',

        // Holdings information (NEW)
        holdings: {
            investedAmount: 70000,       // Amount user invested
            currentValue: 95000,         // Current market value
            units: 435.8,                // Number of units held
            avgBuyPrice: 160.65,         // Average purchase NAV
            currentNAV: 218.10,          // Today's NAV (from funds-data.js)
            xirr: 30.5,                  // Annualized return
            absoluteGain: 25000,         // Gain in rupees
            percentageGain: 35.7,        // Gain in percentage
            dayChange: {                 // Today's performance
                absolute: 425,
                percentage: 0.45
            }
        },

        nav: '218.10',
        navDate: '22 Oct 2025',

        returns: {
            '1Y': { value: '+3%', label: '1 Year Returns' },
            '3Y': { value: '+27%', label: '3 Year CAGR' },
            '5Y': { value: '+30%', label: '5 Year CAGR' }
        }
    },

    'hdfc-small-cap': {
        name: 'HDFC Small Cap Fund',
        category: 'Equity',
        subCategory: 'Small Cap',
        fundType: 'Equity • Small Cap',
        fundHouse: 'HDFC Mutual Fund',
        lockIn: 'No lock-in',

        // Holdings information (NEW)
        holdings: {
            investedAmount: 53000,       // Amount user invested
            currentValue: 71250,         // Current market value
            units: 440.9,                // Number of units held
            avgBuyPrice: 120.18,         // Average purchase NAV
            currentNAV: 161.58,          // Today's NAV (from funds-data.js)
            xirr: 32.8,                  // Annualized return
            absoluteGain: 18250,         // Gain in rupees
            percentageGain: 34.4,        // Gain in percentage
            dayChange: {                 // Today's performance
                absolute: 320,
                percentage: 0.45
            }
        },

        nav: '161.58',
        navDate: '22 Oct 2025',

        returns: {
            '1Y': { value: '+2.4%', label: '1 Year Returns' },
            '3Y': { value: '+23%', label: '3 Year CAGR' },
            '5Y': { value: '+34%', label: '5 Year CAGR' }
        }
    },

    'hdfc-liquid-fund': {
        name: 'HDFC Liquid Fund',
        category: 'Debt',
        subCategory: 'Liquid',
        fundType: 'Debt • Liquid',
        fundHouse: 'HDFC Mutual Fund',
        lockIn: 'No lock-in',

        // Holdings information (NEW)
        holdings: {
            investedAmount: 33000,       // Amount user invested
            currentValue: 35625,         // Current market value
            units: 1268.4,               // Number of units held
            avgBuyPrice: 26.02,          // Average purchase NAV
            currentNAV: 28.09,           // Today's NAV (estimated)
            xirr: 7.5,                   // Annualized return
            absoluteGain: 2625,          // Gain in rupees
            percentageGain: 8.0,         // Gain in percentage
            dayChange: {                 // Today's performance
                absolute: 45,
                percentage: 0.13
            }
        },

        nav: '28.09',
        navDate: '22 Oct 2025',

        returns: {
            '1Y': { value: '+6.9%', label: '1 Year Returns' },
            '3Y': { value: '+6.8%', label: '3 Year CAGR' },
            '5Y': { value: '+6.9%', label: '5 Year CAGR' }
        }
    },

    'hdfc-balanced-advantage': {
        name: 'HDFC Balanced Advantage Fund',
        category: 'Hybrid',
        subCategory: 'Dynamic Asset Allocation',
        fundType: 'Hybrid • Balanced Advantage',
        fundHouse: 'HDFC Mutual Fund',
        lockIn: 'No lock-in',

        // Holdings information (NEW)
        holdings: {
            investedAmount: 28800,       // Amount user invested
            currentValue: 35625,         // Current market value
            units: 62.7,                 // Number of units held
            avgBuyPrice: 459.33,         // Average purchase NAV
            currentNAV: 567.93,          // Today's NAV (from funds-data.js)
            xirr: 22.5,                  // Annualized return
            absoluteGain: 6825,          // Gain in rupees
            percentageGain: 23.7,        // Gain in percentage
            dayChange: {                 // Today's performance
                absolute: 160,
                percentage: 0.45
            }
        },

        nav: '567.93',
        navDate: '22 Oct 2025',

        returns: {
            '1Y': { value: '+2.9%', label: '1 Year Returns' },
            '3Y': { value: '+20.8%', label: '3 Year CAGR' },
            '5Y': { value: '+23.8%', label: '5 Year CAGR' }
        }
    }
};

// Portfolio Summary Calculations
const portfolioSummaryV2 = {
    totalInvested: 184800,       // Sum of all invested amounts (70k + 53k + 33k + 28.8k)
    totalCurrent: 237500,        // Sum of all current values (95k + 71.25k + 35.625k + 35.625k)
    totalGain: 52700,            // Total absolute gain (25k + 18.25k + 2.625k + 6.825k)
    totalGainPercent: 28.5,      // Overall gain percentage
    xirr: 27.8,                  // Portfolio XIRR

    // Asset allocation across portfolio
    assetAllocation: {
        equity: 70.0,            // Equity percentage (Mid Cap + Small Cap)
        debt: 15.0,              // Debt percentage (HDFC Liquid)
        hybrid: 15.0             // Hybrid percentage (Balanced Advantage)
    },

    // Today's total change
    todayChange: {
        absolute: 950,           // Total gain today (425 + 320 + 45 + 160)
        percentage: 0.40         // Percentage change today
    },

    // Fund count by category
    fundCount: {
        total: 4,
        equity: 2,               // Mid Cap + Small Cap
        debt: 1,                 // Liquid
        hybrid: 1                // Balanced Advantage
    }
};

// Active SIPs Data
const sipsDataV2 = {
    'sip-monthly-diversified': {
        sipId: 'sip-monthly-diversified',
        amount: 10000,
        frequency: 'monthly',
        frequencyLabel: 'Monthly SIP',
        debitDay: 25,
        startDate: '2024-01-25',
        nextDebitDate: '2025-11-25',
        status: 'active',

        // Fund allocations (multiple funds)
        funds: [
            {
                slug: 'axis-midcap',
                name: 'Axis Midcap Fund',
                allocation: 40,  // 40% = ₹4,000
                amount: 4000
            },
            {
                slug: 'sbi-small-cap',
                name: 'SBI Small Cap Fund',
                allocation: 35,  // 35% = ₹3,500
                amount: 3500
            },
            {
                slug: 'hdfc-liquid-fund',
                name: 'HDFC Liquid Fund',
                allocation: 25,  // 25% = ₹2,500
                amount: 2500
            }
        ],

        // Performance tracking
        performance: {
            totalInvested: 110000,      // 11 installments × ₹10,000
            currentValue: 128500,       // Current market value
            absoluteGain: 18500,        // Gain in rupees
            percentageGain: 16.8,       // Gain percentage
            xirr: 19.2                  // Annualized return
        },

        // Installment tracking
        installments: {
            completed: 11,              // Installments completed
            total: null,                // null = perpetual SIP
            nextAmount: 10000,          // Next installment amount
            failed: 0,                  // Failed installment count
            skipped: 0                  // Skipped installment count
        }
    },

    'sip-weekly-liquid': {
        sipId: 'sip-weekly-liquid',
        amount: 5000,
        frequency: 'weekly',
        frequencyLabel: 'Weekly SIP',
        debitDay: 'monday',
        startDate: '2024-06-03',
        nextDebitDate: '2025-10-27',
        status: 'active',

        // Fund allocation (single fund)
        funds: [
            {
                slug: 'hdfc-liquid-fund',
                name: 'HDFC Liquid Fund',
                allocation: 100,
                amount: 5000
            }
        ],

        // Performance tracking
        performance: {
            totalInvested: 105000,      // 21 weeks × ₹5,000
            currentValue: 112875,       // Current market value
            absoluteGain: 7875,         // Gain in rupees
            percentageGain: 7.5,        // Gain percentage
            xirr: 7.8                   // Annualized return
        },

        // Installment tracking
        installments: {
            completed: 21,
            total: 52,                  // Target: 1 year (52 weeks)
            nextAmount: 5000,
            failed: 0,
            skipped: 0
        }
    },

    'sip-monthly-midcap': {
        sipId: 'sip-monthly-midcap',
        amount: 8000,
        frequency: 'monthly',
        frequencyLabel: 'Monthly SIP',
        debitDay: 5,
        startDate: '2023-06-05',
        nextDebitDate: '2025-11-05',
        status: 'paused',
        pausedUntil: '2025-12-05',

        // Fund allocation (single fund)
        funds: [
            {
                slug: 'hdfc-mid-cap',
                name: 'HDFC Mid Cap Fund',
                allocation: 100,
                amount: 8000
            }
        ],

        // Performance tracking
        performance: {
            totalInvested: 128000,      // 16 installments × ₹8,000
            currentValue: 172800,       // Current market value
            absoluteGain: 44800,        // Gain in rupees
            percentageGain: 35.0,       // Gain percentage
            xirr: 28.5                  // Annualized return
        },

        // Installment tracking
        installments: {
            completed: 16,
            total: null,                // Perpetual SIP
            nextAmount: 8000,
            failed: 0,
            skipped: 1                  // 1 installment skipped
        }
    }
};

// SIP Summary Calculations
const sipSummaryV2 = {
    totalActiveSips: 3,
    activeSips: 2,                      // Active SIPs count
    pausedSips: 1,                      // Paused SIPs count

    monthlyCommitment: 18000,           // ₹10,000 + ₹8,000 (monthly SIPs only)
    weeklyCommitment: 5000,             // ₹5,000 (weekly SIP)

    totalInvested: 343000,              // Sum of all SIP investments (110k + 105k + 128k)
    totalCurrentValue: 414175,          // Sum of all current values (128.5k + 112.875k + 172.8k)
    totalGain: 71175,                   // Total absolute gain
    totalGainPercent: 20.7,             // Overall gain percentage
    averageXIRR: 18.5,                  // Average XIRR across all SIPs

    // Next upcoming debits
    upcomingDebits: [
        { sipId: 'sip-weekly-liquid', date: '2025-10-27', amount: 5000 },
        { sipId: 'sip-monthly-midcap', date: '2025-11-05', amount: 8000 },
        { sipId: 'sip-monthly-diversified', date: '2025-11-25', amount: 10000 }
    ],

    // Status distribution
    statusCount: {
        active: 2,
        paused: 1,
        failed: 0
    }
};

// Helper function to get fund data by slug (for add-funds.html)
function getFundData(slug) {
    // Return fund data if exists, otherwise return default fund
    return fundsDataV2[slug] || fundsDataV2['hdfc-mid-cap'];
}

// Helper function to get SIP data by ID
function getSIPData(sipId) {
    return sipsDataV2[sipId] || null;
}

// Export for use in my-funds-v2.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { fundsDataV2, portfolioSummaryV2, sipsDataV2, sipSummaryV2, getFundData, getSIPData };
}
