using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Backend.Api.Entities;
using Backend.Api.Exceptions;
using Backend.Api.Models;
using Backend.Api.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [Route("api/[controller]")]
    public class AutenticacionController: Controller 
    {
        private readonly BackendDb db;
        private readonly PasswordHasher hasher;

        public AutenticacionController(BackendDb db, PasswordHasher hasher)
        {
            this.db = db;
            this.hasher = hasher;
        }

        [HttpGet("roles")]
        public IActionResult ObtenerRoles() {
            return Ok(new []{"usuarios", "developers", "admin"});
        }

        [HttpPost]
        public Task<IActionResult> AutenticarAsync([FromBody] AutenticarRequestModel requestModel)
        {
            if (!ModelState.IsValid)
            {
                var badRequest = BadRequest(ModelState) as IActionResult;
                return Task.FromResult(badRequest);
            }

            var responseModel = ValidarLoginClave(requestModel);
            return AutenticarResponseAsync(responseModel);
        }

        private AutenticarResponseModel ValidarLoginClave(AutenticarRequestModel requestModel)
        {
            var login = requestModel.Login.ToLower().Trim();
            var clave = requestModel.Clave;
            var usuario = ObtenerUsuario(login);

            if (usuario == null || !ClaveEsValida(usuario, clave))
            {
                throw new AutenticacionException("Usuario o clave incorrecto");
            }

            return CrearResponseModel(usuario);
        }

        private AutenticarResponseModel CrearResponseModel(Usuario usuario)
        {
            var roles = ObtenerRolesIds(usuario.Id);

            var responseModel = new AutenticarResponseModel
            {
                Id = usuario.Id,
                Login = usuario.Login,
                Nombre = usuario.Nombre,
                Correo = usuario.Correo,
                Roles = roles
            };
            return responseModel;
        }

        private bool ClaveEsValida(Usuario usuario, string clave)
        {
            var claveEncriptada = hasher.ComputeHash(clave, usuario.Salt);
            return usuario.Clave == claveEncriptada;
        }

        private string[] ObtenerRolesIds(Guid usuarioId)
        {
            return db.UsuarioRoles
                    .Where(x => x.UsuarioId == usuarioId)
                    .Select(x => x.RolId)
                    .ToArray();
        }

        private Usuario ObtenerUsuario(string login)
        {
            return db.Usuarios.SingleOrDefault(x => x.Login.ToLower() == login);
        }

        private async Task<IActionResult> AutenticarResponseAsync(AutenticarResponseModel response)
        {
            ClaimsPrincipal principal = CrearIdentidad(response);
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);
            return Ok(response);
        }

        private static ClaimsPrincipal CrearIdentidad(AutenticarResponseModel response)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, response.Id.ToString()),
                new Claim(ClaimTypes.Name, response.Nombre),
            };

            var userIdentity = new ClaimsIdentity(claims, "Autenticacion");
            return new ClaimsPrincipal(userIdentity);
        }
    }
}