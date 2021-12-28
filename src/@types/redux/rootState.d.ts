import { DetailInterface, festival } from "./../festival.d";

export interface RootStateInterface {
  festivals: {
    festivals: festival[] | null;
    detail: DetailInterface | null;
    loading: boolean;
  };
}
