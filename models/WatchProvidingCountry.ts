import { WatchProvider } from "./WatchProvider";

export interface WatchProvidingCountry {
	link: string;
	flatrate: WatchProvider[];
	buy: WatchProvider[];
	rent: WatchProvider[];
}