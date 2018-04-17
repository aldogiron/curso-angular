import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent
    } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private x = 1;

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<
            HttpSentEvent |
            HttpHeaderResponse |
            HttpProgressEvent |
            HttpResponse<any> |
            HttpUserEvent<any>
        > {
        const inicia = new Date();
        const id = this.x++;
        console.log(id + ' haciendo request a ' + req.url);

        const request = req.clone(
            {
                setHeaders: {
                    Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
                },
                setParams: {
                    Test: '1'
                }
            }
        );

        return next.handle(request).catch(r => {
            alert('error');
            return Observable.throw(r);
        }).do(r => {
            const fin = new Date();
            const total = fin.getTime() - inicia.getTime();
            console.log(id + ' request completado en: ' + total + 'ms');
        });
    }
}
