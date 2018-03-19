using System;
using System.Linq;
using System.Transactions;
using Backend.Api.Entities;
using Backend.Api.Models;
using Backend.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [Route("api/[controller]")]
    public class RegistroUsuariosController: Controller
    {
        private readonly BackendDb db;
        private readonly PasswordHasher hasher;

        public RegistroUsuariosController(BackendDb db, PasswordHasher hasher)
        {
            this.db = db;
            this.hasher = hasher;
        }

        [HttpPost]
        public IActionResult Registrar([FromBody] RegistroUsuarioRequestModel requestModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var login = requestModel.Login.Trim().ToLower();
            var correo = requestModel.Correo.Trim().ToLower();
            var salt = hasher.CreateRandomSalt();
            var clave = hasher.ComputeHash(requestModel.Clave, salt);

            var usuario = new Usuario
            {
                Id = Guid.NewGuid(),
                Login = login,
                Clave = clave,
                Salt = salt,
                Correo = correo,
                Nombre = requestModel.Nombre.Trim()
            };


            using(var trx = db.Database.BeginTransaction())
            {
                var existe = db.Usuarios.Any(x => x.Login.ToLower() == login || x.Correo == correo);
                if (existe)
                {
                    return BadRequest(new { Message = "Ya existe un usuario con ese login o correo registrado."});
                }
                
                db.Usuarios.Add(usuario);
                db.SaveChanges();
                trx.Commit();
            }

            var responseModel = new RegistroUsuarioResponseModel
            {
                Id = usuario.Id,
                Login = usuario.Login,
                Correo = usuario.Correo,
                Nombre = usuario.Nombre
            };

            return Created("/api/usuarios/" + usuario.Id, responseModel);
        }

    }
}