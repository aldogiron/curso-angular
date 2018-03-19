using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Api.Models
{
    public class RegistroUsuarioRequestModel
    {
        [Required]
        [StringLength(200)]
        public string Login { get; set; }

        [Required]
        public string Clave { get; set; }

        [Required]
        [EmailAddress]
        [StringLength(200)]
        public string Correo { get; set; }

        [Required]
        [StringLength(300)]
        public string Nombre { get; set; }
    }

    public class RegistroUsuarioResponseModel
    {
        public Guid Id { get; set; }
        public string Login { get; set; }
        public string Correo { get; set; }
        public string Nombre { get; set; }
    }
}