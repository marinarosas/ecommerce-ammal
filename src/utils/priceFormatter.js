export const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
  
  //para usar real substituir:
  // --> o primeiro parametro por'pt-BR'
  // --> o segundo parametro - prop -> currency: 'BRL'