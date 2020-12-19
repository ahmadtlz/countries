export const GET_COUNTRY_START = 'GET_COUNTRY_START';
export const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS';
export const GET_COUNTRY_FAILURE = 'GET_COUNTRY_FAILURE';

export interface ICurrency {
  code:string;
  name:string;
  symbol:string;
}
export interface ILanguage {
  iso639_1:string;
  iso639_2:string;
  name:string;
  nativeName:string;
}
export interface ITranslations{
  de:string;
  es:string;
  fr:string;
  ja:string;
  it:string;
  br:string;
  pt:string;
  nl:string;
  hr:string;
  fa:string;
}
export interface IRegionalBloc {
  acronym:string;
  name:string;
  otherAcronyms:string[];
  otherNames:string[]
}
export interface ICountry {
 name:string;
 topLevelDomain:string[];
 alpha2Code:string;
 alpha3Code:string;
 callingCodes:string[];
 capital:string;
 altSpellings:string[];
 region:string;
 subregion:string;
 population:number;
 latlng:number[];
 demonym:string;
 area:number;
 gini:number;
 timezones:string[];
 borders:string[];
 nativeName:string;
 numericCode:string;
 currencies:ICurrency[];
 languages:ILanguage[];
 translations:ITranslations;
 flag:string;
 regionalBlocs:IRegionalBloc[];
 cioc:string
}

export interface CountryError {
  code:string;
  message:string;
}

export interface CountryState {
  data: ICountry | null;
  loading: boolean;
  error: string;
}

interface GetCountryStartAction{
    type:typeof GET_COUNTRY_START;
    payload:string;
}
interface GetCountryAction {
  type: typeof GET_COUNTRY_SUCCESS;
  payload:ICountry
}

interface SetErrorAction {
  type:typeof GET_COUNTRY_FAILURE
  payload:string;
}

export type CountryAction=GetCountryStartAction | SetErrorAction |GetCountryAction;
