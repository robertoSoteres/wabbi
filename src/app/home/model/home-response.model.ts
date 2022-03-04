import { SWCharacter } from "src/app/shared/model/sw-character.model";


export interface HomeResponse {
    count: number;
    next: string;
    previous: string;
    results: SWCharacter[];
}