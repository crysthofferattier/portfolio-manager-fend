import { HttpHeaders } from "@angular/common/http";

export const environment = {
    production: true,
    apiUrl: 'http://localhost:8765/api/v1',
    httpHeaders: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        })
    }
};
