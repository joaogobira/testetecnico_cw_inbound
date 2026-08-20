document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const inputCost      = document.getElementById('input-cost');
    const inputExpenses  = document.getElementById('input-expenses');
    const inputProfit    = document.getElementById('input-profit');
    const inputCardTax   = document.getElementById('input-card-tax');
    const presetBtns     = document.querySelectorAll('.preset-btn');

    const resultsError   = document.getElementById('results-error');
    const resultsDisplay = document.getElementById('results-display');

    const resPrice    = document.getElementById('res-price');
    const resDivisor  = document.getElementById('res-divisor');
    const resMulti    = document.getElementById('res-multi');

    const barCost     = document.getElementById('bar-cost');
    const barExpenses = document.getElementById('bar-expenses');
    const barTax      = document.getElementById('bar-tax');
    const barProfit   = document.getElementById('bar-profit');

    const resCostVal      = document.getElementById('res-cost-val');
    const resExpensesVal  = document.getElementById('res-expenses-val');
    const resTaxVal       = document.getElementById('res-tax-val');
    const resProfitVal    = document.getElementById('res-profit-val');

    const resCompareCurrentRate = document.getElementById('res-compare-current-rate');
    const resCompOthers         = document.getElementById('res-comp-others');
    const resCompIp             = document.getElementById('res-comp-ip');
    const resSavingsValue       = document.getElementById('res-savings-value');
    const resSavingsMonthly     = document.getElementById('res-savings-monthly');
    const resSavingsAnnual      = document.getElementById('res-savings-annual');

    // --- InfinitePay Real Rates (sourced from infinitepay.io) ---
    const IP_RATES = {
        pix:          0.00,
        debito:       0.75,
        credito1x:    2.89,
        credito1xPlus: 3.16,
        parcelado12x: 9.80
    };

    // Sales per month baseline for savings projection
    const SALES_PER_MONTH = 100;

    // Determine the best InfinitePay rate to compare against
    const getIpComparisonRate = (cardTax) => {
        if (cardTax <= 0)                              return IP_RATES.pix;
        if (cardTax <= IP_RATES.debito)                return IP_RATES.pix;
        if (cardTax <= IP_RATES.credito1x)             return IP_RATES.debito;
        if (cardTax <= IP_RATES.credito1xPlus)         return IP_RATES.credito1x;
        if (cardTax <= IP_RATES.parcelado12x)          return IP_RATES.credito1xPlus;
        return IP_RATES.parcelado12x;
    };

    // --- Helpers ---
    const fmt = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);
    const fmtPct = (v) => new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 }).format(v) + '%';

    // --- Core Calculation ---
    const calculate = () => {
        const cost     = parseFloat(inputCost.value)     || 0;
        const expenses = parseFloat(inputExpenses.value) || 0;
        const profit   = parseFloat(inputProfit.value)   || 0;
        const cardTax  = parseFloat(inputCardTax.value)  || 0;

        const sumPct = expenses + profit + cardTax;

        if (sumPct >= 100 || cost <= 0) {
            resultsError.classList.remove('hidden');
            resultsDisplay.style.opacity = '0.3';
            resultsDisplay.style.pointerEvents = 'none';
            return;
        }

        resultsError.classList.add('hidden');
        resultsDisplay.style.opacity = '1';
        resultsDisplay.style.pointerEvents = 'auto';

        // Markup Divisor
        const divisor      = (100 - sumPct) / 100;
        const sellPrice    = cost / divisor;
        const multiplier   = sellPrice / cost;

        const amtCost      = cost;
        const amtExpenses  = sellPrice * (expenses / 100);
        const amtCardTax   = sellPrice * (cardTax  / 100);
        const amtProfit    = sellPrice * (profit   / 100);
        const costPct      = (amtCost / sellPrice) * 100;

        // Price
        resPrice.textContent   = fmt(sellPrice);
        resDivisor.textContent = divisor.toFixed(4).replace('.', ',');
        resMulti.textContent   = multiplier.toFixed(2).replace('.', ',') + 'x';

        // Bars
        barCost.style.width     = `${costPct}%`;
        barExpenses.style.width = `${expenses}%`;
        barTax.style.width      = `${cardTax}%`;
        barProfit.style.width   = `${profit}%`;

        // Legends
        resCostVal.textContent     = `${fmt(amtCost)} (${fmtPct(costPct)})`;
        resExpensesVal.textContent = `${fmt(amtExpenses)} (${fmtPct(expenses)})`;
        resTaxVal.textContent      = `${fmt(amtCardTax)} (${fmtPct(cardTax)})`;
        resProfitVal.textContent   = `${fmt(amtProfit)} (${fmtPct(profit)})`;

        // --- InfinitePay Comparison ---
        const ipRate         = getIpComparisonRate(cardTax);
        const amtIp          = sellPrice * (ipRate / 100);
        const savingsPerSale = Math.max(0, amtCardTax - amtIp);
        const savingsMonthly = savingsPerSale * SALES_PER_MONTH;
        const savingsAnnual  = savingsMonthly * 12;

        resCompareCurrentRate.textContent = cardTax.toFixed(2).replace('.', ',');
        resCompOthers.textContent         = fmt(amtCardTax);
        resCompIp.textContent             = fmt(amtIp);
        resSavingsValue.textContent       = fmt(savingsPerSale);

        if (resSavingsMonthly) resSavingsMonthly.textContent = fmt(savingsMonthly);
        if (resSavingsAnnual)  resSavingsAnnual.textContent  = fmt(savingsAnnual);

        // Update the IP rate label in comparison box
        const ipRateLabel = document.querySelector('.comp-box.infinitepay .comp-rate');
        if (ipRateLabel) {
            const label = ipRate === 0
                ? '0% (Pix Gratis)'
                : `${String(ipRate.toFixed(2)).replace('.', ',')}% (InfinitePay)`;
            ipRateLabel.textContent = label;
        }

        // Update own rate label
        const ownRateLabel = document.querySelector('#res-rate-others');
        if (ownRateLabel) ownRateLabel.textContent = fmtPct(cardTax);
    };

    // --- Inputs ---
    [inputCost, inputExpenses, inputProfit, inputCardTax].forEach(inp => {
        inp.addEventListener('input', () => {
            if (inp === inputCardTax) presetBtns.forEach(b => b.classList.remove('active'));
            calculate();
        });
    });

    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            inputCardTax.value = parseFloat(btn.getAttribute('data-rate'));
            calculate();
        });
    });

    // --- FAQ Accordion (aria-accessible) ---
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const isOpen = btn.getAttribute('aria-expanded') === 'true';
            const answerId = btn.getAttribute('aria-controls');
            const answer   = answerId ? document.getElementById(answerId) : null;

            // Close all
            document.querySelectorAll('.faq-question').forEach(b => {
                b.setAttribute('aria-expanded', 'false');
                const aid = b.getAttribute('aria-controls');
                if (aid) {
                    const a = document.getElementById(aid);
                    if (a) a.hidden = true;
                }
            });

            // Open clicked (if was closed)
            if (!isOpen && answer) {
                btn.setAttribute('aria-expanded', 'true');
                answer.hidden = false;
            }
        });
    });

    // Initial calculation
    calculate();
});
