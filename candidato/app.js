document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const inputCost = document.getElementById('input-cost');
    const inputExpenses = document.getElementById('input-expenses');
    const inputProfit = document.getElementById('input-profit');
    const inputCardTax = document.getElementById('input-card-tax');
    
    const presetBtns = document.querySelectorAll('.preset-btn');
    
    const resultsError = document.getElementById('results-error');
    const resultsDisplay = document.getElementById('results-display');
    
    const resPrice = document.getElementById('res-price');
    const resDivisor = document.getElementById('res-divisor');
    const resMulti = document.getElementById('res-multi');
    
    // Bar segments
    const barCost = document.getElementById('bar-cost');
    const barExpenses = document.getElementById('bar-expenses');
    const barTax = document.getElementById('bar-tax');
    const barProfit = document.getElementById('bar-profit');
    
    // Legend labels
    const resCostVal = document.getElementById('res-cost-val');
    const resExpensesVal = document.getElementById('res-expenses-val');
    const resTaxVal = document.getElementById('res-tax-val');
    const resProfitVal = document.getElementById('res-profit-val');
    
    // CTA comparison elements
    const resCompareCurrentRate = document.getElementById('res-compare-current-rate');
    const resCompOthers = document.getElementById('res-comp-others');
    const resCompIp = document.getElementById('res-comp-ip');
    const resSavingsValue = document.getElementById('res-savings-value');
    
    // --- Helper Functions ---
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    const formatPercent = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 1,
            maximumFractionDigits: 2
        }).format(value) + '%';
    };

    // --- Core Calculation Logic ---
    const calculatePricing = () => {
        const cost = parseFloat(inputCost.value) || 0;
        const expenses = parseFloat(inputExpenses.value) || 0;
        const profit = parseFloat(inputProfit.value) || 0;
        const cardTax = parseFloat(inputCardTax.value) || 0;
        
        const sumPercents = expenses + profit + cardTax;
        
        // Validation: Sum of percentages cannot exceed or equal 100%
        if (sumPercents >= 100 || cost <= 0) {
            resultsError.classList.remove('hidden');
            resultsDisplay.style.opacity = '0.3';
            resultsDisplay.style.pointerEvents = 'none';
            return;
        }
        
        resultsError.classList.add('hidden');
        resultsDisplay.style.opacity = '1';
        resultsDisplay.style.pointerEvents = 'auto';
        
        // Markup Divisor Calculation
        const divisor = (100 - sumPercents) / 100;
        const sellingPrice = cost / divisor;
        const multiplier = sellingPrice / cost;
        
        // Distribution amounts
        const costAmount = cost;
        const expensesAmount = sellingPrice * (expenses / 100);
        const cardTaxAmount = sellingPrice * (cardTax / 100);
        const profitAmount = sellingPrice * (profit / 100);
        
        // Proportions on final price
        const costPct = (costAmount / sellingPrice) * 100;
        
        // Update Suggested Price
        resPrice.textContent = formatCurrency(sellingPrice);
        resDivisor.textContent = divisor.toFixed(4).replace('.', ',');
        resMulti.textContent = multiplier.toFixed(2).replace('.', ',') + 'x';
        
        // Update Chart Bars
        barCost.style.width = `${costPct}%`;
        barExpenses.style.width = `${expenses}%`;
        barTax.style.width = `${cardTax}%`;
        barProfit.style.width = `${profit}%`;
        
        // Update Legends
        resCostVal.textContent = `${formatCurrency(costAmount)} (${formatPercent(costPct)})`;
        resExpensesVal.textContent = `${formatCurrency(expensesAmount)} (${formatPercent(expenses)})`;
        resTaxVal.textContent = `${formatCurrency(cardTaxAmount)} (${formatPercent(cardTax)})`;
        resProfitVal.textContent = `${formatCurrency(profitAmount)} (${formatPercent(profit)})`;
        
        // --- Comparison with InfinitePay ---
        // IP rate is Crédito à Vista (3.16%) as standard baseline, or Debit if user is simulating low
        let ipTaxRate = 3.16;
        if (cardTax <= 3.16 && cardTax > 1.38) {
            ipTaxRate = 1.38; // Compare with Debit if user enters a low credit rate
        } else if (cardTax <= 1.38) {
            ipTaxRate = 0; // If user has extreme low rate, economy is 0
        }
        
        resCompareCurrentRate.textContent = cardTax.toFixed(2).replace('.', ',');
        
        const taxOthers = cardTaxAmount;
        const taxIp = sellingPrice * (ipTaxRate / 100);
        const savings = Math.max(0, taxOthers - taxIp);
        
        resCompOthers.textContent = formatCurrency(taxOthers);
        resCompIp.textContent = formatCurrency(taxIp);
        resSavingsValue.textContent = formatCurrency(savings);
    };
    
    // --- Event Listeners ---
    const inputs = [inputCost, inputExpenses, inputProfit, inputCardTax];
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            // Remove active state from preset buttons if user types manually in card tax
            if (input === inputCardTax) {
                presetBtns.forEach(btn => btn.classList.remove('active'));
            }
            calculatePricing();
        });
    });
    
    // Preset buttons clicks
    presetBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const rate = parseFloat(btn.getAttribute('data-rate'));
            inputCardTax.value = rate;
            calculatePricing();
        });
    });
    
    // Initial run
    calculatePricing();
});
