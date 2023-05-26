export function getCurrentMonth(): string {
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    
    return months[currentMonthIndex];
  }