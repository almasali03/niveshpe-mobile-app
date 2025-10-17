// NiveshPe - Comprehensive Mutual Funds Data
// All data based on October 2025 research

const fundsData = {
    'hdfc-large-cap': {
        name: 'HDFC Large Cap Fund',
        category: 'Large Cap Fund',
        subCategory: 'Equity • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '845.32',
        navDate: '16 Oct 2025',
        categoryRank: '#8 in Large Cap',

        returns: {
            '1Y': { value: '+18.5%', label: '1 Year Returns' },
            '3Y': { value: '+19.2%', label: '3 Year CAGR' },
            '5Y': { value: '+21%', label: '5 Year CAGR' },
            'Max': { value: '+23.8%', label: 'Since Launch' }
        },
        defaultPeriod: '5Y',

        badges: [
            { text: 'Growth Focused', class: 'badge-risk' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Min. Lumpsum: ₹5,000', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹38,245 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.82%',
            expenseSubtext: 'Direct Plan',
            exitLoad: '1%',
            exitSubtext: '< 1 year',
            fundAge: '18 Yrs',
            ageSubtext: 'Since 2007'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 103, 106, 108, 105, 110, 112, 115, 113, 116, 118, 117, 118.5],
                benchmark: [100, 102, 104, 106, 104, 108, 110, 112, 111, 113, 115, 114, 116],
                category: [100, 101, 103, 105, 103, 107, 109, 110, 109, 112, 113, 112, 114]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 105, 110, 115, 120, 125, 132, 138, 145, 152, 158, 165],
                benchmark: [100, 104, 108, 112, 116, 121, 127, 133, 139, 145, 151, 158],
                category: [100, 103, 107, 110, 114, 119, 124, 129, 135, 140, 146, 152]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 115, 130, 145, 155, 170, 190, 210, 235, 262],
                benchmark: [100, 112, 125, 138, 148, 162, 178, 195, 215, 240],
                category: [100, 110, 122, 135, 145, 158, 172, 188, 207, 228]
            },
            'Max': {
                labels: ['2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021', '2023', '2025'],
                fund: [100, 120, 150, 190, 245, 310, 390, 495, 620, 780],
                benchmark: [100, 115, 140, 175, 225, 285, 355, 450, 565, 710],
                category: [100, 112, 135, 168, 215, 270, 338, 425, 535, 672]
            }
        },

        performance: {
            comparison: {
                fund: '21.0%',
                benchmark: '19.8%',
                benchmarkName: 'NIFTY 50',
                category: '18.5%'
            },
            note: 'This fund has consistently outperformed its benchmark and category average over the past 5 years.'
        },

        overview: {
            objective: 'The fund aims to generate long-term capital appreciation by investing in large cap equity stocks.',
            why: 'HDFC Large Cap Fund focuses on established, blue-chip companies with strong fundamentals. It\'s ideal for investors seeking steady growth with relatively lower volatility compared to mid or small cap funds.',
            whoShould: 'This fund is suitable for investors with a long-term horizon (5+ years) seeking capital appreciation through investment in large, established companies.'
        },

        details: {
            launchDate: 'Jan 01, 2007',
            category: 'Large Cap Fund',
            benchmark: 'NIFTY 50 TRI',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '96.8%',
                debt: '0%',
                cash: '3.2%'
            },
            topHoldings: [
                { name: 'HDFC Bank Ltd', percent: '8.5%' },
                { name: 'Reliance Industries', percent: '7.2%' },
                { name: 'ICICI Bank Ltd', percent: '6.8%' },
                { name: 'Infosys Ltd', percent: '5.4%' },
                { name: 'TCS Ltd', percent: '5.1%' }
            ],
            sectors: [
                { name: 'Financial Services', percent: '28.5%' },
                { name: 'Information Technology', percent: '18.2%' },
                { name: 'Energy', percent: '12.4%' },
                { name: 'Consumer Goods', percent: '10.8%' },
                { name: 'Others', percent: '26.9%' }
            ]
        },

        risk: {
            level: 'high',
            label: 'Very High Risk',
            standardDeviation: '18.5%',
            sharpeRatio: '1.24',
            description: 'Large cap funds invest primarily in top 100 companies by market cap, offering relatively lower volatility compared to mid and small cap funds.'
        },

        costs: {
            expenseRatioDirect: '0.82%',
            expenseRatioRegular: '1.45%',
            exitLoad: '1% if redeemed < 1 year',
            taxLongTerm: '10% above ₹1 lakh',
            taxShortTerm: '15%',
            note: 'Lower expense ratio means higher returns. We recommend Direct plans for better returns.'
        },

        manager: {
            name: 'Chirag Setalvad',
            initials: 'CS',
            experience: '15+ years experience • MBA, CFA',
            bio: 'Chirag Setalvad is the Head of Equities at HDFC Asset Management Company and has been managing this fund since 2018. He brings over 15 years of investment experience.'
        }
    },

    'hdfc-mid-cap': {
        name: 'HDFC Mid Cap Fund',
        category: 'Mid Cap Fund',
        subCategory: 'Equity • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '218.10',
        navDate: '15 Oct 2025',
        categoryRank: '#24 in Mid Cap',

        returns: {
            '1Y': { value: '+3%', label: '1 Year Returns' },
            '3Y': { value: '+27%', label: '3 Year CAGR' },
            '5Y': { value: '+30%', label: '5 Year CAGR' },
            'Max': { value: '+18%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '5Y',

        badges: [
            { text: 'Growth Focused', class: 'badge-risk' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Min. Lumpsum: ₹5,000', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹84,855 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.71%',
            expenseSubtext: 'Direct Plan',
            exitLoad: '1%',
            exitSubtext: '< 1 year',
            fundAge: '20 Yrs',
            ageSubtext: 'Since 2005'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 101, 102, 101, 99, 101, 102, 103, 102, 103, 104, 103, 103],
                benchmark: [100, 100, 101, 100, 98, 100, 101, 102, 101, 102, 103, 102, 102],
                category: [100, 100, 101, 100, 98, 99, 100, 101, 100, 101, 102, 101, 101]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 108, 116, 124, 132, 142, 154, 166, 180, 195, 210, 227],
                benchmark: [100, 106, 112, 118, 126, 136, 146, 158, 172, 186, 200, 215],
                category: [100, 105, 110, 116, 122, 130, 140, 152, 165, 178, 192, 207]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 125, 155, 180, 195, 220, 260, 305, 350, 395],
                benchmark: [100, 120, 145, 170, 185, 210, 245, 285, 330, 375],
                category: [100, 118, 142, 165, 180, 205, 238, 275, 318, 362]
            },
            'Max': {
                labels: ['2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021', '2023', '2025'],
                fund: [100, 150, 180, 220, 290, 380, 500, 650, 820, 1050, 1320],
                benchmark: [100, 142, 165, 200, 265, 350, 465, 605, 765, 980, 1240],
                category: [100, 138, 160, 192, 252, 332, 442, 575, 730, 935, 1185]
            }
        },

        performance: {
            comparison: {
                fund: '30.0%',
                benchmark: '28.2%',
                benchmarkName: 'NIFTY Midcap 150',
                category: '27.5%'
            },
            note: 'This fund has delivered strong returns, outperforming both benchmark and category average over 5 years.'
        },

        overview: {
            objective: 'The fund aims to generate capital appreciation by investing in mid-cap companies with strong growth potential.',
            why: 'HDFC Mid Cap Fund invests in companies ranked 101-250 by market cap, offering higher growth potential than large caps with moderate risk. Ideal for investors seeking aggressive growth.',
            whoShould: 'Suitable for investors with high risk appetite and long-term horizon (5+ years) seeking high growth potential through mid-cap equities.'
        },

        details: {
            launchDate: 'Jun 30, 2005',
            category: 'Mid Cap Fund',
            benchmark: 'NIFTY Midcap 150 TRI',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '97.2%',
                debt: '0%',
                cash: '2.8%'
            },
            topHoldings: [
                { name: 'Kalyan Jewellers', percent: '4.2%' },
                { name: 'Tube Investments', percent: '3.8%' },
                { name: 'Jyothy Labs', percent: '3.5%' },
                { name: 'AU Small Finance Bank', percent: '3.2%' },
                { name: 'Prestige Estates', percent: '3.1%' }
            ],
            sectors: [
                { name: 'Financial Services', percent: '22.4%' },
                { name: 'Consumer Discretionary', percent: '18.6%' },
                { name: 'Industrials', percent: '16.8%' },
                { name: 'Information Technology', percent: '12.2%' },
                { name: 'Others', percent: '30.0%' }
            ]
        },

        risk: {
            level: 'high',
            label: 'Very High Risk',
            standardDeviation: '24.5%',
            sharpeRatio: '1.18',
            description: 'Mid cap funds invest in companies ranked 101-250 by market cap, offering higher growth potential but with increased volatility compared to large caps.'
        },

        costs: {
            expenseRatioDirect: '0.71%',
            expenseRatioRegular: '1.55%',
            exitLoad: '1% if redeemed < 1 year',
            taxLongTerm: '10% above ₹1 lakh',
            taxShortTerm: '15%',
            note: 'Lower expense ratio means higher returns. We recommend Direct plans for better returns.'
        },

        manager: {
            name: 'Chirag Setalvad',
            initials: 'CS',
            experience: '15+ years experience • MBA, CFA',
            bio: 'Chirag Setalvad is the Head of Equities at HDFC Asset Management Company and has extensive experience in managing mid-cap portfolios.'
        }
    },

    'hdfc-small-cap': {
        name: 'HDFC Small Cap Fund',
        category: 'Small Cap Fund',
        subCategory: 'Equity • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '161.58',
        navDate: '7 Oct 2025',
        categoryRank: '#12 in Small Cap',

        returns: {
            '1Y': { value: '+2.4%', label: '1 Year Returns' },
            '3Y': { value: '+23%', label: '3 Year CAGR' },
            '5Y': { value: '+34%', label: '5 Year CAGR' },
            'Max': { value: '+17%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '5Y',

        badges: [
            { text: 'High Growth Potential', class: 'badge-risk' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Min. Lumpsum: ₹5,000', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹36,294 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.69%',
            expenseSubtext: 'Direct Plan',
            exitLoad: '1%',
            exitSubtext: '< 1 year',
            fundAge: '18 Yrs',
            ageSubtext: 'Since 2007'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 102, 101, 99, 97, 99, 100, 102, 101, 102, 103, 102, 102.4],
                benchmark: [100, 101, 100, 98, 96, 98, 99, 101, 100, 101, 102, 101, 101.5],
                category: [100, 101, 100, 98, 96, 97, 98, 100, 99, 100, 101, 100, 101]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 110, 120, 132, 145, 160, 178, 198, 220, 245, 272, 302],
                benchmark: [100, 108, 116, 126, 138, 152, 168, 186, 207, 230, 255, 282],
                category: [100, 106, 114, 124, 135, 148, 164, 182, 202, 224, 248, 275]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 135, 175, 210, 230, 270, 325, 390, 460, 540],
                benchmark: [100, 130, 165, 200, 220, 258, 310, 372, 438, 515],
                category: [100, 128, 160, 192, 212, 248, 298, 358, 422, 495]
            },
            'Max': {
                labels: ['2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024', '2025'],
                fund: [100, 135, 180, 245, 340, 465, 620, 840, 1150, 1420],
                benchmark: [100, 130, 170, 230, 320, 440, 590, 800, 1095, 1350],
                category: [100, 128, 165, 220, 305, 420, 565, 765, 1050, 1295]
            }
        },

        performance: {
            comparison: {
                fund: '34.0%',
                benchmark: '32.5%',
                benchmarkName: 'NIFTY Smallcap 250',
                category: '31.8%'
            },
            note: 'This fund has shown exceptional long-term performance, consistently outperforming the category average.'
        },

        overview: {
            objective: 'To generate long-term capital appreciation by investing predominantly in small cap equity stocks.',
            why: 'HDFC Small Cap Fund targets companies ranked 251+ by market cap, offering the highest growth potential among equity categories. Best for aggressive investors comfortable with volatility.',
            whoShould: 'Suitable for investors with very high risk appetite and long investment horizon (7+ years) seeking maximum capital appreciation.'
        },

        details: {
            launchDate: 'Apr 01, 2008',
            category: 'Small Cap Fund',
            benchmark: 'NIFTY Smallcap 250 TRI',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '96.5%',
                debt: '0%',
                cash: '3.5%'
            },
            topHoldings: [
                { name: 'RateGain Travel Technologies', percent: '3.1%' },
                { name: 'Sonata Software', percent: '2.9%' },
                { name: 'Motilal Oswal Financial', percent: '2.7%' },
                { name: 'Dixon Technologies', percent: '2.6%' },
                { name: 'Central Depository Services', percent: '2.5%' }
            ],
            sectors: [
                { name: 'Industrials', percent: '24.2%' },
                { name: 'Consumer Discretionary', percent: '20.5%' },
                { name: 'Financial Services', percent: '18.8%' },
                { name: 'Information Technology', percent: '14.6%' },
                { name: 'Others', percent: '21.9%' }
            ]
        },

        risk: {
            level: 'high',
            label: 'Very High Risk',
            standardDeviation: '28.8%',
            sharpeRatio: '1.12',
            description: 'Small cap funds invest in companies ranked 251+ by market cap, offering very high growth potential but with significantly higher volatility. Recommended for long-term investors only.'
        },

        costs: {
            expenseRatioDirect: '0.69%',
            expenseRatioRegular: '1.60%',
            exitLoad: '1% if redeemed < 1 year',
            taxLongTerm: '10% above ₹1 lakh',
            taxShortTerm: '15%',
            note: 'Lower expense ratio means higher returns. We recommend Direct plans for better returns.'
        },

        manager: {
            name: 'Chirag Setalvad',
            initials: 'CS',
            experience: '15+ years experience • MBA, CFA',
            bio: 'Chirag Setalvad is the Head of Equities at HDFC Asset Management Company and specializes in identifying high-growth small cap opportunities.'
        }
    },

    'hdfc-flexi-cap': {
        name: 'HDFC Flexi Cap Fund',
        category: 'Flexi Cap Fund',
        subCategory: 'Equity • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '1,142.65',
        navDate: '16 Oct 2025',
        categoryRank: '#12 in Flexi Cap',

        returns: {
            '1Y': { value: '+22.8%', label: '1 Year Returns' },
            '3Y': { value: '+26.5%', label: '3 Year CAGR' },
            '5Y': { value: '+28.2%', label: '5 Year CAGR' },
            'Max': { value: '+18.5%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '5Y',

        badges: [
            { text: 'Growth Focused', class: 'badge-risk' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Min. Lumpsum: ₹5,000', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹82,450 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.74%',
            expenseSubtext: 'Direct Plan',
            exitLoad: '1%',
            exitSubtext: '< 1 year',
            fundAge: '14 Yrs',
            ageSubtext: 'Since 2011'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 104, 107, 110, 108, 112, 115, 118, 117, 120, 122, 121, 122.8],
                benchmark: [100, 103, 105, 108, 106, 110, 112, 115, 114, 117, 119, 118, 120],
                category: [100, 102, 104, 106, 104, 108, 110, 113, 112, 115, 117, 116, 118]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 107, 115, 123, 132, 143, 156, 170, 185, 202, 218, 237],
                benchmark: [100, 105, 112, 119, 127, 137, 149, 162, 177, 193, 209, 227],
                category: [100, 104, 110, 117, 125, 135, 146, 159, 173, 188, 203, 220]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 122, 150, 175, 188, 215, 255, 298, 348, 403],
                benchmark: [100, 118, 142, 165, 178, 205, 242, 282, 328, 380],
                category: [100, 116, 138, 160, 172, 198, 234, 273, 317, 367]
            },
            'Max': {
                labels: ['2011', '2013', '2015', '2017', '2019', '2021', '2023', '2025'],
                fund: [100, 140, 190, 265, 360, 495, 660, 870],
                benchmark: [100, 135, 180, 250, 340, 470, 630, 830],
                category: [100, 132, 175, 238, 325, 450, 605, 795]
            }
        },

        performance: {
            comparison: {
                fund: '28.2%',
                benchmark: '26.5%',
                benchmarkName: 'NIFTY 500',
                category: '25.8%'
            },
            note: 'This fund has consistently outperformed its benchmark by investing flexibly across market caps, delivering strong risk-adjusted returns.'
        },

        overview: {
            objective: 'To generate long-term capital appreciation by investing across market caps - large, mid, and small cap stocks.',
            why: 'HDFC Flexi Cap Fund offers flexibility to invest across all market capitalizations, allowing the fund manager to dynamically allocate based on opportunities. This makes it suitable for investors seeking high growth with active management.',
            whoShould: 'Suitable for investors with high risk appetite and long-term horizon (5+ years) seeking growth across the market spectrum with tactical allocation.'
        },

        details: {
            launchDate: 'Jan 01, 2011',
            category: 'Flexi Cap Fund',
            benchmark: 'NIFTY 500 TRI',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '97.8%',
                debt: '0%',
                cash: '2.2%'
            },
            topHoldings: [
                { name: 'HDFC Bank Ltd', percent: '7.8%' },
                { name: 'ICICI Bank Ltd', percent: '6.5%' },
                { name: 'Reliance Industries', percent: '5.9%' },
                { name: 'Infosys Ltd', percent: '4.8%' },
                { name: 'Bharti Airtel', percent: '4.2%' }
            ],
            sectors: [
                { name: 'Financial Services', percent: '32.5%' },
                { name: 'Information Technology', percent: '16.8%' },
                { name: 'Energy', percent: '14.2%' },
                { name: 'Consumer Goods', percent: '11.5%' },
                { name: 'Others', percent: '25.0%' }
            ]
        },

        risk: {
            level: 'high',
            label: 'Very High Risk',
            standardDeviation: '21.2%',
            sharpeRatio: '1.28',
            description: 'Flexi cap funds have the flexibility to invest across market caps, offering diversified exposure with moderate to high volatility.'
        },

        costs: {
            expenseRatioDirect: '0.74%',
            expenseRatioRegular: '1.52%',
            exitLoad: '1% if redeemed < 1 year',
            taxLongTerm: '10% above ₹1 lakh',
            taxShortTerm: '15%',
            note: 'Lower expense ratio means higher returns. We recommend Direct plans for better returns.'
        },

        manager: {
            name: 'Prashant Jain',
            initials: 'PJ',
            experience: '25+ years experience • MBA, CFA',
            bio: 'Prashant Jain has been managing this fund since its inception and is known for his long-term value investing approach. He has delivered consistent outperformance over his career.'
        }
    },

    'hdfc-multi-cap': {
        name: 'HDFC Multi Cap Fund',
        category: 'Multi Cap Fund',
        subCategory: 'Equity • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '19.82',
        navDate: '16 Oct 2025',
        categoryRank: '#18 in Multi Cap',

        returns: {
            '1Y': { value: '+12.8%', label: '1 Year Returns' },
            '3Y': { value: '+21.7%', label: '3 Year CAGR' },
            '5Y': { value: '+24.5%', label: '5 Year CAGR' },
            'Max': { value: '+19.0%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '5Y',

        badges: [
            { text: 'Diversified Growth', class: 'badge-risk' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Min. Lumpsum: ₹5,000', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹18,270 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.73%',
            expenseSubtext: 'Direct Plan',
            exitLoad: '1%',
            exitSubtext: '< 1 year',
            fundAge: '9 Yrs',
            ageSubtext: 'Since 2016'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 102, 104, 106, 104, 107, 109, 111, 110, 112, 113, 112, 112.8],
                benchmark: [100, 101, 103, 105, 103, 106, 108, 110, 109, 111, 112, 111, 111.5],
                category: [100, 101, 102, 104, 102, 105, 107, 109, 108, 110, 111, 110, 111]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 106, 112, 118, 125, 133, 142, 152, 163, 175, 187, 200],
                benchmark: [100, 105, 110, 115, 121, 128, 137, 146, 157, 168, 180, 193],
                category: [100, 104, 109, 114, 120, 127, 135, 144, 154, 165, 176, 189]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 118, 142, 165, 178, 202, 235, 272, 310, 352],
                benchmark: [100, 115, 136, 158, 170, 193, 224, 258, 295, 335],
                category: [100, 113, 132, 153, 165, 188, 218, 252, 288, 327]
            },
            'Max': {
                labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
                fund: [100, 125, 145, 180, 205, 265, 320, 405, 515, 640],
                benchmark: [100, 120, 138, 172, 195, 252, 305, 385, 490, 610],
                category: [100, 118, 135, 168, 190, 245, 295, 375, 475, 590]
            }
        },

        performance: {
            comparison: {
                fund: '24.5%',
                benchmark: '23.2%',
                benchmarkName: 'NIFTY 500',
                category: '22.8%'
            },
            note: 'This fund provides diversified exposure across market caps, consistently delivering above-category returns through active allocation.'
        },

        overview: {
            objective: 'To generate long-term capital appreciation by investing in a well-diversified portfolio of equity stocks across large, mid, and small cap segments.',
            why: 'HDFC Multi Cap Fund offers true diversification across all market capitalizations with flexibility to adjust exposure based on market opportunities. It\'s ideal for investors seeking broad market participation with active management.',
            whoShould: 'Suitable for investors with high risk appetite and long-term horizon (5+ years) seeking diversified equity exposure across market caps.'
        },

        details: {
            launchDate: 'Jan 15, 2016',
            category: 'Multi Cap Fund',
            benchmark: 'NIFTY 500 TRI',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '97.5%',
                debt: '0%',
                cash: '2.5%'
            },
            topHoldings: [
                { name: 'HDFC Bank Ltd', percent: '6.8%' },
                { name: 'ICICI Bank Ltd', percent: '5.9%' },
                { name: 'Reliance Industries', percent: '5.2%' },
                { name: 'Infosys Ltd', percent: '4.5%' },
                { name: 'Bajaj Finance', percent: '3.8%' }
            ],
            sectors: [
                { name: 'Financial Services', percent: '30.2%' },
                { name: 'Information Technology', percent: '17.5%' },
                { name: 'Consumer Discretionary', percent: '14.8%' },
                { name: 'Energy', percent: '12.5%' },
                { name: 'Others', percent: '25.0%' }
            ]
        },

        risk: {
            level: 'high',
            label: 'Very High Risk',
            standardDeviation: '22.5%',
            sharpeRatio: '1.15',
            description: 'Multi cap funds invest across all market capitalizations, offering diversified exposure with moderate to high volatility depending on the allocation mix.'
        },

        costs: {
            expenseRatioDirect: '0.73%',
            expenseRatioRegular: '1.58%',
            exitLoad: '1% if redeemed < 1 year',
            taxLongTerm: '10% above ₹1 lakh',
            taxShortTerm: '15%',
            note: 'Lower expense ratio means higher returns. We recommend Direct plans for better returns.'
        },

        manager: {
            name: 'Gopal Agrawal',
            initials: 'GA',
            experience: '18+ years experience • MBA, CFA',
            bio: 'Gopal Agrawal manages the fund with a focus on identifying quality businesses across market caps. His investment approach combines fundamental analysis with macroeconomic insights.'
        }
    },

    'hdfc-focused-30': {
        name: 'HDFC Focused 30 Fund',
        category: 'Focused Fund',
        subCategory: 'Equity • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '268.64',
        navDate: '16 Oct 2025',
        categoryRank: '#6 in Focused',

        returns: {
            '1Y': { value: '+7.7%', label: '1 Year Returns' },
            '3Y': { value: '+23.3%', label: '3 Year CAGR' },
            '5Y': { value: '+29.6%', label: '5 Year CAGR' },
            'Max': { value: '+16.0%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '5Y',

        badges: [
            { text: 'High Conviction (30 stocks)', class: 'badge-risk' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Min. Lumpsum: ₹5,000', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹23,533 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.57%',
            expenseSubtext: 'Direct Plan',
            exitLoad: '1%',
            exitSubtext: '< 1 year',
            fundAge: '25 Yrs',
            ageSubtext: 'Since 2000'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 101, 102, 103, 101, 103, 104, 106, 105, 107, 108, 107, 107.7],
                benchmark: [100, 101, 102, 102, 100, 102, 103, 105, 104, 106, 107, 106, 106.5],
                category: [100, 100, 101, 101, 99, 101, 102, 104, 103, 105, 106, 105, 106]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 107, 114, 121, 129, 139, 150, 162, 175, 189, 203, 218],
                benchmark: [100, 105, 111, 117, 124, 133, 143, 155, 168, 182, 196, 211],
                category: [100, 104, 109, 115, 122, 131, 141, 152, 164, 177, 191, 206]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 120, 148, 172, 188, 215, 252, 295, 345, 398],
                benchmark: [100, 117, 142, 165, 180, 206, 241, 282, 328, 380],
                category: [100, 115, 138, 160, 175, 200, 234, 273, 318, 368]
            },
            'Max': {
                labels: ['2000', '2003', '2006', '2009', '2012', '2015', '2018', '2021', '2024', '2025'],
                fund: [100, 140, 210, 280, 395, 550, 745, 1020, 1380, 1650],
                benchmark: [100, 135, 198, 265, 370, 520, 710, 975, 1320, 1580],
                category: [100, 132, 192, 255, 360, 505, 685, 945, 1280, 1530]
            }
        },

        performance: {
            comparison: {
                fund: '29.6%',
                benchmark: '28.1%',
                benchmarkName: 'NIFTY 500',
                category: '27.8%'
            },
            note: 'This focused fund invests in only 30 high-conviction stocks, delivering superior returns through concentrated positioning.'
        },

        overview: {
            objective: 'To generate long-term capital appreciation by investing in a concentrated portfolio of maximum 30 stocks selected through rigorous research.',
            why: 'HDFC Focused 30 Fund follows a high-conviction investment strategy, investing in only 30 best ideas across market caps. This concentrated approach can deliver superior returns but requires patience and risk tolerance.',
            whoShould: 'Suitable for investors with high risk appetite and long-term horizon (7+ years) who believe in focused, high-conviction investing.'
        },

        details: {
            launchDate: 'Jan 01, 2000',
            category: 'Focused Fund',
            benchmark: 'NIFTY 500 TRI',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '98.2%',
                debt: '0%',
                cash: '1.8%'
            },
            topHoldings: [
                { name: 'HDFC Bank Ltd', percent: '9.5%' },
                { name: 'ICICI Bank Ltd', percent: '8.2%' },
                { name: 'Reliance Industries', percent: '7.8%' },
                { name: 'TCS Ltd', percent: '6.5%' },
                { name: 'Infosys Ltd', percent: '5.9%' }
            ],
            sectors: [
                { name: 'Financial Services', percent: '35.8%' },
                { name: 'Information Technology', percent: '19.5%' },
                { name: 'Energy', percent: '13.2%' },
                { name: 'Consumer Goods', percent: '12.8%' },
                { name: 'Others', percent: '18.7%' }
            ]
        },

        risk: {
            level: 'high',
            label: 'Very High Risk',
            standardDeviation: '23.8%',
            sharpeRatio: '1.21',
            description: 'Focused funds invest in a concentrated portfolio of maximum 30 stocks, leading to higher volatility but potential for superior returns.'
        },

        costs: {
            expenseRatioDirect: '0.57%',
            expenseRatioRegular: '1.42%',
            exitLoad: '1% if redeemed < 1 year',
            taxLongTerm: '10% above ₹1 lakh',
            taxShortTerm: '15%',
            note: 'Lower expense ratio means higher returns. We recommend Direct plans for better returns.'
        },

        manager: {
            name: 'Roshi Jain & Dhruv Muchhal',
            initials: 'RJ',
            experience: '12+ years experience • MBA, CFA',
            bio: 'Roshi Jain and Dhruv Muchhal co-manage this fund with a focus on high-conviction investing. They select only the best 30 stocks through rigorous bottom-up research and fundamental analysis.'
        }
    },

    'hdfc-elss-tax-saver': {
        name: 'HDFC ELSS Tax Saver',
        category: 'ELSS',
        subCategory: 'Equity • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '1,535.57',
        navDate: '16 Oct 2025',
        categoryRank: '#15 in ELSS',

        returns: {
            '1Y': { value: '+4.5%', label: '1 Year Returns' },
            '3Y': { value: '+21.7%', label: '3 Year CAGR' },
            '5Y': { value: '+25.9%', label: '5 Year CAGR' },
            'Max': { value: '+15.5%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '5Y',

        badges: [
            { text: 'Tax Benefit (80C)', class: 'badge-tax' },
            { text: 'Lock-in: 3 years', class: 'badge-lockin' },
            { text: 'Min. SIP: ₹500', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹8,752 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.62%',
            expenseSubtext: 'Direct Plan',
            exitLoad: 'None',
            exitSubtext: '3-yr lock-in',
            fundAge: '24 Yrs',
            ageSubtext: 'Since 2001'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 101, 101, 102, 100, 101, 102, 103, 102, 103, 104, 104, 104.5],
                benchmark: [100, 101, 102, 102, 100, 102, 103, 104, 103, 105, 106, 105, 105.5],
                category: [100, 100, 101, 101, 99, 101, 102, 103, 102, 104, 105, 104, 104]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 106, 112, 118, 125, 133, 142, 152, 163, 175, 187, 200],
                benchmark: [100, 105, 111, 117, 124, 133, 143, 155, 168, 182, 196, 211],
                category: [100, 104, 109, 115, 122, 131, 141, 152, 164, 177, 191, 206]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 118, 143, 166, 180, 205, 238, 275, 318, 365],
                benchmark: [100, 117, 142, 165, 180, 206, 241, 282, 328, 380],
                category: [100, 115, 138, 160, 175, 200, 234, 273, 318, 368]
            },
            'Max': {
                labels: ['2001', '2004', '2007', '2010', '2013', '2016', '2019', '2022', '2025'],
                fund: [100, 145, 225, 330, 485, 690, 960, 1280, 1680],
                benchmark: [100, 140, 215, 315, 465, 665, 925, 1240, 1630],
                category: [100, 138, 210, 305, 450, 645, 900, 1205, 1585]
            }
        },

        performance: {
            comparison: {
                fund: '25.9%',
                benchmark: '27.2%',
                benchmarkName: 'NIFTY 500',
                category: '26.5%'
            },
            note: 'This ELSS fund offers dual benefits - tax savings under Section 80C and long-term wealth creation through equity exposure.'
        },

        overview: {
            objective: 'To generate long-term capital appreciation and tax benefits by investing primarily in equity and equity-related securities with a mandatory 3-year lock-in period.',
            why: 'HDFC ELSS Tax Saver combines tax savings of up to ₹1.5 lakh under Section 80C with equity growth potential. The 3-year lock-in period encourages disciplined long-term investing and is the shortest among all tax-saving instruments.',
            whoShould: 'Suitable for investors seeking tax savings under Section 80C with high risk appetite and ability to stay invested for minimum 3 years.'
        },

        details: {
            launchDate: 'Mar 31, 2001',
            category: 'ELSS',
            benchmark: 'NIFTY 500 TRI',
            minSIP: '₹500',
            minLumpsum: '₹500',
            lockIn: '3 Years',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '96.8%',
                debt: '0%',
                cash: '3.2%'
            },
            topHoldings: [
                { name: 'HDFC Bank Ltd', percent: '7.5%' },
                { name: 'ICICI Bank Ltd', percent: '6.8%' },
                { name: 'Reliance Industries', percent: '6.2%' },
                { name: 'Infosys Ltd', percent: '5.5%' },
                { name: 'TCS Ltd', percent: '4.9%' }
            ],
            sectors: [
                { name: 'Financial Services', percent: '31.5%' },
                { name: 'Information Technology', percent: '18.8%' },
                { name: 'Energy', percent: '13.5%' },
                { name: 'Consumer Goods', percent: '11.2%' },
                { name: 'Others', percent: '25.0%' }
            ]
        },

        risk: {
            level: 'high',
            label: 'Very High Risk',
            standardDeviation: '20.5%',
            sharpeRatio: '1.19',
            description: 'ELSS funds invest primarily in equities with a mandatory 3-year lock-in period, offering tax benefits along with market-linked returns.'
        },

        costs: {
            expenseRatioDirect: '0.62%',
            expenseRatioRegular: '1.45%',
            exitLoad: 'None (3-year lock-in applies)',
            taxLongTerm: '10% above ₹1 lakh',
            taxShortTerm: 'N/A (3-year lock-in)',
            note: 'Investments up to ₹1.5 lakh per year qualify for tax deduction under Section 80C. Direct plans recommended for lower costs.'
        },

        manager: {
            name: 'Roshi Jain & Dhruv Muchhal',
            initials: 'RJ',
            experience: '12+ years experience • MBA, CFA',
            bio: 'Roshi Jain and Dhruv Muchhal manage this ELSS fund with a focus on quality stocks across market caps. Their disciplined investment approach aims to deliver consistent tax-efficient returns.'
        }
    },

    'hdfc-liquid-fund': {
        name: 'HDFC Liquid Fund',
        category: 'Liquid Fund',
        subCategory: 'Debt • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '5260.05',
        navDate: '16 Oct 2025',
        categoryRank: '#35 in Liquid',

        returns: {
            '1Y': { value: '+6.9%', label: '1 Year Returns' },
            '3Y': { value: '+7.1%', label: '3 Year CAGR' },
            '5Y': { value: '+5.7%', label: '5 Year CAGR' },
            'Max': { value: '+6.8%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '1Y',

        badges: [
            { text: 'Low Risk', class: 'badge-safe' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'High Liquidity', class: 'badge-liquidity' }
        ],

        quickStats: {
            aum: '₹63,201 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.20%',
            expenseSubtext: 'Direct Plan',
            exitLoad: '0.0070%',
            exitSubtext: '< 7 days',
            fundAge: '25 Yrs',
            ageSubtext: 'Since 2000'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 100.6, 101.1, 101.7, 102.3, 102.9, 103.5, 104.1, 104.6, 105.2, 105.8, 106.3, 106.9],
                benchmark: [100, 100.5, 101.0, 101.6, 102.2, 102.8, 103.3, 103.9, 104.4, 105.0, 105.5, 106.1, 106.6],
                category: [100, 100.5, 101.0, 101.5, 102.0, 102.6, 103.1, 103.7, 104.2, 104.8, 105.3, 105.9, 106.4]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 101.2, 102.5, 103.8, 105.1, 106.4, 107.8, 109.2, 110.6, 112.0, 113.5, 115.0],
                benchmark: [100, 101.0, 102.2, 103.4, 104.6, 105.9, 107.2, 108.5, 109.8, 111.2, 112.6, 114.0],
                category: [100, 101.1, 102.3, 103.5, 104.7, 106.0, 107.3, 108.6, 110.0, 111.4, 112.8, 114.2]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 102.8, 105.7, 108.6, 111.6, 114.7, 117.9, 121.2, 124.6, 128.1],
                benchmark: [100, 102.5, 105.2, 107.9, 110.7, 113.6, 116.6, 119.7, 122.9, 126.2],
                category: [100, 102.6, 105.3, 108.1, 111.0, 114.0, 117.1, 120.3, 123.6, 127.0]
            },
            'Max': {
                labels: ['2000', '2003', '2006', '2009', '2012', '2015', '2018', '2021', '2024', '2025'],
                fund: [100, 122, 149, 182, 222, 271, 330, 403, 492, 528],
                benchmark: [100, 120, 145, 176, 214, 260, 316, 385, 470, 505],
                category: [100, 121, 147, 179, 218, 265, 323, 394, 481, 516]
            }
        },

        performance: {
            comparison: {
                fund: '6.9%',
                benchmark: '6.7%',
                benchmarkName: 'CRISIL Liquid Fund Index',
                category: '6.8%'
            },
            note: 'This fund is ideal for parking surplus funds for very short periods with minimal risk and high liquidity.'
        },

        overview: {
            objective: 'To generate income through investments in money market and short-term debt securities with residual maturity of up to 91 days.',
            why: 'HDFC Liquid Fund is designed for investors seeking to park surplus funds for very short periods (1 day to 3 months) with minimal risk. It invests in highly liquid money market instruments and treasury bills, offering better returns than savings accounts with very low risk.',
            whoShould: 'Suitable for investors seeking to park surplus funds for short periods (few days to 3 months) with minimal risk and high liquidity. Ideal for emergency funds and short-term cash management.'
        },

        details: {
            launchDate: 'Oct 17, 2000',
            category: 'Liquid Fund',
            benchmark: 'CRISIL Liquid Fund Index',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '0%',
                debt: '96.5%',
                cash: '3.5%'
            },
            topHoldings: [
                { name: 'Treasury Bills (91-day)', percent: '28.5%' },
                { name: 'Commercial Paper - HDFC Ltd', percent: '8.2%' },
                { name: 'Certificate of Deposit - ICICI Bank', percent: '7.8%' },
                { name: 'Commercial Paper - Bajaj Finance', percent: '6.5%' },
                { name: 'Certificate of Deposit - SBI', percent: '5.9%' }
            ],
            sectors: [
                { name: 'Treasury Bills', percent: '32.5%' },
                { name: 'Commercial Papers', percent: '28.8%' },
                { name: 'Certificate of Deposits', percent: '24.6%' },
                { name: 'Reverse Repo', percent: '10.6%' },
                { name: 'Others', percent: '3.5%' }
            ]
        },

        risk: {
            level: 'low',
            label: 'Low Risk',
            standardDeviation: '0.8%',
            sharpeRatio: '0.95',
            description: 'Liquid funds invest in very short-term debt instruments with maturity up to 91 days, offering minimal interest rate risk and high liquidity. Suitable for parking surplus funds.'
        },

        costs: {
            expenseRatioDirect: '0.20%',
            expenseRatioRegular: '0.43%',
            exitLoad: '0.0070% if redeemed < 7 days',
            taxLongTerm: 'At slab rate (>3 years)',
            taxShortTerm: 'At slab rate (<3 years)',
            note: 'Debt funds held for more than 3 years qualify for long-term capital gains. For investments before Apr 2023, LTCG was taxed at 20% with indexation benefit.'
        },

        manager: {
            name: 'Dhruv Muchhal',
            initials: 'DM',
            experience: '12+ years experience • MBA, CFA',
            bio: 'Dhruv Muchhal is a Senior Fund Manager at HDFC Asset Management Company, specializing in debt and money market instruments with expertise in managing liquid funds.'
        }
    },

    'hdfc-ultra-short-term': {
        name: 'HDFC Ultra Short Term Fund',
        category: 'Ultra Short Duration Fund',
        subCategory: 'Debt • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '15.18',
        navDate: '16 Oct 2025',
        categoryRank: '#18 in Ultra Short',

        returns: {
            '1Y': { value: '+7.6%', label: '1 Year Returns' },
            '3Y': { value: '+7.4%', label: '3 Year CAGR' },
            '5Y': { value: '+6.1%', label: '5 Year CAGR' },
            'Max': { value: '+6.8%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '3Y',

        badges: [
            { text: 'Low Risk', class: 'badge-safe' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Min. Lumpsum: ₹5,000', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹18,005 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.37%',
            expenseSubtext: 'Direct Plan',
            exitLoad: 'Nil',
            exitSubtext: 'No exit load',
            fundAge: '7 Yrs',
            ageSubtext: 'Since 2018'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 100.6, 101.3, 101.9, 102.5, 103.2, 103.8, 104.5, 105.1, 105.7, 106.4, 107.0, 107.6],
                benchmark: [100, 100.6, 101.2, 101.8, 102.4, 103.0, 103.6, 104.2, 104.9, 105.5, 106.1, 106.7, 107.3],
                category: [100, 100.5, 101.1, 101.7, 102.3, 102.9, 103.5, 104.1, 104.7, 105.3, 105.9, 106.5, 107.1]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 101.8, 103.6, 105.5, 107.4, 109.4, 111.4, 113.5, 115.6, 117.8, 120.0, 122.3],
                benchmark: [100, 101.7, 103.4, 105.2, 107.0, 108.9, 110.8, 112.8, 114.8, 116.9, 119.0, 121.2],
                category: [100, 101.6, 103.3, 105.0, 106.7, 108.5, 110.3, 112.2, 114.1, 116.1, 118.1, 120.2]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 103.0, 106.1, 109.3, 112.6, 116.0, 119.5, 123.1, 126.8, 130.6],
                benchmark: [100, 102.8, 105.7, 108.7, 111.8, 115.0, 118.3, 121.7, 125.2, 128.8],
                category: [100, 102.7, 105.5, 108.4, 111.4, 114.5, 117.7, 121.0, 124.4, 127.9]
            },
            'Max': {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
                fund: [100, 107, 115, 124, 134, 145, 157, 169],
                benchmark: [100, 106, 114, 122, 131, 142, 153, 165],
                category: [100, 106, 113, 121, 130, 141, 152, 164]
            }
        },

        performance: {
            comparison: {
                fund: '7.4%',
                benchmark: '7.1%',
                benchmarkName: 'CRISIL Ultra Short Term Debt Index',
                category: '7.0%'
            },
            note: 'This fund offers slightly higher returns than liquid funds with minimal additional risk, suitable for parking funds for 2-6 months.'
        },

        overview: {
            objective: 'To generate income through investments in debt and money market instruments with Macaulay duration of the portfolio between 3 months to 6 months.',
            why: 'HDFC Ultra Short Term Fund is designed for investors seeking to park funds for 2-6 months with better returns than liquid funds. It invests in high-quality short-term debt instruments, offering a balance between returns and low risk.',
            whoShould: 'Suitable for investors seeking to park surplus funds for short periods (2-6 months) with low risk. Ideal for those who want marginally higher returns than liquid funds with minimal additional risk.'
        },

        details: {
            launchDate: 'Sep 25, 2018',
            category: 'Ultra Short Duration Fund',
            benchmark: 'CRISIL Ultra Short Term Debt Index',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '0%',
                debt: '97.2%',
                cash: '2.8%'
            },
            topHoldings: [
                { name: 'Commercial Paper - HDFC Ltd', percent: '9.5%' },
                { name: 'Certificate of Deposit - ICICI Bank', percent: '8.8%' },
                { name: 'Corporate Bond - Bajaj Finance (AA+)', percent: '7.2%' },
                { name: 'Commercial Paper - L&T Finance', percent: '6.8%' },
                { name: 'Treasury Bills (182-day)', percent: '6.5%' }
            ],
            sectors: [
                { name: 'Commercial Papers', percent: '35.5%' },
                { name: 'Certificate of Deposits', percent: '28.2%' },
                { name: 'Corporate Bonds', percent: '22.8%' },
                { name: 'Treasury Bills', percent: '10.7%' },
                { name: 'Others', percent: '2.8%' }
            ]
        },

        risk: {
            level: 'low',
            label: 'Low Risk',
            standardDeviation: '1.2%',
            sharpeRatio: '1.05',
            description: 'Ultra short duration funds invest in debt instruments with maturity of 3-6 months, offering very low interest rate risk with slightly higher returns than liquid funds.'
        },

        costs: {
            expenseRatioDirect: '0.37%',
            expenseRatioRegular: '0.70%',
            exitLoad: 'Nil',
            taxLongTerm: 'At slab rate (>3 years)',
            taxShortTerm: 'At slab rate (<3 years)',
            note: 'Debt funds held for more than 3 years qualify for long-term capital gains. For investments before Apr 2023, LTCG was taxed at 20% with indexation benefit.'
        },

        manager: {
            name: 'Anil Bamboli & Praveen Jain',
            initials: 'AB',
            experience: '14+ years experience • MBA, CFA',
            bio: 'Anil Bamboli and Praveen Jain co-manage this fund with extensive experience in short-duration debt strategies. They focus on high-quality instruments with optimal risk-return profiles.'
        }
    },

    'hdfc-short-term-debt': {
        name: 'HDFC Short Term Debt Fund',
        category: 'Short Duration Fund',
        subCategory: 'Debt • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '33.77',
        navDate: '16 Oct 2025',
        categoryRank: '#22 in Short Duration',

        returns: {
            '1Y': { value: '+8.5%', label: '1 Year Returns' },
            '3Y': { value: '+8.3%', label: '3 Year CAGR' },
            '5Y': { value: '+6.8%', label: '5 Year CAGR' },
            'Max': { value: '+8.1%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '3Y',

        badges: [
            { text: 'Moderately Low Risk', class: 'badge-safe' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Min. Lumpsum: ₹5,000', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹17,622 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.45%',
            expenseSubtext: 'Direct Plan',
            exitLoad: 'Nil',
            exitSubtext: 'No exit load',
            fundAge: '15 Yrs',
            ageSubtext: 'Since 2010'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 100.7, 101.4, 102.1, 102.8, 103.5, 104.2, 104.9, 105.6, 106.4, 107.1, 107.8, 108.5],
                benchmark: [100, 100.7, 101.3, 102.0, 102.7, 103.3, 104.0, 104.7, 105.4, 106.1, 106.8, 107.5, 108.2],
                category: [100, 100.6, 101.3, 101.9, 102.6, 103.2, 103.9, 104.5, 105.2, 105.9, 106.5, 107.2, 107.9]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 102.1, 104.2, 106.4, 108.6, 110.9, 113.3, 115.7, 118.2, 120.8, 123.4, 126.1],
                benchmark: [100, 102.0, 104.0, 106.1, 108.2, 110.4, 112.7, 115.0, 117.4, 119.8, 122.3, 124.9],
                category: [100, 101.9, 103.8, 105.8, 107.8, 109.9, 112.0, 114.2, 116.5, 118.8, 121.2, 123.6]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 103.4, 106.9, 110.5, 114.2, 118.0, 121.9, 125.9, 130.0, 134.3],
                benchmark: [100, 103.2, 106.5, 110.0, 113.6, 117.3, 121.1, 125.0, 129.0, 133.1],
                category: [100, 103.1, 106.3, 109.6, 113.0, 116.5, 120.1, 123.8, 127.6, 131.5]
            },
            'Max': {
                labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024', '2025'],
                fund: [100, 117, 137, 160, 188, 220, 258, 302, 323],
                benchmark: [100, 116, 135, 157, 184, 215, 252, 295, 315],
                category: [100, 115, 134, 156, 182, 213, 249, 291, 311]
            }
        },

        performance: {
            comparison: {
                fund: '8.3%',
                benchmark: '8.0%',
                benchmarkName: 'CRISIL Short Term Bond Fund Index',
                category: '7.8%'
            },
            note: 'This fund offers attractive returns for investors with 1-3 year investment horizon, with moderate interest rate risk.'
        },

        overview: {
            objective: 'To generate income and capital appreciation through investments in debt and money market instruments such that the Macaulay duration of the portfolio is between 1 year to 3 years.',
            why: 'HDFC Short Term Debt Fund is designed for investors with 1-3 year investment horizon seeking stable returns with moderate risk. It invests in a diversified portfolio of corporate bonds, government securities, and money market instruments.',
            whoShould: 'Suitable for investors with low to moderate risk appetite and 1-3 year investment horizon. Ideal for those seeking better returns than bank fixed deposits with moderate risk.'
        },

        details: {
            launchDate: 'Jun 25, 2010',
            category: 'Short Duration Fund',
            benchmark: 'CRISIL Short Term Bond Fund Index',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '0%',
                debt: '95.8%',
                cash: '4.2%'
            },
            topHoldings: [
                { name: 'Corporate Bond - HDFC Bank (AAA)', percent: '8.5%' },
                { name: 'Government Security - 7.18% 2033', percent: '7.8%' },
                { name: 'Corporate Bond - Bajaj Finance (AAA)', percent: '6.9%' },
                { name: 'Corporate Bond - ICICI Bank (AAA)', percent: '6.2%' },
                { name: 'State Development Loan - Maharashtra', percent: '5.8%' }
            ],
            sectors: [
                { name: 'Corporate Bonds (AAA)', percent: '42.5%' },
                { name: 'Government Securities', percent: '28.8%' },
                { name: 'State Development Loans', percent: '15.2%' },
                { name: 'Commercial Papers/CDs', percent: '9.3%' },
                { name: 'Others', percent: '4.2%' }
            ]
        },

        risk: {
            level: 'low',
            label: 'Moderately Low Risk',
            standardDeviation: '2.8%',
            sharpeRatio: '1.15',
            description: 'Short duration funds invest in debt instruments with portfolio duration of 1-3 years, offering moderate interest rate risk with attractive returns for medium-term investors.'
        },

        costs: {
            expenseRatioDirect: '0.45%',
            expenseRatioRegular: '0.73%',
            exitLoad: 'Nil',
            taxLongTerm: 'At slab rate (>3 years)',
            taxShortTerm: 'At slab rate (<3 years)',
            note: 'Debt funds held for more than 3 years qualify for long-term capital gains. For investments before Apr 2023, LTCG was taxed at 20% with indexation benefit.'
        },

        manager: {
            name: 'Anil Bamboli',
            initials: 'AB',
            experience: '16+ years experience • MBA, CFA',
            bio: 'Anil Bamboli is a Senior Fund Manager at HDFC Asset Management Company with extensive experience in managing short to medium duration debt portfolios. He focuses on credit quality and duration management.'
        }
    },

    'hdfc-floating-rate-debt': {
        name: 'HDFC Floating Rate Debt Fund',
        category: 'Floater Fund',
        subCategory: 'Debt • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '51.67',
        navDate: '16 Oct 2025',
        categoryRank: '#1 in Floater',

        returns: {
            '1Y': { value: '+8.8%', label: '1 Year Returns' },
            '3Y': { value: '+8.1%', label: '3 Year CAGR' },
            '5Y': { value: '+6.9%', label: '5 Year CAGR' },
            'Max': { value: '+7.9%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '3Y',

        badges: [
            { text: 'Low Interest Rate Risk', class: 'badge-safe' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Min. Lumpsum: ₹5,000', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹15,754 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.26%',
            expenseSubtext: 'Direct Plan',
            exitLoad: 'Nil',
            exitSubtext: 'No exit load',
            fundAge: '15 Yrs',
            ageSubtext: 'Since 2010'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 100.7, 101.5, 102.2, 102.9, 103.7, 104.4, 105.1, 105.9, 106.6, 107.4, 108.1, 108.8],
                benchmark: [100, 100.7, 101.4, 102.1, 102.8, 103.5, 104.2, 104.9, 105.6, 106.3, 107.0, 107.7, 108.4],
                category: [100, 100.6, 101.3, 102.0, 102.6, 103.3, 104.0, 104.6, 105.3, 106.0, 106.7, 107.3, 108.0]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 102.0, 104.1, 106.2, 108.4, 110.6, 112.9, 115.2, 117.6, 120.0, 122.5, 125.0],
                benchmark: [100, 101.9, 103.9, 105.9, 108.0, 110.1, 112.3, 114.5, 116.8, 119.1, 121.5, 124.0],
                category: [100, 101.8, 103.7, 105.6, 107.6, 109.6, 111.7, 113.8, 116.0, 118.2, 120.5, 122.8]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 103.5, 107.1, 110.8, 114.6, 118.5, 122.5, 126.6, 130.8, 135.1],
                benchmark: [100, 103.3, 106.7, 110.2, 113.8, 117.5, 121.3, 125.2, 129.2, 133.3],
                category: [100, 103.2, 106.5, 109.9, 113.4, 117.0, 120.7, 124.5, 128.4, 132.4]
            },
            'Max': {
                labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024', '2025'],
                fund: [100, 117, 137, 161, 189, 222, 260, 305, 326],
                benchmark: [100, 116, 135, 158, 185, 217, 254, 298, 318],
                category: [100, 115, 134, 156, 183, 214, 251, 294, 314]
            }
        },

        performance: {
            comparison: {
                fund: '8.1%',
                benchmark: '7.8%',
                benchmarkName: 'CRISIL Floating Rate Index',
                category: '7.6%'
            },
            note: 'This fund invests in floating rate instruments, offering protection against rising interest rates. Ranked #1 in its category.'
        },

        overview: {
            objective: 'To generate regular income by predominantly investing in floating rate debt instruments and money market securities.',
            why: 'HDFC Floating Rate Debt Fund invests primarily in floating rate bonds where coupon rates are reset periodically based on market rates. This provides natural protection against rising interest rates, making it ideal for uncertain rate environments.',
            whoShould: 'Suitable for investors with low to moderate risk appetite seeking protection against interest rate volatility. Ideal for 1-3 year investment horizon, especially when interest rates are expected to rise.'
        },

        details: {
            launchDate: 'Jun 01, 2010',
            category: 'Floater Fund',
            benchmark: 'CRISIL Floating Rate Index',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '0%',
                debt: '96.8%',
                cash: '3.2%'
            },
            topHoldings: [
                { name: 'Floating Rate Bond - HDFC Bank', percent: '9.2%' },
                { name: 'Floating Rate Bond - ICICI Bank', percent: '8.5%' },
                { name: 'Floating Rate Bond - SBI', percent: '7.8%' },
                { name: 'Floating Rate Bond - Bajaj Finance', percent: '6.9%' },
                { name: 'Floating Rate Bond - LIC Housing', percent: '6.2%' }
            ],
            sectors: [
                { name: 'Floating Rate Bonds (AAA)', percent: '68.5%' },
                { name: 'Floating Rate Bonds (AA+)', percent: '18.8%' },
                { name: 'Money Market Instruments', percent: '9.5%' },
                { name: 'Others', percent: '3.2%' }
            ]
        },

        risk: {
            level: 'low',
            label: 'Low Risk',
            standardDeviation: '1.5%',
            sharpeRatio: '1.22',
            description: 'Floater funds invest in floating rate instruments where interest rates reset periodically, offering very low interest rate risk and protection against rising rates.'
        },

        costs: {
            expenseRatioDirect: '0.26%',
            expenseRatioRegular: '0.58%',
            exitLoad: 'Nil',
            taxLongTerm: 'At slab rate (>3 years)',
            taxShortTerm: 'At slab rate (<3 years)',
            note: 'Debt funds held for more than 3 years qualify for long-term capital gains. For investments before Apr 2023, LTCG was taxed at 20% with indexation benefit.'
        },

        manager: {
            name: 'Anil Bamboli',
            initials: 'AB',
            experience: '16+ years experience • MBA, CFA',
            bio: 'Anil Bamboli manages this fund with a focus on high-quality floating rate instruments from top-rated issuers. His expertise in interest rate management helps deliver consistent returns.'
        }
    },

    'hdfc-corporate-bond': {
        name: 'HDFC Corporate Bond Fund',
        category: 'Corporate Bond Fund',
        subCategory: 'Debt • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '29.85',
        navDate: '16 Oct 2025',
        categoryRank: '#12 in Corporate Bond',

        returns: {
            '1Y': { value: '+8.2%', label: '1 Year Returns' },
            '3Y': { value: '+7.9%', label: '3 Year CAGR' },
            '5Y': { value: '+6.5%', label: '5 Year CAGR' },
            'Max': { value: '+8.4%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '3Y',

        badges: [
            { text: 'Moderately Low Risk', class: 'badge-safe' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Min. Lumpsum: ₹5,000', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹35,801 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.36%',
            expenseSubtext: 'Direct Plan',
            exitLoad: 'Nil',
            exitSubtext: 'No exit load',
            fundAge: '12 Yrs',
            ageSubtext: 'Since 2013'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 100.7, 101.4, 102.0, 102.7, 103.4, 104.1, 104.8, 105.5, 106.2, 106.9, 107.5, 108.2],
                benchmark: [100, 100.6, 101.3, 101.9, 102.6, 103.2, 103.9, 104.5, 105.2, 105.9, 106.5, 107.2, 107.8],
                category: [100, 100.6, 101.2, 101.9, 102.5, 103.1, 103.8, 104.4, 105.0, 105.7, 106.3, 107.0, 107.6]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 102.0, 103.9, 105.9, 108.0, 110.1, 112.3, 114.5, 116.8, 119.1, 121.5, 124.0],
                benchmark: [100, 101.9, 103.8, 105.7, 107.7, 109.7, 111.8, 113.9, 116.1, 118.3, 120.6, 122.9],
                category: [100, 101.8, 103.6, 105.5, 107.4, 109.4, 111.4, 113.5, 115.6, 117.8, 120.0, 122.3]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 103.2, 106.5, 110.0, 113.5, 117.2, 121.0, 124.9, 128.9, 133.0],
                benchmark: [100, 103.1, 106.3, 109.6, 113.0, 116.5, 120.1, 123.8, 127.6, 131.5],
                category: [100, 103.0, 106.1, 109.3, 112.6, 116.0, 119.5, 123.1, 126.8, 130.6]
            },
            'Max': {
                labels: ['2013', '2015', '2017', '2019', '2021', '2023', '2025'],
                fund: [100, 118, 139, 164, 194, 229, 271],
                benchmark: [100, 117, 137, 161, 190, 224, 265],
                category: [100, 116, 136, 159, 187, 221, 261]
            }
        },

        performance: {
            comparison: {
                fund: '7.9%',
                benchmark: '7.6%',
                benchmarkName: 'NIFTY Corporate Bond Index',
                category: '7.5%'
            },
            note: 'This fund invests in high-quality corporate bonds (AA+ and above), offering better returns than government securities with moderate credit risk.'
        },

        overview: {
            objective: 'To generate optimal returns with high liquidity through active management of a portfolio substantially constituted of high-quality corporate bonds.',
            why: 'HDFC Corporate Bond Fund invests primarily in top-rated corporate bonds (AA+ and above), offering higher returns than government securities with moderate credit risk. It\'s ideal for investors seeking stable income from high-quality corporate issuers.',
            whoShould: 'Suitable for investors with low to moderate risk appetite and 2-3 year investment horizon. Ideal for those seeking better returns than bank FDs with focus on high-quality corporate bonds.'
        },

        details: {
            launchDate: 'Apr 10, 2013',
            category: 'Corporate Bond Fund',
            benchmark: 'NIFTY Corporate Bond Index',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '0%',
                debt: '96.2%',
                cash: '3.8%'
            },
            topHoldings: [
                { name: 'Corporate Bond - HDFC Bank (AAA)', percent: '9.5%' },
                { name: 'Corporate Bond - ICICI Bank (AAA)', percent: '8.8%' },
                { name: 'Corporate Bond - Bajaj Finance (AAA)', percent: '7.5%' },
                { name: 'Corporate Bond - SBI (AAA)', percent: '6.9%' },
                { name: 'Corporate Bond - Power Finance Corp (AAA)', percent: '6.2%' }
            ],
            sectors: [
                { name: 'Corporate Bonds (AAA)', percent: '72.5%' },
                { name: 'Corporate Bonds (AA+)', percent: '18.8%' },
                { name: 'Money Market Instruments', percent: '4.9%' },
                { name: 'Others', percent: '3.8%' }
            ]
        },

        risk: {
            level: 'low',
            label: 'Moderately Low Risk',
            standardDeviation: '2.2%',
            sharpeRatio: '1.18',
            description: 'Corporate bond funds invest in high-quality bonds (AA+ and above) from top-rated corporates, offering low to moderate credit risk with attractive returns.'
        },

        costs: {
            expenseRatioDirect: '0.36%',
            expenseRatioRegular: '0.68%',
            exitLoad: 'Nil',
            taxLongTerm: 'At slab rate (>3 years)',
            taxShortTerm: 'At slab rate (<3 years)',
            note: 'Debt funds held for more than 3 years qualify for long-term capital gains. For investments before Apr 2023, LTCG was taxed at 20% with indexation benefit.'
        },

        manager: {
            name: 'Anupam Joshi',
            initials: 'AJ',
            experience: '15+ years experience • MBA, CFA',
            bio: 'Anupam Joshi is a Senior Fund Manager at HDFC Asset Management Company specializing in corporate credit. He focuses on rigorous credit analysis and portfolio construction with top-rated issuers.'
        }
    },

    'hdfc-banking-psu-debt': {
        name: 'HDFC Banking & PSU Debt Fund',
        category: 'Banking & PSU Fund',
        subCategory: 'Debt • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '24.19',
        navDate: '16 Oct 2025',
        categoryRank: '#28 in Banking & PSU',

        returns: {
            '1Y': { value: '+10.4%', label: '1 Year Returns' },
            '3Y': { value: '+8.2%', label: '3 Year CAGR' },
            '5Y': { value: '+7.1%', label: '5 Year CAGR' },
            'Max': { value: '+8.8%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '3Y',

        badges: [
            { text: 'Low Risk', class: 'badge-safe' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Min. Lumpsum: ₹5,000', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹5,935 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.39%',
            expenseSubtext: 'Direct Plan',
            exitLoad: 'Nil',
            exitSubtext: 'No exit load',
            fundAge: '10 Yrs',
            ageSubtext: 'Since 2015'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 100.9, 101.7, 102.6, 103.5, 104.3, 105.2, 106.1, 106.9, 107.8, 108.7, 109.5, 110.4],
                benchmark: [100, 100.8, 101.6, 102.4, 103.2, 104.0, 104.8, 105.6, 106.5, 107.3, 108.1, 108.9, 109.8],
                category: [100, 100.8, 101.5, 102.3, 103.1, 103.9, 104.7, 105.5, 106.3, 107.1, 107.9, 108.7, 109.5]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 102.0, 104.1, 106.2, 108.4, 110.6, 112.9, 115.2, 117.6, 120.0, 122.5, 125.0],
                benchmark: [100, 101.9, 103.9, 105.9, 108.0, 110.1, 112.3, 114.5, 116.8, 119.1, 121.5, 124.0],
                category: [100, 101.8, 103.7, 105.6, 107.6, 109.6, 111.7, 113.8, 116.0, 118.2, 120.5, 122.8]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 103.5, 107.2, 111.0, 114.9, 119.0, 123.2, 127.5, 132.0, 136.6],
                benchmark: [100, 103.4, 106.9, 110.5, 114.2, 118.1, 122.1, 126.2, 130.4, 134.8],
                category: [100, 103.3, 106.7, 110.2, 113.8, 117.5, 121.3, 125.2, 129.2, 133.3]
            },
            'Max': {
                labels: ['2015', '2017', '2019', '2021', '2023', '2025'],
                fund: [100, 119, 142, 169, 201, 239],
                benchmark: [100, 118, 140, 166, 197, 234],
                category: [100, 117, 138, 164, 194, 230]
            }
        },

        performance: {
            comparison: {
                fund: '8.2%',
                benchmark: '7.9%',
                benchmarkName: 'NIFTY Banking & PSU Debt Index',
                category: '7.7%'
            },
            note: 'This fund invests in bonds issued by banks and public sector undertakings, offering very low credit risk with moderate returns.'
        },

        overview: {
            objective: 'To generate income and capital appreciation through investments predominantly in debt instruments of banks, Public Sector Undertakings, and Public Financial Institutions.',
            why: 'HDFC Banking & PSU Debt Fund invests in bonds issued by banks and government-owned companies, offering very low credit risk. These issuers are considered highly stable, making it suitable for conservative investors seeking predictable returns.',
            whoShould: 'Suitable for conservative investors with low risk appetite and 2-3 year investment horizon. Ideal for those seeking very low credit risk through investments in banks and PSUs.'
        },

        details: {
            launchDate: 'May 15, 2015',
            category: 'Banking & PSU Fund',
            benchmark: 'NIFTY Banking & PSU Debt Index',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '0%',
                debt: '97.5%',
                cash: '2.5%'
            },
            topHoldings: [
                { name: 'Bond - State Bank of India (AAA)', percent: '10.2%' },
                { name: 'Bond - HDFC Bank (AAA)', percent: '9.5%' },
                { name: 'Bond - Power Finance Corporation (AAA)', percent: '8.8%' },
                { name: 'Bond - ICICI Bank (AAA)', percent: '8.2%' },
                { name: 'Bond - NTPC (AAA)', percent: '7.5%' }
            ],
            sectors: [
                { name: 'Banking Bonds (AAA)', percent: '48.5%' },
                { name: 'PSU Bonds (AAA)', percent: '42.8%' },
                { name: 'Money Market Instruments', percent: '6.2%' },
                { name: 'Others', percent: '2.5%' }
            ]
        },

        risk: {
            level: 'low',
            label: 'Low Risk',
            standardDeviation: '2.5%',
            sharpeRatio: '1.12',
            description: 'Banking & PSU funds invest in bonds issued by banks and public sector companies, offering very low credit risk as these entities have strong government backing or financial strength.'
        },

        costs: {
            expenseRatioDirect: '0.39%',
            expenseRatioRegular: '0.72%',
            exitLoad: 'Nil',
            taxLongTerm: 'At slab rate (>3 years)',
            taxShortTerm: 'At slab rate (<3 years)',
            note: 'Debt funds held for more than 3 years qualify for long-term capital gains. For investments before Apr 2023, LTCG was taxed at 20% with indexation benefit.'
        },

        manager: {
            name: 'Anil Bamboli',
            initials: 'AB',
            experience: '16+ years experience • MBA, CFA',
            bio: 'Anil Bamboli manages this fund with a focus on high-quality bonds from banks and PSUs. His conservative approach prioritizes capital preservation while delivering steady returns.'
        }
    },

    'hdfc-gilt-fund': {
        name: 'HDFC Gilt Fund',
        category: 'Gilt Fund',
        subCategory: 'Debt • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '58.16',
        navDate: '16 Oct 2025',
        categoryRank: '#18 in Gilt',

        returns: {
            '1Y': { value: '+6.4%', label: '1 Year Returns' },
            '3Y': { value: '+7.1%', label: '3 Year CAGR' },
            '5Y': { value: '+5.3%', label: '5 Year CAGR' },
            'Max': { value: '+7.9%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '3Y',

        badges: [
            { text: 'Zero Credit Risk', class: 'badge-safe' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' },
            { text: 'Government Securities', class: 'badge-liquidity' }
        ],

        quickStats: {
            aum: '₹2,940 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.48%',
            expenseSubtext: 'Direct Plan',
            exitLoad: 'Nil',
            exitSubtext: 'No exit load',
            fundAge: '31 Yrs',
            ageSubtext: 'Since 1994'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 100.5, 101.1, 101.6, 102.1, 102.7, 103.2, 103.7, 104.3, 104.8, 105.4, 105.9, 106.4],
                benchmark: [100, 100.5, 101.0, 101.5, 102.0, 102.5, 103.0, 103.5, 104.0, 104.5, 105.0, 105.5, 106.0],
                category: [100, 100.5, 101.0, 101.5, 102.0, 102.5, 103.0, 103.5, 104.0, 104.5, 105.0, 105.5, 106.0]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 101.8, 103.5, 105.3, 107.2, 109.0, 111.0, 112.9, 114.9, 117.0, 119.1, 121.2],
                benchmark: [100, 101.7, 103.4, 105.2, 107.0, 108.9, 110.8, 112.7, 114.7, 116.7, 118.8, 120.9],
                category: [100, 101.7, 103.4, 105.2, 107.0, 108.9, 110.8, 112.7, 114.7, 116.7, 118.8, 120.9]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 102.6, 105.4, 108.2, 111.1, 114.1, 117.2, 120.4, 123.7, 127.1],
                benchmark: [100, 102.5, 105.2, 107.9, 110.7, 113.6, 116.6, 119.7, 122.9, 126.2],
                category: [100, 102.5, 105.2, 107.9, 110.7, 113.6, 116.6, 119.7, 122.9, 126.2]
            },
            'Max': {
                labels: ['1994', '1998', '2002', '2006', '2010', '2014', '2018', '2022', '2025'],
                fund: [100, 135, 182, 246, 332, 448, 604, 816, 1027],
                benchmark: [100, 133, 178, 239, 320, 430, 578, 778, 980],
                category: [100, 133, 178, 239, 320, 430, 578, 778, 980]
            }
        },

        performance: {
            comparison: {
                fund: '7.1%',
                benchmark: '6.9%',
                benchmarkName: 'CRISIL Gilt Index',
                category: '6.9%'
            },
            note: 'This fund invests only in government securities, offering zero credit risk. Suitable for investors seeking safety of principal with sovereign backing.'
        },

        overview: {
            objective: 'To generate income and capital appreciation through investments in government securities across different maturity profiles.',
            why: 'HDFC Gilt Fund invests exclusively in government securities issued by the Government of India, offering zero credit risk as they are backed by the sovereign. While returns may be moderate, the fund provides highest safety of principal. Suitable for risk-averse investors.',
            whoShould: 'Suitable for highly conservative investors with low risk appetite seeking zero credit risk. Ideal for 3-5 year investment horizon, especially during periods of declining interest rates.'
        },

        details: {
            launchDate: 'Feb 14, 1994',
            category: 'Gilt Fund',
            benchmark: 'CRISIL Gilt Index',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '0%',
                debt: '98.5%',
                cash: '1.5%'
            },
            topHoldings: [
                { name: 'Government Security - 7.18% 2033', percent: '15.8%' },
                { name: 'Government Security - 7.26% 2032', percent: '14.2%' },
                { name: 'Government Security - 7.38% 2027', percent: '12.5%' },
                { name: 'Government Security - 6.79% 2034', percent: '11.8%' },
                { name: 'Government Security - 7.10% 2029', percent: '10.5%' }
            ],
            sectors: [
                { name: 'Government Securities (10+ years)', percent: '52.5%' },
                { name: 'Government Securities (5-10 years)', percent: '35.8%' },
                { name: 'Government Securities (<5 years)', percent: '10.2%' },
                { name: 'Others', percent: '1.5%' }
            ]
        },

        risk: {
            level: 'moderate',
            label: 'Moderate Risk',
            standardDeviation: '4.2%',
            sharpeRatio: '0.88',
            description: 'Gilt funds invest only in government securities, offering zero credit risk but moderate to high interest rate risk depending on portfolio duration. Best for long-term investors during falling rate scenarios.'
        },

        costs: {
            expenseRatioDirect: '0.48%',
            expenseRatioRegular: '0.82%',
            exitLoad: 'Nil',
            taxLongTerm: 'At slab rate (>3 years)',
            taxShortTerm: 'At slab rate (<3 years)',
            note: 'Debt funds held for more than 3 years qualify for long-term capital gains. For investments before Apr 2023, LTCG was taxed at 20% with indexation benefit.'
        },

        manager: {
            name: 'Anil Bamboli',
            initials: 'AB',
            experience: '16+ years experience • MBA, CFA',
            bio: 'Anil Bamboli is a Senior Fund Manager at HDFC Asset Management Company with deep expertise in managing government securities portfolios. He focuses on duration management and yield curve positioning.'
        }
    },

    'hdfc-childrens-fund': {
        name: "HDFC Children's Fund",
        category: 'Solution Oriented Fund',
        subCategory: 'Children • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '327.54',
        navDate: '16 Oct 2025',
        categoryRank: '#3 in Children Funds',

        returns: {
            '1Y': { value: '+0.9%', label: '1 Year Returns' },
            '3Y': { value: '+15.4%', label: '3 Year CAGR' },
            '5Y': { value: '+19.4%', label: '5 Year CAGR' },
            'Max': { value: '+15.8%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '5Y',

        badges: [
            { text: '5 Year Lock-in', class: 'badge-liquidity' },
            { text: 'Tax Benefit u/s 80C', class: 'badge-safe' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹10,307 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.90%',
            expenseSubtext: 'Direct Plan',
            exitLoad: 'Nil',
            exitSubtext: 'Lock-in applies',
            fundAge: '22 Yrs',
            ageSubtext: 'Since 2003'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 100.5, 100.8, 100.6, 99.8, 100.2, 100.5, 100.8, 100.4, 100.7, 101.0, 100.8, 100.9],
                benchmark: [100, 100.3, 100.6, 100.4, 99.6, 100.0, 100.3, 100.6, 100.2, 100.5, 100.8, 100.6, 100.7],
                category: [100, 100.4, 100.7, 100.5, 99.7, 100.1, 100.4, 100.7, 100.3, 100.6, 100.9, 100.7, 100.8]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 104.8, 109.8, 115.0, 120.5, 126.2, 132.1, 138.3, 144.8, 151.5, 158.5, 165.8],
                benchmark: [100, 104.5, 109.2, 114.2, 119.5, 125.0, 130.8, 136.8, 143.0, 149.5, 156.2, 163.2],
                category: [100, 104.6, 109.5, 114.6, 120.0, 125.6, 131.5, 137.5, 143.9, 150.5, 157.4, 164.5]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 115, 132, 148, 160, 178, 202, 228, 256, 285],
                benchmark: [100, 113, 128, 143, 155, 172, 195, 220, 247, 275],
                category: [100, 114, 130, 145, 157, 175, 198, 224, 251, 280]
            },
            'Max': {
                labels: ['2003', '2006', '2009', '2012', '2015', '2018', '2021', '2024', '2025'],
                fund: [100, 145, 205, 290, 410, 580, 820, 1150, 1320],
                benchmark: [100, 140, 195, 275, 385, 545, 770, 1080, 1240],
                category: [100, 142, 200, 282, 397, 562, 795, 1115, 1280]
            }
        },

        performance: {
            comparison: {
                fund: '19.4%',
                benchmark: '18.6%',
                benchmarkName: 'Hybrid Equity Index',
                category: '19.0%'
            },
            note: 'This fund combines equity and debt investments to build a corpus for your child\'s future education and other needs. The 5-year lock-in ensures disciplined saving.'
        },

        overview: {
            objective: 'To generate long-term capital appreciation and income for children\'s future needs through a balanced portfolio of equity and debt investments.',
            why: "HDFC Children's Fund is specifically designed to help parents build a corpus for their children's education, marriage, or other future financial needs. The fund has a mandatory 5-year lock-in period or until the child attains majority (18 years), whichever is earlier, promoting disciplined saving. The hybrid allocation provides growth through equities while debt provides stability.",
            whoShould: 'Suitable for parents or guardians looking to invest for their children\'s long-term financial goals with a disciplined approach. Ideal for those seeking tax benefits under Section 80C with a 5+ year investment horizon.'
        },

        details: {
            launchDate: 'Dec 29, 2003',
            category: 'Children Fund (Solution Oriented)',
            benchmark: 'Hybrid Equity Index',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: '5 years or till child attains majority',
            dividend: 'Not available'
        },

        portfolio: {
            allocation: {
                equity: '65.5%',
                debt: '31.2%',
                cash: '3.3%'
            },
            topHoldings: [
                { name: 'HDFC Bank', percent: '5.8%' },
                { name: 'ICICI Bank', percent: '4.9%' },
                { name: 'Infosys', percent: '4.2%' },
                { name: 'Reliance Industries', percent: '3.8%' },
                { name: 'TCS', percent: '3.5%' }
            ],
            sectors: [
                { name: 'Financial Services', percent: '24.5%' },
                { name: 'Information Technology', percent: '18.2%' },
                { name: 'Consumer Goods', percent: '12.8%' },
                { name: 'Debt Securities', percent: '31.2%' },
                { name: 'Others', percent: '13.3%' }
            ]
        },

        risk: {
            level: 'moderately-high',
            label: 'Moderately High Risk',
            standardDeviation: '14.8%',
            sharpeRatio: '1.12',
            description: 'This hybrid fund invests primarily in equities (65%+) with debt allocation for stability. The 5-year lock-in ensures long-term wealth creation while moderating short-term volatility concerns.'
        },

        costs: {
            expenseRatioDirect: '0.90%',
            expenseRatioRegular: '1.65%',
            exitLoad: 'Not applicable (lock-in applies)',
            taxLongTerm: '10% above ₹1 lakh (equity portion)',
            taxShortTerm: '15% (equity portion)',
            note: 'Investments in this fund qualify for tax deduction under Section 80C up to ₹1.5 lakh. Lock-in period is 5 years or until the child attains majority age (18 years), whichever is earlier.'
        },

        manager: {
            name: 'Gopal Agrawal',
            initials: 'GA',
            experience: '18+ years experience • CFA, MBA',
            bio: 'Gopal Agrawal is a Senior Fund Manager at HDFC Asset Management with extensive experience in managing hybrid and solution-oriented funds. He focuses on creating balanced portfolios that meet long-term financial goals while managing risk.'
        }
    },

    'hdfc-retirement-savings-equity': {
        name: 'HDFC Retirement Savings Fund - Equity Plan',
        category: 'Solution Oriented Fund',
        subCategory: 'Retirement • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '57.37',
        navDate: '16 Oct 2025',
        categoryRank: '#2 in Retirement Funds',

        returns: {
            '1Y': { value: '-0.7%', label: '1 Year Returns' },
            '3Y': { value: '+21.4%', label: '3 Year CAGR' },
            '5Y': { value: '+24.1%', label: '5 Year CAGR' },
            'Max': { value: '+27.8%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '5Y',

        badges: [
            { text: '5 Year Lock-in', class: 'badge-liquidity' },
            { text: 'Tax Benefit u/s 80C', class: 'badge-safe' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹2,845 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.85%',
            expenseSubtext: 'Direct Plan',
            exitLoad: 'Nil',
            exitSubtext: 'Lock-in applies',
            fundAge: '8 Yrs',
            ageSubtext: 'Since 2017'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 100.2, 100.5, 100.0, 98.5, 99.2, 99.8, 100.2, 99.5, 99.8, 100.1, 99.7, 99.3],
                benchmark: [100, 100.0, 100.3, 99.8, 98.3, 99.0, 99.6, 100.0, 99.3, 99.6, 99.9, 99.5, 99.1],
                category: [100, 100.1, 100.4, 99.9, 98.4, 99.1, 99.7, 100.1, 99.4, 99.7, 100.0, 99.6, 99.2]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 107.0, 114.5, 122.5, 131.0, 140.2, 150.0, 160.5, 171.8, 183.9, 196.8, 210.5],
                benchmark: [100, 106.5, 113.8, 121.5, 129.8, 138.8, 148.5, 158.8, 169.9, 181.7, 194.3, 207.6],
                category: [100, 106.8, 114.2, 122.0, 130.4, 139.5, 149.2, 159.6, 170.8, 182.8, 195.5, 209.0]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 122, 148, 172, 188, 212, 245, 282, 325, 370],
                benchmark: [100, 120, 144, 168, 184, 207, 239, 275, 317, 362],
                category: [100, 121, 146, 170, 186, 209, 242, 278, 321, 366]
            },
            'Max': {
                labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
                fund: [100, 115, 138, 152, 210, 245, 320, 425, 510],
                benchmark: [100, 112, 132, 145, 200, 235, 305, 405, 485],
                category: [100, 113, 135, 148, 205, 240, 312, 415, 497]
            }
        },

        performance: {
            comparison: {
                fund: '24.1%',
                benchmark: '23.5%',
                benchmarkName: 'NIFTY 500 TRI',
                category: '23.8%'
            },
            note: 'This equity-oriented retirement fund focuses on long-term wealth creation through diversified equity investments across market caps. The 5-year lock-in period aligns with retirement planning goals.'
        },

        overview: {
            objective: 'To generate long-term capital appreciation for retirement planning through investments predominantly in equity and equity-related instruments.',
            why: 'HDFC Retirement Savings Fund - Equity Plan is designed exclusively for retirement planning with a mandatory 5-year lock-in or until retirement age (whichever is earlier). The fund follows a flexi-cap approach, investing across large, mid, and small cap companies to maximize long-term growth. Being equity-oriented with 65%+ equity exposure, it offers higher growth potential suitable for long-term retirement corpus building.',
            whoShould: 'Suitable for investors planning for retirement with a long-term horizon (10+ years) and high risk tolerance. Ideal for young professionals looking to build a retirement corpus through aggressive equity investments.'
        },

        details: {
            launchDate: 'May 11, 2017',
            category: 'Retirement Fund - Equity (Solution Oriented)',
            benchmark: 'NIFTY 500 TRI',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: '5 years or till retirement age',
            dividend: 'Not available'
        },

        portfolio: {
            allocation: {
                equity: '96.8%',
                debt: '0%',
                cash: '3.2%'
            },
            topHoldings: [
                { name: 'HDFC Bank', percent: '6.2%' },
                { name: 'ICICI Bank', percent: '5.4%' },
                { name: 'Infosys', percent: '4.8%' },
                { name: 'Reliance Industries', percent: '4.5%' },
                { name: 'Bharti Airtel', percent: '3.9%' }
            ],
            sectors: [
                { name: 'Financial Services', percent: '28.5%' },
                { name: 'Information Technology', percent: '19.8%' },
                { name: 'Energy', percent: '12.5%' },
                { name: 'Consumer Discretionary', percent: '11.2%' },
                { name: 'Others', percent: '28.0%' }
            ]
        },

        risk: {
            level: 'high',
            label: 'Very High Risk',
            standardDeviation: '18.5%',
            sharpeRatio: '1.25',
            description: 'This is a pure equity fund investing 65%+ in equities across market caps with a flexi-cap approach. High volatility in short term is expected, but the long-term lock-in period helps investors ride out market cycles for wealth creation.'
        },

        costs: {
            expenseRatioDirect: '0.85%',
            expenseRatioRegular: '1.60%',
            exitLoad: 'Not applicable (lock-in applies)',
            taxLongTerm: '10% above ₹1 lakh',
            taxShortTerm: '15%',
            note: 'Investments qualify for tax deduction under Section 80C up to ₹1.5 lakh. Lock-in period is 5 years or until you attain retirement age (currently 60 years), whichever is earlier. This ensures disciplined long-term investing.'
        },

        manager: {
            name: 'Chirag Setalvad',
            initials: 'CS',
            experience: '20+ years experience • MBA, CFA',
            bio: 'Chirag Setalvad is Head of Equities at HDFC Asset Management Company with over two decades of experience in equity research and fund management. He specializes in identifying high-quality businesses with sustainable competitive advantages for long-term wealth creation.'
        }
    },

    'hdfc-balanced-advantage': {
        name: 'HDFC Balanced Advantage Fund',
        category: 'Dynamic Asset Allocation Fund',
        subCategory: 'Hybrid • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '567.93',
        navDate: '15 Oct 2025',
        categoryRank: '#8 in Balanced Advantage',

        returns: {
            '1Y': { value: '+2.9%', label: '1 Year Returns' },
            '3Y': { value: '+20.8%', label: '3 Year CAGR' },
            '5Y': { value: '+23.8%', label: '5 Year CAGR' },
            'Max': { value: '+19.5%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '5Y',

        badges: [
            { text: 'Balanced Returns', class: 'badge-safe' },
            { text: 'Dynamic Allocation', class: 'badge-liquidity' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹87,519 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.72%',
            expenseSubtext: 'Direct Plan',
            exitLoad: '1%',
            exitSubtext: '< 1 year',
            fundAge: '24 Yrs',
            ageSubtext: 'Since 2001'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 100.5, 101.0, 100.8, 100.2, 100.8, 101.2, 101.6, 101.2, 101.6, 102.0, 101.8, 102.9],
                benchmark: [100, 100.4, 100.9, 100.7, 100.1, 100.7, 101.1, 101.5, 101.1, 101.5, 101.9, 101.7, 102.8],
                category: [100, 100.4, 100.8, 100.6, 100.0, 100.6, 101.0, 101.4, 101.0, 101.4, 101.8, 101.6, 102.6]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 105.5, 111.2, 117.2, 123.5, 130.2, 137.2, 144.6, 152.4, 160.6, 169.2, 178.2],
                benchmark: [100, 105.2, 110.8, 116.6, 122.8, 129.3, 136.2, 143.5, 151.2, 159.2, 167.6, 176.4],
                category: [100, 105.0, 110.5, 116.2, 122.2, 128.6, 135.4, 142.6, 150.2, 158.2, 166.6, 175.2]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 117, 136, 154, 168, 188, 215, 245, 278, 315],
                benchmark: [100, 116, 134, 152, 166, 186, 212, 242, 275, 311],
                category: [100, 115, 133, 150, 164, 184, 210, 239, 271, 307]
            },
            'Max': {
                labels: ['2001', '2004', '2007', '2010', '2013', '2016', '2019', '2022', '2025'],
                fund: [100, 165, 285, 445, 685, 1050, 1580, 2280, 3420],
                benchmark: [100, 160, 270, 425, 650, 990, 1480, 2140, 3210],
                category: [100, 162, 277, 435, 667, 1020, 1530, 2210, 3315]
            }
        },

        performance: {
            comparison: {
                fund: '23.8%',
                benchmark: '23.2%',
                benchmarkName: 'Dynamic Asset Allocation Index',
                category: '22.9%'
            },
            note: 'This fund dynamically manages equity and debt allocation based on market valuations, providing balanced returns with lower volatility compared to pure equity funds. Consistently outperforms the benchmark.'
        },

        overview: {
            objective: 'To provide long-term capital appreciation and income by dynamically managing allocation between equity and debt based on market conditions and valuations.',
            why: 'HDFC Balanced Advantage Fund follows a dynamic asset allocation strategy, automatically adjusting equity and debt exposure based on market valuations. When markets are expensive, the fund reduces equity exposure and increases debt, and vice versa. This disciplined approach helps capture upside potential while managing downside risk, making it suitable for investors seeking equity-like returns with lower volatility. The fund is recommended in the app as the "Balanced Returns Fund" for moderate risk investors.',
            whoShould: 'Suitable for investors with moderate to moderately high risk appetite seeking balanced returns with lower volatility than pure equity funds. Ideal for 3-5 year investment horizon or those new to equity investing.'
        },

        details: {
            launchDate: 'Mar 30, 2001',
            category: 'Balanced Advantage Fund (Hybrid)',
            benchmark: 'Dynamic Asset Allocation Index',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Available'
        },

        portfolio: {
            allocation: {
                equity: '58.5%',
                debt: '35.8%',
                cash: '5.7%'
            },
            topHoldings: [
                { name: 'HDFC Bank', percent: '4.2%' },
                { name: 'ICICI Bank', percent: '3.8%' },
                { name: 'Infosys', percent: '3.5%' },
                { name: 'Reliance Industries', percent: '3.2%' },
                { name: '7.18% Govt. Security 2033', percent: '3.0%' }
            ],
            sectors: [
                { name: 'Financial Services', percent: '22.8%' },
                { name: 'Debt Securities', percent: '35.8%' },
                { name: 'Information Technology', percent: '11.5%' },
                { name: 'Energy', percent: '8.2%' },
                { name: 'Others', percent: '21.7%' }
            ]
        },

        risk: {
            level: 'moderately-high',
            label: 'Moderately High Risk',
            standardDeviation: '11.2%',
            sharpeRatio: '1.89',
            description: 'Balanced Advantage Funds dynamically adjust equity-debt allocation, offering equity-like returns with significantly lower volatility. The automatic rebalancing helps manage risk during market extremes.'
        },

        costs: {
            expenseRatioDirect: '0.72%',
            expenseRatioRegular: '1.47%',
            exitLoad: '1% if redeemed < 1 year',
            taxLongTerm: '10% above ₹1 lakh',
            taxShortTerm: '15%',
            note: 'This fund is treated as an equity fund for taxation purposes as it maintains 65%+ equity exposure (including arbitrage) for tax efficiency. Dynamic allocation provides equity taxation benefits with hybrid risk profile.'
        },

        manager: {
            name: 'Srinivasan Ramamurthy',
            initials: 'SR',
            experience: '22+ years experience • MBA, CFA',
            bio: 'Srinivasan Ramamurthy is a Senior Fund Manager at HDFC Asset Management Company specializing in hybrid and balanced advantage strategies. He has deep expertise in dynamic asset allocation models and macro-economic analysis to optimize portfolio positioning across market cycles.'
        }
    },

    'hdfc-nifty50-equal-weight': {
        name: 'HDFC NIFTY50 Equal Weight Index Fund',
        category: 'Index Fund',
        subCategory: 'Equity • HDFC Mutual Fund',
        fundHouse: 'HDFC Mutual Fund',

        nav: '18.24',
        navDate: '13 Oct 2025',
        categoryRank: '#12 in Index Funds',

        returns: {
            '1Y': { value: '+0.6%', label: '1 Year Returns' },
            '3Y': { value: '+16.7%', label: '3 Year CAGR' },
            '5Y': { value: 'N/A', label: '5 Year CAGR' },
            'Max': { value: '+15.8%', label: 'Since Launch (Annualized)' }
        },
        defaultPeriod: '3Y',

        badges: [
            { text: 'Passive Fund', class: 'badge-safe' },
            { text: 'Low Cost', class: 'badge-expense' },
            { text: 'Min. SIP: ₹100', class: 'badge-min' }
        ],

        quickStats: {
            aum: '₹1,503 Cr',
            aumSubtext: 'Fund Size',
            expenseRatio: '0.40%',
            expenseSubtext: 'Direct Plan',
            exitLoad: 'Nil',
            exitSubtext: 'No exit load',
            fundAge: '5 Yrs',
            ageSubtext: 'Since 2020'
        },

        chartData: {
            '1Y': {
                labels: ['Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025'],
                fund: [100, 100.2, 100.5, 100.1, 98.8, 99.5, 99.9, 100.3, 99.8, 100.2, 100.6, 100.3, 100.6],
                benchmark: [100, 100.2, 100.5, 100.1, 98.8, 99.5, 99.9, 100.3, 99.8, 100.2, 100.6, 100.3, 100.6],
                category: [100, 100.1, 100.4, 100.0, 98.7, 99.4, 99.8, 100.2, 99.7, 100.1, 100.5, 100.2, 100.5]
            },
            '3Y': {
                labels: ['Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025'],
                fund: [100, 105.2, 110.6, 116.2, 122.0, 128.2, 134.6, 141.2, 148.2, 155.5, 163.2, 171.2],
                benchmark: [100, 105.2, 110.6, 116.2, 122.0, 128.2, 134.6, 141.2, 148.2, 155.5, 163.2, 171.2],
                category: [100, 105.0, 110.3, 115.8, 121.5, 127.5, 133.8, 140.4, 147.3, 154.5, 162.1, 170.0]
            },
            '5Y': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 115, 130, 142, 152, 168, 188, 210, 235, 262],
                benchmark: [100, 115, 130, 142, 152, 168, 188, 210, 235, 262],
                category: [100, 114, 128, 140, 150, 166, 186, 207, 232, 258]
            },
            'Max': {
                labels: ['2020', '2021 Q2', '2021 Q4', '2022 Q2', '2022 Q4', '2023 Q2', '2023 Q4', '2024 Q2', '2024 Q4', '2025 Q2'],
                fund: [100, 115, 130, 142, 152, 168, 188, 210, 235, 262],
                benchmark: [100, 115, 130, 142, 152, 168, 188, 210, 235, 262],
                category: [100, 114, 128, 140, 150, 166, 186, 207, 232, 258]
            }
        },

        performance: {
            comparison: {
                fund: '16.7%',
                benchmark: '16.7%',
                benchmarkName: 'NIFTY 50 Equal Weight TRI',
                category: '16.4%'
            },
            note: 'This index fund passively tracks the NIFTY 50 Equal Weight Index, where all 50 stocks have equal weightage (2% each). This provides better diversification compared to market-cap weighted indices and reduces concentration risk.'
        },

        overview: {
            objective: 'To generate returns that closely correspond to the total returns of the NIFTY 50 Equal Weight Index, subject to tracking error.',
            why: 'HDFC NIFTY50 Equal Weight Index Fund is a passive fund that tracks the NIFTY 50 Equal Weight Index. Unlike the regular NIFTY 50 where stocks are weighted by market cap, this index gives equal weight (2%) to all 50 stocks. This approach reduces concentration risk, gives higher exposure to smaller companies within NIFTY 50, and can potentially outperform during periods when mid-sized companies in the index perform well. The low expense ratio (0.40%) makes it cost-efficient for long-term investing.',
            whoShould: 'Suitable for investors seeking large-cap equity exposure with better diversification than traditional market-cap weighted indices. Ideal for those who prefer passive investing with a 5+ year investment horizon and want to avoid stock concentration risk.'
        },

        details: {
            launchDate: 'Jan 9, 2020',
            category: 'Index Fund - NIFTY 50 Equal Weight',
            benchmark: 'NIFTY 50 Equal Weight TRI',
            minSIP: '₹100',
            minLumpsum: '₹5,000',
            lockIn: 'None',
            dividend: 'Not available'
        },

        portfolio: {
            allocation: {
                equity: '98.2%',
                debt: '0%',
                cash: '1.8%'
            },
            topHoldings: [
                { name: 'Adani Ports', percent: '2.1%' },
                { name: 'Apollo Hospitals', percent: '2.1%' },
                { name: 'Asian Paints', percent: '2.1%' },
                { name: 'Axis Bank', percent: '2.1%' },
                { name: 'Bajaj Auto', percent: '2.1%' }
            ],
            sectors: [
                { name: 'Financial Services', percent: '32.5%' },
                { name: 'Information Technology', percent: '18.2%' },
                { name: 'Consumer Goods', percent: '14.8%' },
                { name: 'Energy', percent: '12.5%' },
                { name: 'Others', percent: '22.0%' }
            ]
        },

        risk: {
            level: 'high',
            label: 'Very High Risk',
            standardDeviation: '16.8%',
            sharpeRatio: '0.95',
            description: 'As an equity index fund, it carries high market risk. However, equal weighting provides better diversification compared to market-cap weighted indices, potentially reducing concentration risk in mega-cap stocks.'
        },

        costs: {
            expenseRatioDirect: '0.40%',
            expenseRatioRegular: '0.65%',
            exitLoad: 'Nil',
            taxLongTerm: '10% above ₹1 lakh',
            taxShortTerm: '15%',
            note: 'As a passively managed index fund, the expense ratio is significantly lower than actively managed equity funds. The fund aims to minimize tracking error and closely replicate the index returns.'
        },

        manager: {
            name: 'Nandita Menezes',
            initials: 'NM',
            experience: '15+ years experience • MBA, CFA',
            bio: 'Nandita Menezes is a Fund Manager at HDFC Asset Management Company specializing in passive investments and index fund management. She focuses on portfolio construction, rebalancing strategies, and minimizing tracking error to ensure the fund closely mirrors the index performance.'
        }
    }
};

// Helper function to get fund data by slug
function getFundData(slug) {
    return fundsData[slug] || null;
}

// Helper function to get all fund slugs
function getAllFundSlugs() {
    return Object.keys(fundsData);
}
