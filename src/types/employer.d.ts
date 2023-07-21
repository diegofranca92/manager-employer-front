declare namespace Employer {
  export interface IEmployer {
    id?: number | string;
    name: string
    position: string
    entry_date: string
    exit_date?: string
    vacation_date?: boolean
    company: Company.ICompany
  }
}
