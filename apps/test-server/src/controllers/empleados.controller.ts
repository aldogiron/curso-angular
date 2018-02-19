import { Request, Response } from 'express';

let empleadoId = 0;
const empleados: any[] = [];



export let  get = (request: Request, response: Response) => {
    delay(() => response.json(empleados).send());
}

export let  getById = (request: Request, response: Response) => {
    getEmpleado(request, response, (empleado) => response.json(empleado).send());
}


export let  post = (request: Request, response: Response) => {

    empleadoId++;

    const body = request.body;
    const empleado = {
        id: empleadoId,
        nombre: body.nombre
    };

    empleados.push(empleado);

    delay(() =>
        response
            .status(201)
            .location("/empleados/" + empleadoId)
            .json(empleado)
            .send()
    )

}

export let  put = (request: Request, response: Response) => {

    getEmpleado(request, response, (empleado) => {
        
        empleado.nombre = request.body.nombre;

        delay(() => response.status(200).send());
    });

}

export let _delete = (request: Request, response: Response) => {

    getEmpleado(request, response, (empleado) => {
        const idx = empleados.indexOf(empleado);
        empleados.splice(idx, 1);

        delay(() => response.status(200).send());
    });

}

function getEmpleado(request: Request, response: Response, callback: (emp: any) => void) {
    const empleadoId = getEmpleadoId(request);

    if (!empleadoId) {
        response.status(400).send();
        return;
    }

    const empleado = empleados.filter(x => x.id === empleadoId).pop();

    if (!empleado) {
        response.status(404).send();
        return;
    }

    delay(() => callback(empleado));
}

function getEmpleadoId(request: Request) {
    return parseInt(request.params.empleadoId, 10) || 0;
}

function delay(callback: () => void) {
    const time = Math.random() * 1000;
    setTimeout(callback, time);
}