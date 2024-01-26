import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICompany, LanguageCode } from '../models/language/ICompany';
import { MasterDataService } from './master-data.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _masterData$!: BehaviorSubject<ICompany>;
  private languageCode: LanguageCode = 'de';

  constructor(private masterDataService: MasterDataService) {
    this._masterData$ = new BehaviorSubject<ICompany>(
      this.load(this.languageCode)
    );
  }

  public changeLanguage(code: LanguageCode): void {
    if (code !== this.languageCode) {
      this.languageCode = code;
      this._masterData$.next(this.load(code));
    }
  }

  public get LanguageCodes(): LanguageCode[] {
    return Array.from(this.masterDataService.Content.companyData.keys());
  }

  public get MasterData$(): BehaviorSubject<ICompany> {
    return this._masterData$;
  }

  private load(code: LanguageCode): ICompany {
    const result = this.masterDataService.Content.companyData.get(code);
    if (result !== undefined) {
      return result;
    }
    throw new Error('Not implemented error!');
  }
}
