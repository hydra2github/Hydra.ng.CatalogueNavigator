import {Injectable} from '@angular/core';

@Injectable()
export class AppConstantsModule {

    public static readonly API_URL = 'api';

    public static get baseURL(): string { 
        //return "https://hydrahubdev.azurewebsites.net"; 
        return "http://localhost:8886";
    }
    
    static Role = class {
        public static readonly ADMIN = 'ROLE_ADMIN';
    };

}