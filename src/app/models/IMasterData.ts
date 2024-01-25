import { ICompany, LanguageCode } from './language/ICompany';

export interface IMasterData {
  companyData: Map<LanguageCode, ICompany>;
}
