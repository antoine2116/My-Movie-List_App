import { WatchProvidingCountry } from "./WatchProvidingCountry";

export interface WatchProvidingCountries {
	id: number;
	results: {
		[key: string]: WatchProvidingCountry
	}
}