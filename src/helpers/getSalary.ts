export const getSalary = (salary: string): string => {
  const salaryItems = salary.split('-').map(num => {
    let salary = '';
    salary = Number.parseInt(num) + ' 000';

    return salary;
  });

  return `€ ${salaryItems[0]}-${salaryItems[1]}`;
};
